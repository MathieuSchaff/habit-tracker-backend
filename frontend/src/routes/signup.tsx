import { createFileRoute } from '@tanstack/react-router'
import { SignupPage } from '../component/pages/SignupPage/SignupPage'

export const Route = createFileRoute('/signup')({
  component: RouteComponent,
})

function RouteComponent() {
    return <div>
      <SignupPage/>
  </div>
}
