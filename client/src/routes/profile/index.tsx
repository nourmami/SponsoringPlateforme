import FollowBox from '~/core/FollowBox'
import SponsorBox from '~/core/SponsorBox'
import { Button, Container } from '~/ui'

export default function Index() {
  return (
    <div className="py-10">
      <Container className="grid grid-cols-4 gap-10">
        <div className="col-span-4 xl:col-span-3">
          <div>
            <img
              src="/fake/cover.png"
              alt="cover photo"
              className="h-56 w-full object-cover rounded-2xl"
            />
            <div className="px-4 lg:px-16 flex">
              <img
                src="/fake/profile.png"
                alt="profile picture"
                className="relative -top-14 w-48 h-48 object-cover rounded-full border-4 border-background"
              />
              <div className="flex-1 py-4 flex flex-col lg:flex-row justify-between">
                <div className="pl-4">
                  <div className="flex flex-row justify-between lg:justify-start lg:flex-col space-y-3">
                    <div>
                      <h1 className="font-bold text-xl">John Doe</h1>
                      <h2 className="font-medium text-xs">Designer & CEO</h2>
                    </div>
                    <div className="text-secondary-600 flex items-center space-x-1">
                      <img src="/icons/sponsors.svg" alt="sponsors" />
                      <span className="font-medium">54</span>
                    </div>
                  </div>
                </div>

                <div className="flex space-x-2 justify-end">
                  <div>
                    <FollowBox does />
                  </div>
                  <div>
                    <SponsorBox does={false} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h1>somelist</h1>
        </div>
      </Container>
    </div>
  )
}
