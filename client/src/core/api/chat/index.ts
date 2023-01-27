import * as api from './rq'
import { useQuery, useMutation } from 'react-query'
import { useParams } from 'react-router-dom'
import { useMemo } from 'react'
import { useGetMe } from '../users/context'

export const useGetConversations = () => {
  const _conv = useQuery('conversations', api.getConversations)

  const me = useGetMe()
  const convs = useMemo(() => {
    if (!_conv.data) return []

    return _conv.data.map(
      (c: {
        id: string
        user: {
          id: string
          fullname: string
          title: string
          profilePicture: string
        }
        sponsor: {
          id: string
          fullname: string
          title: string
          profilePicture: string
        }
      }) => {
        if (c.user.id === me.data?.id) {
          return {
            ...c.sponsor,
            cid: c.id,
          }
        } else {
          return {
            ...c.user,
            cid: c.id,
          }
        }
      }
    )
  }, [_conv.data])

  return {
    ..._conv,
    data: convs as {
      id: string
      cid: string
      fullname: string
      title: string
      profilePicture: string
    }[],
  }
}

export const useGenerateStripeLink = () => {
  const params = useParams()
  const mutation = useMutation(api.generateStripeLink(params.with || ''), {
    onSuccess: data => {
      console.log(data)

      const url = data.url
      window.open(url, '_blank')
    },
  })

  return mutation
}

export const useGetConversationById = () => {
  const params = useParams()
  const _conv = useQuery(
    ['conversation', params.with],
    api.getConversationById(params.with || ''),
    {
      refetchInterval: 1000,
    }
  )

  const me = useGetMe()
  const conv = useMemo(() => {
    if (!_conv.data) return

    if (_conv.data.user.id === me.data?.id) {
      return {
        ..._conv.data.sponsor,
        cid: _conv.data.id,
      }
    } else {
      return {
        ..._conv.data.user,
        cid: _conv.data.id,
      }
    }
  }, [_conv.data])

  const messages = useMemo(() => {
    if (!_conv.data) return []

    return _conv.data.messages.map(
      (m: {
        id: string
        content: string
        createdAt: string
        type: 'text' | 'image' | 'stripe'
        senderAsSponsor: {
          id: string
          fullname: string
        }
        senderAsUser: {
          id: string
          fullname: string
        }
      }) => {
        return {
          ...m,
          user: {
            ...m.senderAsSponsor,
            ...m.senderAsUser,
          },
        }
      }
    )
  }, [_conv.data])

  return {
    ..._conv,
    data: conv as {
      id: string
      cid: string
      fullname: string
      title: string
      profilePicture: string
    },
    messages: messages as {
      id: string
      content: string
      createdAt: Date
      type: 'text' | 'image' | 'stripe'
      user: {
        id: string
        fullname: string
      }
    }[],
  }
}

export const useSendMessage = () => {
  const params = useParams()
  const { refetch } = useGetConversationById()
  const mutation = useMutation(api.sendMessage(params.with || ''), {
    onSuccess: () => {
      console.log('sent')
      refetch()
    },
  })

  return mutation
}
