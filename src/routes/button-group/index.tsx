import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/button-group/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/button-group/"!</div>
}
