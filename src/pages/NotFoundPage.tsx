import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <>
      <h2>404</h2>
      <Link to={'/'} className="button">
        Mergi inapoi!
      </Link>
    </>
  )
}
