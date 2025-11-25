import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/autocomplete/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/autocomplete/"!</div>
}
