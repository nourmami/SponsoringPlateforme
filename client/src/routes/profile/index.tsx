import ProfileHeader from '~/core/ProfileHeader'
import { Button, Container } from '~/ui'
import ProfileNavigation from '~/core/ProfileNavigation'
import SuggestedUsers from '~/core/SuggestedUsers'

export default function Index() {
  return (
    <div className="py-10">
      <Container className="grid grid-cols-4 gap-10">
        <div className="col-span-4 xl:col-span-3">
          <ProfileHeader
            profilePicture="/fake/profile.png"
            name="John Doe"
            title="Designer & CEO"
            sponsorsCount={54}
            actions={null}
          />
          <ProfileNavigation />
          <div className="px-2 sm:px-6 py-6">
            Lorem ipsum dolor sit amet consectetur. Quis nam lacus ac egestas
            elementum urna. Lorem ipsum dolor sit amet consectetur. Quis nam
            lacus ac egestas elementum urna. Lorem ipsum dolor sit amet
            consectetur. Quis nam lacus ac egestas elementum urna.
          </div>
        </div>

        <div className="col-span-4 xl:col-span-1">
          <SuggestedUsers />
        </div>
      </Container>
    </div>
  )
}
