import { useMemo } from 'react'
import { useParams } from 'react-router-dom'
import { useGetConversations } from '../api/chat'
import UserCard from '../UserCard'

export default function ConversationsSidebar() {
  const conversations = useGetConversations()
  const params = useParams()

  if (conversations.isLoading)
    return (
      <div className="w-96 border border-r-0 border-t-0 p-4">Loading...</div>
    )

  return (
    <div className="w-96 border border-r-0 border-t-0">
      {conversations.data?.map(c => (
        <div
          key={c.cid}
          className={`p-4 ${
            params.with && params.with === c.cid ? 'bg-[#e5e7eb]' : ''
          }`}
        >
          <UserCard
            id={c.cid}
            fullname={c.fullname}
            image={c.profilePicture}
            title={c.title}
            url={id => `/chat/${id}`}
          />
        </div>
      ))}
    </div>
  )
}
