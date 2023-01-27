import { getApi } from '../axios'

export const getConversations = async () => {
  const response = await getApi().get('/chat/conversations')
  return response.data
}

export const getConversationById = (id: string) => async () => {
  const response = await getApi().get('/chat/conversations/' + id)
  return response.data
}

export const sendMessage =
  (id: string) =>
  async ({ message }: { message: string }) => {
    const response = await getApi().post('/chat/messages/' + id, {
      message,
    })
    return response.data
  }

export const generateStripeLink = (id: string) => async () => {
  const response = await getApi().post('/chat/generate/stripe/' + id)
  return response.data
}
