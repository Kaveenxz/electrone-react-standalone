import Versions from './components/Versions'
import electronLogo from './assets/electron.svg'
import Header from './components/Header'

function App() {
  const ipcHandle = () => window.electron.ipcRenderer.send('ping')

  return (
    <>
      <Header/>
    </>
  )
}

export default App

