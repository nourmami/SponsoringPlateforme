import { useState } from 'react'
import { Button } from '~/ui'

export default function FollowBox(props: Props) {
  const [follows, setFollows] = useState(props.does)
  const [loading, setLoading] = useState(false)

  function handleFollow() {
    setLoading(true)
    setTimeout(() => {
      setFollows(true)
      setLoading(false)
    }, 2000)
  }

  function handleUnfollow() {
    setLoading(true)
    setTimeout(() => {
      setFollows(false)
      setLoading(false)
    }, 2000)
  }

  if (follows)
    return (
      <Button
        variant="tertiary"
        className="border-none w-[unset]"
        onClick={handleUnfollow}
        loading={loading}
      >
        Following
      </Button>
    )

  return (
    <Button loading={loading} variant="tertiary" onClick={handleFollow}>
      Follow
    </Button>
  )
}

interface Props {
  does: boolean
}
