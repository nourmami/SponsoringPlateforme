import io, { Socket } from 'socket.io-client'

import { createContext, useContext, useEffect, useState } from 'react'

export const SocketContext = createContext<Socket | null>(null)

export const useSocket = () => {
  return useContext(SocketContext)
}

export const SocketProvider = ({ children }: { children: React.ReactNode }) => {
  const [socket, set] = useState<Socket | null>(null)

  useEffect(() => {
    const socket = io('http://localhost:4000', {
      transports: ['websocket'],
    })

    socket.on('connect', () => {
      console.log('connected')
    })
    socket.on('disconnect', () => {
      console.log('disconnected')
    })
    return () => {
      socket.disconnect()
    }
  }, [])

  return (
    <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
  )
}
