import Routes from '~/core/routes'
import Navbar from '~/core/Navbar'
import Footer from '~/core/Footer'
import { useGetMe } from './core/api/users/context'

function App() {
  const { loading } = useGetMe()

  if (loading) return <div className="text-center py-20">Loading...</div>

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-col flex-1">
        <Routes />
      </div>
      <Footer />
    </div>
  )
}

export default App
