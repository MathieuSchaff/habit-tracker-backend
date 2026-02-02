import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_authenticated/habits')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_authenticated/habits"!</div>
}
