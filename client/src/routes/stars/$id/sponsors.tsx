import ProfileHeader from '~/core/ProfileHeader'
import { Button, Container } from '~/ui'
import UserCard from '~/core/UserCard'
import StarProfileNavigation from '~/core/StarProfileNavigator'
import FollowBox from '~/core/FollowBox'
import SponsorBox from '~/core/SponsorBox'
import SuggestedUsers from '~/core/SuggestedUsers'
import { useGetUser } from '~/core/api/users'
import { useGetMe } from '~/core/api/users/context'

export default function Sponsors() {
  const { data, isLoading } = useGetUser()
  const me = useGetMe()

  if (isLoading) return null

  if (!data) return <div>User not found</div>

  return (
    <div className="py-10">
      <Container className="grid grid-cols-4 gap-10">
        <div className="col-span-4 xl:col-span-3">
          <ProfileHeader
            profilePicture={data.profilePicture}
            name={data.fullname}
            title={data.title}
            role={data.role}
            sponsorsCount={54}
            actions={
              <div className="grid grid-cols-2 sm:flex space-x-2 justify-end">
                {me.data?.role !== 'sponsor' ? (
                  <div>
                    <FollowBox className="!w-full sm:w-[unset]" />
                  </div>
                ) : (
                  <div>
                    <SponsorBox does={false} className="!w-full sm:w-[unset]" />
                  </div>
                )}
              </div>
            }
          />
          <StarProfileNavigation />
          <div className="px-2 sm:px-6 py-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* <UserCard />
              <UserCard />
              <UserCard />
              <UserCard />
              <UserCard /> */}
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
