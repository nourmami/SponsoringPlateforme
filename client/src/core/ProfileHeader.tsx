export default function ProfileHeader(props: Props) {
  return (
    <div>
      <img
        src={props.coverPicture || '/art/cover.png'}
        alt="cover photo"
        className="h-56 w-full object-cover rounded-2xl"
      />
      <div className="px-4 lg:px-16 flex flex-col sm:flex-row">
        <img
          src={
            props.profilePicture ||
            'https://api.dicebear.com/5.x/lorelei-neutral/svg?seed=' +
              props.name +
              '&radius=50'
          }
          alt="profile picture"
          className={`mx-auto sm:mx-[unset] ring-[5px] ring-background relative rounded-full -top-14 w-48 h-48 object-cover ${
            !props.profilePicture && 'border'
          }`}
        />
        <div className="flex-1 py-4 flex flex-col lg:flex-row justify-between space-y-3 sm:space-y-0">
          <div className="sm:pl-4">
            <div className="flex flex-row justify-between lg:justify-start lg:flex-col space-y-3">
              <div>
                <h1 className="font-bold text-xl">{props.name}</h1>
                <h2 className="font-medium text-xs">{props.title}</h2>
              </div>
              <div className="text-secondary-600 flex items-center space-x-1">
                <img src="/icons/sponsors.svg" alt="sponsors" />
                <span className="font-medium">{props.sponsorsCount || 0}</span>
              </div>
            </div>
          </div>

          <div>{props.actions}</div>
        </div>
      </div>
    </div>
  )
}

interface Props {
  coverPicture?: string
  profilePicture?: string
  name: string
  title: string
  sponsorsCount?: number
  actions?: React.ReactNode
}
