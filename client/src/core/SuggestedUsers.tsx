import UserCard from './UserCard'

export default function SuggestedUsers() {
  return (
    <div className="flex flex-col space-y-4">
      <h1 className="font-semibold text-xl">Suggested Users</h1>
      <div className="grid gap-6">
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
      </div>
    </div>
  )
}
