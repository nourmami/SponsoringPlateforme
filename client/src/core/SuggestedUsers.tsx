import { useGetAllUsers } from './api/users'
import UserCard from './UserCard'

export default function SuggestedUsers() {
  const { data } = useGetAllUsers()
  console.log(data)

  return (
    <div className="flex flex-col space-y-4">
      <h1 className="font-semibold text-xl">Suggested Users</h1>
      <div className="grid gap-6">
        {data?.map(
          (user: {
            id: string
            fullname: string
            profilePicture?: string
            title?: string
          }) => (
            <UserCard
              id={user.id}
              key={user.id}
              fullname={user.fullname}
              image={user.profilePicture}
              title={user.title}
            />
          )
        )}
      </div>
    </div>
  )
}
