import Header from './components/Header'
import Left from './components/Left'
import Right from './components/Right'
import { useState } from 'react';
function App() {

  const [weatherDetails, setWeatherDetails] = useState({})

  const fetchData = (searchVal) => {
    fetch(`http://api.weatherapi.com/v1/current.json?key=e9efbd0df6294e5c9fb94321233012&q=${searchVal}`)
        .then(response => response.json())
        .then(data => {

            setWeatherDetails({...data})
            
        })
        .catch(error => console.log("error", error));
};
console.log(weatherDetails)

  return (
    <>
      <Header fetchData={fetchData}/>

      <div className="content">
      <div className='left'>
        <Left details={weatherDetails}></Left>
      </div>
      <div className='right'> 
        <Right></Right>
      </div>
      </div>
    </>
  )
}

export default App
