import { useGetMe } from './api/users/context'
import ProfileHeader from './ProfileHeader'

export default function MyProfileHeader() {
  const { data } = useGetMe()
  return (
    <ProfileHeader
      role={data.role}
      profilePicture={data.profilePicture}
      coverPicture={data.coverPicture}
      name={data.fullname}
      title={data.title}
      sponsorsCount={54}
      actions={null}
    />
  )
}
