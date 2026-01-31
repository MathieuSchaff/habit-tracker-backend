import { useState } from "react";
import { Button } from "../../Button/Button";
import { Input } from "../../Input/Input";
import { AuthLayout } from "../../Layout/AuthLayout/AuthLayout";
import "./SignupPage.css";
import { useMutation } from "@tanstack/react-query";
import type { SignupResponse, SignupErrorCode } from "@habit-tracker/shared";
import { authSchema, type AuthInput } from "@habit-tracker/shared";
import { useNavigate } from "@tanstack/react-router";
import z from "zod";
import type { ZodFieldErrors } from "@habit-tracker/shared";

type FieldErrors = Partial<Record<keyof AuthInput | "form", string>>;

// Mapping des codes d'erreur API vers messages utilisateur
const errorMessages: Record<SignupErrorCode, string> = {
  email_exists: "Cet email est déjà utilisé",
  invalid_input: "Données invalides",
  server_error: "Erreur serveur, réessayez plus tard",
};

async function signup(data: AuthInput): Promise<SignupResponse> {
  const res = await fetch("http://localhost:3000/api/auth/signup", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    body: JSON.stringify(data),
  });
  return res.json();
}

export const SignupPage = () => {
  const [errors, setErrors] = useState<FieldErrors>({});
  const navigate = useNavigate();

  const signupMutation = useMutation({
    mutationFn: signup,
    onSuccess: (res) => {
      if (res.success) {
        navigate({ to: "/dashboard" });
      } else {
        // Si c'est une erreur de validation avec details
        if (res.error === "invalid_input" && res.details) {
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
    signupMutation.mutate(result.data);
  };

  return (
    <AuthLayout
      title="Créer un compte"
      footerLink={{
        text: "Déjà un compte ?",
        to: "/login",
        label: "Se connecter",
      }}
    >
      <form className="signup-form" onSubmit={handleSubmit}>
        {errors.form && <p className="signup-error">{errors.form}</p>}

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
          autoComplete="new-password"
          error={errors.password}
        />

        <Button
          type="submit"
          fullWidth
          variant="primary"
          disabled={signupMutation.isPending}
        >
          Créer mon compte
        </Button>
      </form>
    </AuthLayout>
  );
};
