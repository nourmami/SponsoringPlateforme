import ProfileHeader from '~/core/ProfileHeader'
import ProfileNavigation from '~/core/ProfileNavigation'
import { Button, Container, Input } from '~/ui'
import {
  AiOutlineUpload as UploadIcon,
  ImBlocked as BlockedIcon,
  AiOutlineUser as UserIcon,
  MdOutlineTitle as TitleIcon,
} from '~/core/icons'
import SuggestedUsers from '~/core/SuggestedUsers'

export default function Settings() {
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
          <div className="px-2 sm:px-6 py-10">
            <div className="flex flex-col space-y-10">
              <div className="flex flex-col space-y-3">
                <h1 className="font-semibold text-xl">General Information</h1>
                <Input
                  type="text"
                  label="Fullname"
                  suffix={<UserIcon className="text-xl" />}
                />
                <Input
                  type="email"
                  label="Email"
                  disabled
                  suffix={<BlockedIcon className="text-xl" />}
                />
                <Input
                  type="text"
                  label="Title"
                  suffix={<TitleIcon className="text-xl" />}
                />
                <Input type="textarea" label="Bio" />
              </div>
              <hr />
              <div className="flex flex-col space-y-3">
                <h1 className="font-semibold text-xl">Profile / Cover Photo</h1>
                <Input
                  type="file"
                  label="Profile Photo"
                  suffix={<UploadIcon className="text-xl" />}
                />
                <Input
                  type="file"
                  label="Cover Photo"
                  suffix={<UploadIcon className="text-xl" />}
                />
              </div>
              <div className="flex justify-end">
                <Button variant="primary">Save</Button>
              </div>
            </div>
          </div>
        </div>

        <div>
          <SuggestedUsers />
        </div>
      </Container>
    </div>
  )
}
