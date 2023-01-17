import { useState } from 'react'
import { Button } from '~/ui'

export default function SponsorBox(props: Props) {
  const [sponsors, setSponsors] = useState(props.does)
  const [loading, setLoading] = useState(false)

  function handleSponsor() {
    setLoading(true)
    setTimeout(() => {
      setSponsors(true)
      setLoading(false)
    }, 2000)
  }

  function handleUnsponsor() {
    setLoading(true)
    setTimeout(() => {
      setSponsors(false)
      setLoading(false)
    }, 2000)
  }

  if (sponsors)
    return (
      <Button
        className={`sm:pr-0 w-[unset] ${props.className}`}
        onClick={handleUnsponsor}
        loading={loading}
      >
        Sponsoring
      </Button>
    )

  return (
    <Button
      loading={loading}
      variant="primary"
      onClick={handleSponsor}
      className={props.className}
    >
      Sponsor
    </Button>
  )
}

interface Props {
  does: boolean
  className?: string
}
