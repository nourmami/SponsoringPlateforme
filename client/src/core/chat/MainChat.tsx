import { Button, Input } from '~/ui'
import { IoMdSend as SendIcon } from '~/core/icons'
import UserCard from '../UserCard'
import Message from './Message'
import { useGetMe } from '../api/users/context'
export default function MainChat() {
  const me = useGetMe()
  const messages = [
    {
      id: '1',
      content: 'content',
      createdAt: new Date(),
      user: {
        id: '1',
        fullname: 'fullname',
      },
    },
    {
      id: '1',
      content: 'hello world',
      createdAt: new Date(),
      user: {
        id: '1',
        fullname: 'fullname',
      },
    },
    {
      id: '1',
      content: 'hello world',
      createdAt: new Date(),
      user: {
        id: 'd0a22514-355c-4eac-8b0d-638eae09135c',
        fullname: 'fullname',
      },
    },
    {
      id: '1',
      content: 'content',
      createdAt: new Date(),
      user: {
        id: '1',
        fullname: 'fullname',
      },
    },
    {
      id: '1',
      content: 'hello world',
      createdAt: new Date(),
      user: {
        id: '1',
        fullname: 'fullname',
      },
    },
    {
      id: '1',
      content: 'hello world',
      createdAt: new Date(),
      user: {
        id: 'd0a22514-355c-4eac-8b0d-638eae09135c',
        fullname: 'fullname',
      },
    },
    {
      id: '1',
      content: 'content',
      createdAt: new Date(),
      user: {
        id: '1',
        fullname: 'fullname',
      },
    },
    {
      id: '1',
      content: 'hello world',
      createdAt: new Date(),
      user: {
        id: '1',
        fullname: 'fullname',
      },
    },
    {
      id: '1',
      content: 'hello world',
      createdAt: new Date(),
      user: {
        id: 'd0a22514-355c-4eac-8b0d-638eae09135c',
        fullname: 'fullname',
      },
    },
    {
      id: '1',
      content: 'bruh',
      createdAt: new Date(),
      user: {
        id: '1',
        fullname: 'fullname',
      },
    },
  ]

  return (
    <div className="flex-1 border border-t-0 flex flex-col">
      <div className="flex-1 px-10 py-6 flex flex-col">
        <UserCard
          id={'1'}
          fullname={'fullname'}
          // image={"user.profilePicture}
          title={'title'}
        />
        <div className="snap-y">
          <div className="flex-1 overflow-y-scroll max-h-[55vh] py-6 px-4 snap-end grid gap-y-4">
            {messages.map(message => (
              <Message {...message} />
            ))}
          </div>
        </div>
      </div>
      <div className="border-t flex">
        <div className="flex-1 p-4">
          <input
            type="text"
            className="focus:outline-none w-full"
            placeholder="Type a message..."
          />
        </div>
        <div className="grid place-content-center">
          <Button className="text-black text-xl">
            <SendIcon />
          </Button>
        </div>
      </div>
    </div>
  )
}
