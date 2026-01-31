import { useState } from "react";
import { Button } from "../../Button/Button";
import { Input } from "../../Input/Input";
import { AuthLayout } from "../../Layout/AuthLayout/AuthLayout";
import "./LoginPage.css";
import { useMutation } from "@tanstack/react-query";
import type { LoginResponse, LoginErrorCode } from "@habit-tracker/shared";
import { authSchema, type AuthInput } from "@habit-tracker/shared";
import { useNavigate } from "@tanstack/react-router";
import z from "zod"
import type {ZodFieldErrors} from "@habit-tracker/shared"
//  erreurs dans le formulaire

type FieldErrors = Partial<Record<keyof AuthInput | "form", string>>;
// Mapping des codes d'erreur API vers messages utilisateur
const errorMessages: Record<LoginErrorCode, string> = {
  invalid_credentials: "Email ou mot de passe incorrect",
  invalid_input: "Données invalides",
  server_error: "Erreur serveur, réessayez plus tard",
};

async function login(data: AuthInput): Promise<LoginResponse> {
  const res = await fetch("/api/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    body: JSON.stringify(data),
  });
  return res.json();
}

export const LoginPage = () => {
  const [errors, setErrors] = useState<FieldErrors>({});
  const navigate = useNavigate();

  const loginMutation = useMutation({
      mutationFn: login,
      onSuccess: (res) => {
        if (res.success) {
          navigate({ to: "/dashboard" });
        } else {
          // Si c'est une erreur de validation avec details
            if (res.error === "invalid_input" && res.details) {
              // https://zod.dev/error-formatting
              // si erreur est invalid input on va regarder quels sont les erreurs
                // email ou password pas bien formaté
              // const fe = (res.details as { fieldErrors: Record<string, string[]> }).fieldErrors;

            const { fieldErrors } = res.details as { fieldErrors: ZodFieldErrors };
            setErrors({
              email: fieldErrors.email?.[0],
              password: fieldErrors.password?.[0],
            });
          } else {
            setErrors({ form: errorMessages[res.error] ?? "Erreur inconnue" });
          }
        }
      },
  });

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.currentTarget));
    const result = authSchema.safeParse(formData);

    if (!result.success) {
      const { fieldErrors } = z.flattenError(result.error);
      setErrors({
        email: fieldErrors.email?.[0],
        password: fieldErrors.password?.[0],
      });
      return;
    }

    setErrors({});
    loginMutation.mutate(result.data);
  };
  return (
    <AuthLayout
      title="Connexion"
      footerLink={{
        text: "Pas encore de compte ?",
        to: "/signup",
        label: "Créer un compte",
      }}
    >
      <form className="login-form" onSubmit={handleSubmit}>
        {errors.form && <p className="login-error">{errors.form}</p>}

        <Input
          name="email"
          type="email"
          label="Email"
          placeholder="vous@exemple.com"
          required
          autoComplete="email"
          error={errors.email}
        />
        <Input
          name="password"
          type="password"
          label="Mot de passe"
          placeholder="••••••••"
          required
          autoComplete="current-password"
          error={errors.password}
        />

        <a href="/forgot-password" className="login-forgot">
          Mot de passe oublié ?
        </a>

        <Button
          type="submit"
          fullWidth
          variant="primary"
          disabled={loginMutation.isPending}
        >
            {/*{loginMutation.isPending ? "Connexion..." : "Se connecter"}*/}
            Se connecter
        </Button>
      </form>
    </AuthLayout>
  );
};
