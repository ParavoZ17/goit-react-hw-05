
import { Link } from 'react-router-dom'

export default function NotFoundPage() {
    return (
        <div>
        <p>Sorry, page not found</p>
        <Link to="/">Back to HOMEPAGE!!!</Link>
        </div>
    )
}