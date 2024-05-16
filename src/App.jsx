import React, { useState } from 'react'
import Sidebar from './components/sidebar';
import Main from './components/main';

const App = () => {
  const [allConvo, setAllConvo] = useState([]);

  return (
    <div className='bg-neutral-950 h-screen text-white flex'>
      <Sidebar />
      <Main setAllConvo={setAllConvos} />
    </div>
  )
}

export default App;

// Primary Black - #040404
// Light Gray - #1b1f28
// Dark Gray - #192028
// Hover Gray - #272e38
// Light Sky - #12a7ee