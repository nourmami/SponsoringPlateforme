import { useGetMe } from '../api/users/context'

export default function Message(props: Props) {
  const me = useGetMe()
  return (
    <div
      className="w-full flex"
      title={`sent by ${
        me.data.id !== props.user.id ? props.user.fullname : 'you'
      } at ${props.createdAt.toLocaleString()}`}
    >
      <div
        className={`px-3 py-2 rounded-xl  ${
          me.data.id !== props.user.id
            ? 'bg-gray-300'
            : 'bg-primary-500 text-white ml-auto'
        }`}
      >
        {props.content}
      </div>
    </div>
  )
}

interface Props {
  id: string
  content: string
  createdAt: Date
  user: {
    id: string
    fullname: string
  }
}
