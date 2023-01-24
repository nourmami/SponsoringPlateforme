import UserCard from '../UserCard'

export default function ConversationsSidebar() {
  return (
    <div className="w-96 border border-r-0 border-t-0">
      <div className="p-2 bg-[#e5e7eb]">
        <UserCard
          id={'1'}
          fullname={'fullname'}
          // image={"user.profilePicture}
          title={'title'}
        />
      </div>
      <div className="p-2">
        <UserCard
          id={'1'}
          fullname={'fullname'}
          // image={"user.profilePicture}
          title={'title'}
        />
      </div>
      <div className="p-2">
        <UserCard
          id={'1'}
          fullname={'fullname'}
          // image={"user.profilePicture}
          title={'title'}
        />
      </div>
    </div>
  )
}
