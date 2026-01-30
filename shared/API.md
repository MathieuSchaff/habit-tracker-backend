# Habit Tracker API

Documentation des endpoints, types et schémas de validation.

---

## Types de réponse

Toutes les réponses suivent ce format :

**Succès :**
```typescript
{
  success: true,
  data: T,
  message?: string
}
```

**Erreur :**
```typescript
{
  success: false,
  error: string,
  details?: unknown
}
```

---

## Auth

Base path: `/auth`

### GET /auth/ping

Health check.

| | |
|---|---|
| **Auth requise** | Non |
| **Response type** | `PingResponse` |

**Response 200 :**
```json
{
  "success": true,
  "data": { "ok": true }
}
```

---

### POST /auth/login

Connexion avec email et mot de passe.

| | |
|---|---|
| **Auth requise** | Non |
| **Rate limit** | Oui |
| **Input schema** | `authSchema` |
| **Response type** | `LoginResponse` |

**Input :**
| Champ | Type | Règles |
|-------|------|--------|
| email | string | Email valide, trimmed, lowercase |
| password | string | 8-128 chars, 1 minuscule, 1 majuscule, 1 chiffre |

**Response 200 :**
```json
{
  "success": true,
  "data": {
    "user": {
      "id": "uuid",
      "email": "user@example.com"
    }
  }
}
```

**Erreurs :**
| Code | Status | Description |
|------|--------|-------------|
| `invalid_credentials` | 401 | Email ou mot de passe incorrect |
| `invalid_input` | 400 | Validation échouée |
| `server_error` | 500 | Erreur serveur |
| `rate_limit_exceeded` | 429 | Trop de tentatives |

---

### POST /auth/signup

Création de compte.

| | |
|---|---|
| **Auth requise** | Non |
| **Rate limit** | Oui |
| **Input schema** | `authSchema` |
| **Response type** | `SignupResponse` |

**Input :**
| Champ | Type | Règles |
|-------|------|--------|
| email | string | Email valide, trimmed, lowercase |
| password | string | 8-128 chars, 1 minuscule, 1 majuscule, 1 chiffre |

**Response 200 :**
```json
{
  "success": true,
  "data": {
    "user": {
      "id": "uuid",
      "email": "user@example.com"
    }
  }
}
```

**Erreurs :**
| Code | Status | Description |
|------|--------|-------------|
| `email_exists` | 409 | Email déjà utilisé |
| `invalid_input` | 400 | Validation échouée |
| `server_error` | 500 | Erreur serveur |
| `rate_limit_exceeded` | 429 | Trop de tentatives |

---

### POST /auth/logout

Déconnexion.

| | |
|---|---|
| **Auth requise** | Non (mais utilise le cookie `sid`) |
| **Response type** | `LogoutResponse` |

**Response 200 :**
```json
{
  "success": true,
  "data": null,
  "message": "Disconnected"
}
```

---

## Profile

Base path: `/me`

### GET /me

Récupérer le profil de l'utilisateur connecté.

| | |
|---|---|
| **Auth requise** | Oui |
| **Response type** | `MeResponse` |

**Response 200 :**
```json
{
  "success": true,
  "data": {
    "userId": "uuid",
    "username": "johndoe",
    "firstName": "John",
    "lastName": "Doe",
    "bio": "Hello world",
    "avatarUrl": "https://...",
    "createdAt": "2025-01-01T00:00:00Z",
    "updatedAt": "2025-01-01T00:00:00Z"
  }
}
```

**Erreurs :**
| Code | Status | Description |
|------|--------|-------------|
| `not_found` | 404 | Profil non trouvé |
| `unauthorized` | 401 | Non authentifié |
| `server_error` | 500 | Erreur serveur |

---

### PATCH /me

Mettre à jour le profil.

| | |
|---|---|
| **Auth requise** | Oui |
| **Input schema** | `profileUpdateSchema` |
| **Response type** | `MeResponse` |

**Input :**
| Champ | Type | Règles |
|-------|------|--------|
| username | string? | 1-50 chars |
| bio | string? | Max 500 chars |
| avatarUrl | string? | URL valide |

**Response 200 :**
```json
{
  "success": true,
  "data": {
    "userId": "uuid",
    "username": "newusername",
    "bio": "Updated bio",
    ...
  }
}
```

**Erreurs :**
| Code | Status | Description |
|------|--------|-------------|
| `not_found` | 404 | Profil non trouvé |
| `invalid_input` | 400 | Validation échouée |
| `unauthorized` | 401 | Non authentifié |
| `server_error` | 500 | Erreur serveur |

---

## Schémas Zod

Tous les schémas sont exportés depuis `@habit-tracker/shared`.

### authSchema

```typescript
z.object({
  email: z.email().trim().toLowerCase(),
  password: z.string()
    .min(8, "Minimum 8 caractères")
    .max(128, "Maximum 128 caractères")
    .regex(/[a-z]/, "Au moins une minuscule")
    .regex(/[A-Z]/, "Au moins une majuscule")
    .regex(/[0-9]/, "Au moins un chiffre"),
})
```

### profileUpdateSchema

```typescript
z.object({
  username: z.string().min(1).max(50).optional(),
  bio: z.string().max(500).optional(),
  avatarUrl: z.url().optional(),
}).strict()
```

---

## Types exportés

### Depuis `@habit-tracker/shared`

**Types API :**
- `ApiResponse<T, E>` — Type union success/error
- `ApiSuccess<T>` — Réponse succès
- `ApiError<E>` — Réponse erreur
- `HttpStatus` — Codes HTTP (200, 400, 401, etc.)
- `CommonErrorCode` — Erreurs communes (invalid_input, not_found, etc.)

**Helpers :**
- `ok(data, message?)` — Crée une réponse succès
- `err(error, details?)` — Crée une réponse erreur
- `errorToStatus(error, mapping)` — Convertit code erreur → status HTTP
- `isApiSuccess(response)` — Type guard
- `isApiError(response)` — Type guard

**Types Auth :**
- `UserPublic` — `{ id, email }`
- `LoginResponse`, `SignupResponse`, `LogoutResponse`, `PingResponse`
- `LoginErrorCode`, `SignupErrorCode`, `AuthErrorCode`

**Types Profile :**
- `ProfilePublic` — Données profil publiques
- `MeResponse`
- `ProfileErrorCode`

**Schémas :**
- `authSchema` + `AuthInput`
- `profileUpdateSchema` + `ProfileUpdateInput`
