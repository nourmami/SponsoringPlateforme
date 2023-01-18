import ProfileHeader from '~/core/ProfileHeader'
import { Button, Container } from '~/ui'
import ProfileNavigation from '~/core/ProfileNavigation'
import UserCard from '~/core/UserCard'
import SuggestedUsers from '~/core/SuggestedUsers'
import MyProfileHeader from '~/core/MyProfileHeader'
import Protected from '~/Protected'
import { useGetFollowers } from '~/core/api/follow'

function Content() {
  const followers = useGetFollowers()

  console.log('followers.data', followers.data)

  return (
    <div className="py-10">
      <Container className="grid grid-cols-4 gap-10">
        <div className="col-span-4 xl:col-span-3">
          <MyProfileHeader />
          <ProfileNavigation />
          <div className="px-2 sm:px-6 py-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {followers.data?.map(
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
              {followers.data?.length === 0 && (
                <div className="text-center">
                  <p className="text-gray-500 text-sm">
                    You don't have any followers yet.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="col-span-4 xl:col-span-1">
          <SuggestedUsers />
        </div>
      </Container>
    </div>
  )
}

export default function Followers() {
  return (
    <Protected>
      <Content />
    </Protected>
  )
}
