import { useState } from 'react';
import SubApp from './components/SubApp';

function App() {
  const [nbScreen, setNbScreen] = useState(1)

  const screens = []

  for (let i = 0; i < nbScreen; i++) {
    screens.push(i);
  }

  const handleNbScreenChange = (e) => {
    setNbScreen(e.target.value);
  }

  return (
    <>

      <div className={`screens-container-${screens.length}`}>
        {screens.map((el, index, arr) => {
          return <SubApp key={index} id={index} reverse={arr.length > 1 && index < arr.length / 2} />
        })}
      </div>
      <select name="nbScreens" id="nbScreen-select" className='nbScreen-select' onChange={handleNbScreenChange}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="4">4</option>
      </select>
    </>
  )
}

export default App;