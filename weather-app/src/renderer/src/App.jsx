import Header from './components/Header'
import Left from './components/Left'
import Right from './components/Right'
import { useState } from 'react';
function App() {

  const [temp, setTemp] = useState('');

  const fetchData = (searchVal) => {
    fetch(`http://api.weatherapi.com/v1/current.json?key=e9efbd0df6294e5c9fb94321233012&q=${searchVal}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log(data);
        // Process the fetched data
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  };
  


  return (
    <>
      <Header fetchData={fetchData}/>

      <div className="content">
      <div className='left'>
        <Left></Left>
      </div>
      <div className='right'> 
        {temp} temp
      </div>
      </div>
    </>
  )
}

export default App
