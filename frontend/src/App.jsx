import { FlagCheckProvider, useFlagCheck } from './context/FlagCheckContext'
import Landing from './pages/Landing'
import TypeSelector from './pages/TypeSelector'

function AppContent() {
  const { currentScreen } = useFlagCheck();

  return (
    <>
      {currentScreen === 'landing' && <Landing />}
      {currentScreen === 'type-selection' && <TypeSelector />}
    </>
  );
}

function App() {
  return (
    <FlagCheckProvider>
      <AppContent />
    </FlagCheckProvider>
  )
}

export default App
