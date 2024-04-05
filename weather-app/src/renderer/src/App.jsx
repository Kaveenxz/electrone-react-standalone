import Header from './components/Header'
import Left from './components/Left'
import Right from './components/Right'

function App() {
  const ipcHandle = () => window.electron.ipcRenderer.send('ping')

  return (
    <>
      <Header/>

      <div className="content">
      <div className='left'>
        <Left></Left>
      </div>
      <div className='right'>
        <Right></Right>
      </div>
      </div>
    </>
  )
}

export default App

