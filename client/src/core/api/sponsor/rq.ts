import { getApi } from '../axios'

export const sponsor = (id: string) => async () => {
  const response = await getApi().post('/sponsor/' + id)
  return response.data
}

export const doesSponsor = (id: string) => async () => {
  const response = await getApi().get('/sponsor/doesponsor/' + id)
  return response.data
}

export const getSponsors = (id: string) => async () => {
  const response = await getApi().get('/sponsor/' + id)
  return response.data
}

export const getMySponsors = async () => {
  const response = await getApi().get('/sponsor/')
  return response.data
}

export const countMySponsors = async () => {
  const response = await getApi().get('/sponsor/me/count')
  return response.data
}

export const countSponsors = (id: string) => async () => {
  const response = await getApi().get('/sponsor/count/' + id)
  return response.data
}
