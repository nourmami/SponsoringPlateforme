import { Toaster } from 'react-hot-toast'
import { BrowserRouter as Router } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import { UserProvider } from './api/users/context'
import { SocketProvider } from './api/websocket'

const queryClient = new QueryClient()

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Router>
      <SocketProvider>
        <QueryClientProvider client={queryClient}>
          <UserProvider>
            <Toaster />
            {children}
          </UserProvider>
        </QueryClientProvider>
      </SocketProvider>
    </Router>
  )
}
