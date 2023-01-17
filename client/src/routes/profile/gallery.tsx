import ProfileHeader from '~/core/ProfileHeader'
import { Button, Container } from '~/ui'
import ProfileNavigation from '~/core/ProfileNavigation'
import GalleryCard from '~/core/GalleryCard'
import Modal from '~/ui/Modal'
import UploadPostForm from '~/core/UploadPostForm'
import SuggestedUsers from '~/core/SuggestedUsers'

export default function Gallery() {
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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="rounded-2xl h-48 grid place-content-center bg-primary-600">
                <Modal>
                  <Modal.Trigger
                    variant="primary"
                    className="hover:bg-primary-900"
                  >
                    Upload New Post
                  </Modal.Trigger>
                  <Modal.Content>
                    <UploadPostForm />
                  </Modal.Content>
                </Modal>
              </div>
              <GalleryCard image="/fake/cover.png" />
              <GalleryCard image="/fake/art1.png" />
              <GalleryCard image="/fake/art2.png" />
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
