import Header from './components/Header'

function App() {
  const ipcHandle = () => window.electron.ipcRenderer.send('ping')

  return (
    <>
      <Header/>

      <div className="content">
      <div className='left'>
        <div className="lft-1 bg-white">
          <p>Now</p>
          <h1>5<sup>o</sup>C</h1>
          <p>Cloudy</p>
          <hr />
          <p>Wednsday-04-2024</p>
          <p>Location Mill</p>
        </div>
        <h3>Last 5 days</h3>
        <div className="lft-2 bg-white">
          <li>Lorem ipsum dolor</li>
          <li>Lorem ipsum dolor</li>
          <li>Lorem ipsum dolor</li>
          <li>Lorem ipsum dolor</li>
          <li>Lorem ipsum dolor</li>
        </div>
      </div>
      <div className='right'>
        <div className="rit-1">
          Today Heighlights 

          <div className="itemOne">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, laudantium.
          </div>

          <div className="itemTwo">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero, nobis.
          </div>

          <div className="itemFour">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam, sapiente.
          </div>
          <div className="itemThree">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam, delectus.
          </div>
        </div><br /><br />


        <div className="rit-2">
          <div className="it1">Lorem, ipsum.</div>
          <div className="it2">Lorem, ipsum.</div>
          <div className="it3">Lorem, ipsum.</div>
          <div className="it4">Lorem, ipsum.</div>
          <div className="it5">Lorem, ipsum.</div>
        </div>
      </div>
      </div>
    </>
  )
}

export default App

