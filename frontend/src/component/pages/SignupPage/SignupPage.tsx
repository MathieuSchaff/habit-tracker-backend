import { type AuthInput, authSchema } from '@habit-tracker/shared'

import { useQueryClient } from '@tanstack/react-query'
import { useNavigate } from '@tanstack/react-router'
import { Check, Eye, EyeOff, Lock, Mail, X } from 'lucide-react'
import { useMemo, useState } from 'react'
import z from 'zod'

import { useSignup } from '../../../lib/queries/auth'
import './SignupPage.css'

type FieldErrors = Partial<Record<keyof AuthInput | 'confirmPassword' | 'form', string>>

const API_ERROR_MESSAGES = {
  email_exists: 'Cet email est déjà utilisé',
  server_error: 'Erreur serveur, réessayez plus tard',
} as const

const PASSWORD_RULES = [
  { key: 'length', label: '8 caractères minimum', test: (v: string) => v.length >= 8 },
  { key: 'number', label: 'Un chiffre (0-9) ou symbole', test: (v: string) => /[\d\W]/.test(v) },
  {
    key: 'case',
    label: 'Minuscule (a-z) et majuscule (A-Z)',
    test: (v: string) => /[a-z]/.test(v) && /[A-Z]/.test(v),
  },
] as const

export const SignupPage = () => {
  const [errors, setErrors] = useState<FieldErrors>({})
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)
  const [touched, setTouched] = useState(false)

  const navigate = useNavigate()
  const signup = useSignup()
  const queryClient = useQueryClient()

  const passwordChecks = useMemo(
    () => PASSWORD_RULES.map((rule) => ({ ...rule, valid: rule.test(password) })),
    [password]
  )

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault()

    // Check confirm password match
    if (password !== confirmPassword) {
      setErrors({ confirmPassword: 'Les mots de passe ne correspondent pas' })
      return
    }

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

    signup.mutate(result.data, {
      onSuccess: (res) => {
        if (res.success) {
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
    <>
      <div className="signup__header">
        <h1 className="signup__title">Créer un compte</h1>
        <p className="signup__subtitle">Commencez à suivre vos habitudes</p>
      </div>

      <form className="signup__form" onSubmit={handleSubmit} noValidate>
        {errors.form && (
          <p className="signup__error-banner" role="alert">
            {errors.form}
          </p>
        )}

        <div className={`signup__field ${errors.email ? 'signup__field--error' : ''}`}>
          <Mail size={18} className="signup__field-icon" aria-hidden="true" />
          <div className="signup__field-body">
            <label htmlFor="signup-email" className="signup__label">
              Email
            </label>
            <input
              id="signup-email"
              name="email"
              type="email"
              className="signup__input"
              placeholder="nom@exemple.com"
              required
              autoComplete="email"
            />
          </div>
        </div>
        {errors.email && <p className="signup__field-error">{errors.email}</p>}

        <div className={`signup__field ${errors.password ? 'signup__field--error' : ''}`}>
          <Lock size={18} className="signup__field-icon" aria-hidden="true" />
          <div className="signup__field-body">
            <label htmlFor="signup-password" className="signup__label">
              Mot de passe
            </label>
            <input
              id="signup-password"
              name="password"
              type={showPassword ? 'text' : 'password'}
              className="signup__input"
              placeholder="••••••••"
              required
              autoComplete="new-password"
              value={password}
              onFocus={() => setTouched(true)}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="button"
            className="signup__field-toggle"
            onClick={() => setShowPassword((v) => !v)}
            aria-label={showPassword ? 'Masquer le mot de passe' : 'Afficher le mot de passe'}
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>
        {errors.password && <p className="signup__field-error">{errors.password}</p>}

        {touched && (
          <ul className="signup__rules" aria-label="Règles du mot de passe">
            {passwordChecks.map(({ key, label, valid }) => (
              <li key={key} className={`signup__rule ${valid ? 'signup__rule--valid' : ''}`}>
                {valid ? (
                  <Check size={14} className="signup__rule-icon" />
                ) : (
                  <X size={14} className="signup__rule-icon" />
                )}
                {label}
              </li>
            ))}
          </ul>
        )}

        <div className={`signup__field ${errors.confirmPassword ? 'signup__field--error' : ''}`}>
          <Lock size={18} className="signup__field-icon" aria-hidden="true" />
          <div className="signup__field-body">
            <label htmlFor="signup-confirm" className="signup__label">
              Confirmer le mot de passe
            </label>
            <input
              id="signup-confirm"
              type={showConfirm ? 'text' : 'password'}
              className="signup__input"
              placeholder="••••••••"
              required
              autoComplete="new-password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <button
            type="button"
            className="signup__field-toggle"
            onClick={() => setShowConfirm((v) => !v)}
            aria-label={showConfirm ? 'Masquer la confirmation' : 'Afficher la confirmation'}
          >
            {showConfirm ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>
        {errors.confirmPassword && <p className="signup__field-error">{errors.confirmPassword}</p>}

        {confirmPassword.length > 0 && (
          <div
            className={`signup__rule ${password === confirmPassword ? 'signup__rule--valid' : ''}`}
          >
            {password === confirmPassword ? (
              <Check size={14} className="signup__rule-icon" />
            ) : (
              <X size={14} className="signup__rule-icon" />
            )}
            Les mots de passe correspondent
          </div>
        )}

        <button type="submit" className="signup__submit" disabled={signup.isPending}>
          {signup.isPending ? 'Création...' : 'Créer mon compte'}
        </button>
      </form>
    </>
  )
}
