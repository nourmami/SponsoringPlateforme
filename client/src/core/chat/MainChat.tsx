import { Button, Input } from '~/ui'
import { IoMdSend as SendIcon, GrStripe as StripeIcon } from '~/core/icons'
import UserCard from '../UserCard'
import Message from './Message'
import { useGetMe } from '../api/users/context'
import {
  useGenerateStripeLink,
  useGetConversationById,
  useSendMessage,
} from '../api/chat'

export default function MainChat() {
  const { isLoading, data, messages } = useGetConversationById()

  const send = useSendMessage()

  const stripe = useGenerateStripeLink()

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const target = e.target as typeof e.target & {
      message: { value: string }
    }
    const message = target.message.value
    send.mutate({ message })
    target.message.value = ''
  }

  if (isLoading) {
    return (
      <div className="flex-1 border border-t-0 flex flex-col">Loading...</div>
    )
  }

  return (
    <div className="flex-1 border border-t-0 flex flex-col">
      <div className="flex-1 px-10 py-6 flex flex-col">
        <UserCard
          id={data.id}
          fullname={data.fullname}
          image={data.profilePicture}
          title={data.title}
          hasUrl={false}
        />
        <div className="snap-y">
          <div className="flex-1 overflow-y-scroll max-h-[55vh] py-6 px-4 snap-end grid gap-y-4">
            {messages.map(message => (
              <Message key={message.id} {...message} />
            ))}
          </div>
        </div>
      </div>
      <form className="border-t flex" onSubmit={handleSubmit}>
        <div className="flex-1 p-4">
          <input
            type="text"
            name="message"
            className="focus:outline-none w-full"
            placeholder="Type a message..."
            disabled={send.isLoading}
          />
        </div>
        <div className="grid place-content-center">
          <Button
            className="text-black text-xl"
            type="button"
            disabled={stripe.isLoading}
            onClick={() => stripe.mutate()}
          >
            <StripeIcon />
          </Button>
        </div>
        <div className="grid place-content-center">
          <Button
            className="text-black text-xl"
            type="submit"
            disabled={send.isLoading}
          >
            <SendIcon />
          </Button>
        </div>
      </form>
    </div>
  )
}
