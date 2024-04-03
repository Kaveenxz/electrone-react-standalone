import React from 'react'

function Header() {
  return (
<>
  <header className="flex justify-between items-center p-8 text-white">
    <h1 className="text-3xl font-bold">Weather.io</h1>
    <div className="flex items-center space-x-20">
      <input type="text" placeholder='Search here...' className="p-3 pr-20 pl-20 rounded-3xl border border-gray-300 rounded-md text-black font-bold backgr" />
    </div>
    <button className="p-3 pl-8 pr-8 bg-blue-700 rounded-3xl font-bold text-white rounded-md">Current Location</button>

  </header>
</>


  )
}

export default Header