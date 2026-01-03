import { FlagCheckProvider } from './context/FlagCheckContext'
import Landing from './pages/Landing'

function App() {
  return (
    <FlagCheckProvider>
      <Landing />
    </FlagCheckProvider>
  )
}

export default App
