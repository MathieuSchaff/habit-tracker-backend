import { type AuthInput, authSchema } from '@habit-tracker/shared'

import { useQueryClient } from '@tanstack/react-query'
import { Link, useNavigate } from '@tanstack/react-router'
import { ArrowLeft, Eye, EyeOff, Lock, Mail } from 'lucide-react'
import { useState } from 'react'
import z from 'zod'

import { useLogin } from '../../../lib/queries/auth'
import './LoginPage.css'

import { useAuthStore } from '../../../store/auth'

type FieldErrors = Partial<Record<keyof AuthInput | 'form', string>>

const API_ERROR_MESSAGES = {
  invalid_credentials: 'Email ou mot de passe incorrect',
  server_error: 'Erreur serveur, réessayez plus tard',
} as const

export const LoginPage = () => {
  const [errors, setErrors] = useState<FieldErrors>({})
  const [showPassword, setShowPassword] = useState(false)

  const setAuth = useAuthStore((s) => s.setAuth)
  const navigate = useNavigate()
  const login = useLogin()
  const queryClient = useQueryClient()

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault()

    const formData = Object.fromEntries(new FormData(e.currentTarget))
    const result = authSchema.safeParse(formData)

    if (!result.success) {
      const { fieldErrors } = z.flattenError(result.error)
      setErrors({
        email: fieldErrors.email?.[0],
        password: fieldErrors.password?.[0],
      })
      return
    }

    setErrors({})

    login.mutate(result.data, {
      onSuccess: (res) => {
        if (res.success) {
          setAuth(res.data.accessToken, res.data.user)
          queryClient.invalidateQueries({ queryKey: ['session'] })
          queryClient.invalidateQueries({ queryKey: ['auth'] })
          navigate({ to: '/dashboard' })
          return
        }

        const message = API_ERROR_MESSAGES[res.error] ?? 'Erreur inconnue'
        setErrors({ form: message })
      },
    })
  }

  return (
    <div className="login">
      <div className="login__topbar">
        <Link to="/" className="login__back" aria-label="Retour" title="Retour à l'accueil">
          <ArrowLeft size={18} />
        </Link>
      </div>

      <div className="login__header">
        <h1 className="login__title">Connexion</h1>
        <p className="login__subtitle">Content de vous revoir sur Aurore</p>
      </div>

      <form className="login__form" onSubmit={handleSubmit} noValidate>
        {errors.form && (
          <p className="login__error-banner" role="alert">
            {errors.form}
          </p>
        )}

        <div className={`login__field ${errors.email ? 'login__field--error' : ''}`}>
          <Mail size={18} className="login__field-icon" aria-hidden="true" />
          <div className="login__field-body">
            <label htmlFor="login-email" className="login__label">
              Email
            </label>
            <input
              id="login-email"
              name="email"
              type="email"
              className="login__input"
              placeholder="nom@exemple.com"
              required
              autoComplete="email"
            />
          </div>
        </div>
        {errors.email && <p className="login__field-error">{errors.email}</p>}

        <div className={`login__field ${errors.password ? 'login__field--error' : ''}`}>
          <Lock size={18} className="login__field-icon" aria-hidden="true" />
          <div className="login__field-body">
            <label htmlFor="login-password" className="login__label">
              Mot de passe
            </label>
            <input
              id="login-password"
              name="password"
              type={showPassword ? 'text' : 'password'}
              className="login__input"
              placeholder="••••••••"
              required
              autoComplete="current-password"
            />
          </div>
          <button
            type="button"
            className="login__field-toggle"
            onClick={() => setShowPassword((v) => !v)}
            aria-label={showPassword ? 'Masquer le mot de passe' : 'Afficher le mot de passe'}
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>
        {errors.password && <p className="login__field-error">{errors.password}</p>}

        <Link to="/forgot-password" className="login__forgot">
          Mot de passe oublié ?
        </Link>

        <button type="submit" className="login__submit" disabled={login.isPending}>
          {login.isPending ? 'Connexion...' : 'Se connecter'}
        </button>
      </form>
    </div>
  )
}
