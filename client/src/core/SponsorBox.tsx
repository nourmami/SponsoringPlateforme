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
        className="pr-0 w-[unset]"
        onClick={handleUnsponsor}
        loading={loading}
      >
        Sponsoring
      </Button>
    )

  return (
    <Button loading={loading} variant="primary" onClick={handleSponsor}>
      Sponsor
    </Button>
  )
}

interface Props {
  does: boolean
}
