import FollowBox from '~/core/FollowBox'
import ProfileHeader from '~/core/ProfileHeader'
import SponsorBox from '~/core/SponsorBox'
import { Button, Container } from '~/ui'

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
            actions={
              <div className="flex space-x-2 justify-end">
                <div>
                  <FollowBox does />
                </div>
                <div>
                  <SponsorBox does={false} />
                </div>
              </div>
            }
          />
        </div>
        <div>
          <h1>somelist</h1>
        </div>
      </Container>
    </div>
  )
}
