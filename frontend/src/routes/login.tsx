import { createFileRoute } from '@tanstack/react-router'
import { LoginPage } from '../component/pages/LoginPage/LoginPage'

export const Route = createFileRoute('/login')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="">
      <LoginPage />
    </div>
  )
}
