import ProfileHeader from '~/core/ProfileHeader'
import { Button, Container } from '~/ui'
import UserCard from '~/core/UserCard'
import StarProfileNavigation from '~/core/StarProfileNavigator'
import FollowBox from '~/core/FollowBox'
import SponsorBox from '~/core/SponsorBox'
import SuggestedUsers from '~/core/SuggestedUsers'

export default function Sponsors() {
  return (
    <div className="py-10">
      <Container className="grid grid-cols-4 gap-10">
        <div className="col-span-4 xl:col-span-3">
          <ProfileHeader
            profilePicture="/fake/profile.png"
            name="John Doe"
            title="Designer & CEO"
            sponsorsCount={54}
            actions={
              <div className="grid grid-cols-2 sm:flex space-x-2 justify-end">
                <div>
                  <FollowBox does className="!w-full sm:w-[unset]" />
                </div>
                <div>
                  <SponsorBox does={false} className="!w-full sm:w-[unset]" />
                </div>
              </div>
            }
          />
          <StarProfileNavigation />
          <div className="px-2 sm:px-6 py-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <UserCard />
              <UserCard />
              <UserCard />
              <UserCard />
              <UserCard />
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
