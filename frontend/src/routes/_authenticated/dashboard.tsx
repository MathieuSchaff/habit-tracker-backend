import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_authenticated/dashboard')({
  component: DashboardPage,
})

function DashboardPage() {
  return (
    <div>
      <h1>Dashboard</h1>
      <p>Tu es connecté ! 🎉</p>
    </div>
  )
}
