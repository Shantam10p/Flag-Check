import { FlagCheckProvider, useFlagCheck } from './context/FlagCheckContext'
import Landing from './pages/Landing'
import TypeSelector from './pages/TypeSelector'
import InputScreen from './pages/InputScreen'

function AppContent() {
  const { currentScreen } = useFlagCheck();

  return (
    <>
      {currentScreen === 'landing' && <Landing />}
      {currentScreen === 'type-selection' && <TypeSelector />}
      {currentScreen === 'input' && <InputScreen />}
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
