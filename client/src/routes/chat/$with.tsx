import { Button, Container } from '~/ui'
import ProfileNavigation from '~/core/ProfileNavigation'
import Protected from '~/Protected'
import MainChat from '~/core/chat/MainChat'
import ConversationsSidebar from '~/core/chat/ConversationsSidebar'

function Content() {
  return (
    <div className="flex-1 pt-10 flex flex-col ">
      <Container>
        <ProfileNavigation />
      </Container>
      <Container className="flex flex-1">
        <ConversationsSidebar />
        <MainChat />
      </Container>
    </div>
  )
}

export default function Index() {
  return (
    <Protected>
      <Content />
    </Protected>
  )
}
