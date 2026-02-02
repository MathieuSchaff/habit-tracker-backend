import { useState } from "react";
import { Button } from "../../Button/Button";
import { Input } from "../../Input/Input";
import { AuthLayout } from "../../Layout/AuthLayout/AuthLayout";
import "./LoginPage.css";
import type {  LoginErrorCode } from "@habit-tracker/shared";
import { authSchema, type AuthInput } from "@habit-tracker/shared";
import {  useNavigate } from "@tanstack/react-router";
import z from "zod"
import type {ZodFieldErrors} from "@habit-tracker/shared"
import { useLogin } from "../../../lib/queries/auth";
import { useQueryClient } from "@tanstack/react-query";
//  erreurs dans le formulaire

type FieldErrors = Partial<Record<keyof AuthInput | "form", string>>;
// Mapping des codes d'erreur API vers messages utilisateur
const errorMessages: Record<LoginErrorCode, string> = {
  invalid_credentials: "Email ou mot de passe incorrect",
  invalid_input: "Données invalides",
  server_error: "Erreur serveur, réessayez plus tard",
};


export const LoginPage = () => {
  const [errors, setErrors] = useState<FieldErrors>({});
  const navigate = useNavigate();
const login = useLogin()
const queryClient = useQueryClient()
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
      login.mutate(result.data, {
          onSuccess: (res) => {
              if (res.success) {
                queryClient.invalidateQueries({ queryKey: ["session"] });
                  queryClient.invalidateQueries({ queryKey: ["auth"] });
                navigate({to: "/dashboard"})
              } else {
                  if (res.error === "invalid_input" && res.details) {
                    // https://zod.dev/error-formatting
                    // si erreur est invalid input on va regarder quels sont les erreurs
                    // email ou password pas bien formaté
                  const { fieldErrors } = res.details as { fieldErrors: ZodFieldErrors };
                  setErrors({
                    email: fieldErrors.email?.[0],
                    password: fieldErrors.password?.[0],
                  });
                } else {
                  setErrors({ form: errorMessages[res.error] ?? "Erreur inconnue" });
                }
             }
        }
    });
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

        {/*<Link to="/forgot-password" className="login-forgot">
          Mot de passe oublié ?
        </Link>*/}

        <Button
          type="submit"
          fullWidth
          variant="primary"
          disabled={login.isPending}
        >
            {/*{loginMutation.isPending ? "Connexion..." : "Se connecter"}*/}
            Se connecter
        </Button>
      </form>
    </AuthLayout>
  );
};
