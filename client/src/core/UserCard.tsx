import { Link } from 'react-router-dom'

export default function UserCard() {
  return (
    <div>
      <Link to="/stars/xyz">
        <div className="flex items-center space-x-4">
          <img
            src="/fake/profile.png"
            alt=""
            className="rounded-full w-16 h-16 object-cover"
          />
          <div className="flex-1">
            <h1 className="font-bold text-xl">John Doe</h1>
            <h2 className="font-medium text-xs">Hacker</h2>
          </div>
        </div>
      </Link>
    </div>
  )
}
