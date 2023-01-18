import { useCallback } from 'react'
import { Button } from '~/ui'
import { useGetMe } from './api/users/context'
import { useCurrentRoute } from './hooks'

export default function ProfileNavigation() {
  const me = useGetMe()
  const isCurrentRoute = useCurrentRoute()

  const linkStyle = useCallback(
    (_route: string) => {
      return `${
        isCurrentRoute(_route) ? '!text-[#000]' : '!text-[#888]'
      } text-xs sm:text-base`
    },
    [isCurrentRoute]
  )

  return (
    <div>
      <div className="flex flex-wrap justify-center sm:justify-start py-4">
        <Button className={linkStyle('/profile')} href="/profile">
          About
        </Button>
        <Button
          className={linkStyle('/profile/gallery')}
          href="/profile/gallery"
        >
          Gallery
        </Button>
        <Button
          className={linkStyle('/profile/settings')}
          href="/profile/settings"
        >
          Settings
        </Button>
        <Button className={linkStyle('/profile/chat')} href="/chat">
          Chat
        </Button>

        <Button
          className={linkStyle('/profile/sponsors')}
          href="/profile/sponsors"
        >
          {me.data?.role === 'sponsor' ? 'Sponsoring' : 'Sponsors'}
        </Button>
        {me.data?.role !== 'sponsor' ? (
          <Button
            className={linkStyle('/profile/followers')}
            href="/profile/followers"
          >
            Followers
          </Button>
        ) : null}
      </div>
      <hr />
    </div>
  )
}
