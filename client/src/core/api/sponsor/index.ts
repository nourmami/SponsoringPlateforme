import * as api from './rq'
import { useQuery, useMutation } from 'react-query'
import { useNavigate, useParams } from 'react-router-dom'
import { useState } from 'react'

export const useSponsor = () => {
  const { id } = useParams()

  const mutation = useMutation(api.sponsor(id || ''), {
    onSuccess: () => {
      // push('/sponsor')
    },
  })
  return mutation
}

export const useDoesSponsor = () => {
  const { id } = useParams()
  return useQuery(['doesponsor', id], api.doesSponsor(id || ''))
}

export const useGetSponsors = () => {
  const { id } = useParams()
  return useQuery(['sponsors', id], api.getSponsors(id || ''))
}

export const useGetMySponsors = () => {
  return useQuery('my-sponsors', api.getMySponsors)
}

export const useCountMySponsors = () => {
  return useQuery('count-my-sponsors', api.countMySponsors)
}

export const useCountSponsors = () => {
  const { id } = useParams()
  return useQuery(['count-sponsors', id], api.countSponsors(id || ''))
}
