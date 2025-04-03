// **Code Breakdown:**

// 1.  **State Management:**
//     * `useState`: Manages `typeOfColor` (hex/rgb) and `color` (current color).
// 2.  **Color Generation Functions:**
//     * `handleCreateRandomHexColor`: Generates a random hex color string.
//     * `handleCreateRandomRgbColor`: Generates a random RGB color string.
// 3.  **Rendering:**
//     * Renders a `div` with the background set to the `color` state.
//     * Displays the current color type and value.
//     * Renders three buttons:
//         * Two buttons to set the `typeOfColor` state.
//         * One button to generate a random color, calling the appropriate function based on the `typeOfColor` state.
// 4.  **Event Handlers:**
//     * `onClick` handlers on the buttons update the state or call the color generation functions.


import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [typeOfColor, setTypeOfColor] = useState('hex')
  const [color, setColor] = useState('#000000')

  function handleCreateRandomHexColor() {
    let hex = '#';
    const hexArr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];

    for (let i = 0; i < 6; i++) {
      hex += hexArr[Math.floor(Math.random() * hexArr.length)];
    }
    console.log(hex);
    setColor(hex);
  }

  function handleCreateRandomRgbColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const rgb = `rgb(${r}, ${g}, ${b})`;
    console.log(rgb);
    setColor(rgb);
  }

  useEffect(() => {
    if (typeOfColor === 'hex') {
      handleCreateRandomHexColor();
    } else {
      handleCreateRandomRgbColor();
    }
  }
  , [typeOfColor]);

  return (
    <div className='container' style={{ backgroundColor: color}}>
      <p>
        Random {typeOfColor} color
      </p>
      <p style={{ marginBottom: '100px' }}>
        {color}
      </p>

      <div className='buttonContainer'>
        <button onClick={() => setTypeOfColor('hex')}>Select Random HEX</button>
        <button onClick={() => setTypeOfColor('rgb')}>Select Random RGB</button>
        <button onClick={() => {typeOfColor === 'hex' ? handleCreateRandomHexColor() : handleCreateRandomRgbColor()}}>
          Generate Random Color
        </button>
      </div>
    </div>
  )
}

export default App
