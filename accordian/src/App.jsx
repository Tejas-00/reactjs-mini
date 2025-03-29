import { useState } from 'react'
import './App.css'
import data from './data'

function App() {
  const [selected, setSelected] = useState(null);

  function handleSingleSelection(currentId) {
    setSelected(currentId);
  }

  return (
    <>
      <div className="accordian">
        {
          data && data.length > 0 
          ? data.map(dataItem => 
          <div className='item'>
            <div className='title' onClick={() => handleSingleSelection(dataItem.id)}>
              <h3>{dataItem.question}</h3>
              <span>+</span>
            </div>
            { 
              dataItem.id === selected 
              ? <div className='content'>{dataItem.answer}</div>
              : null
            }
          </div>)
          : <div>No data found</div>
        }
      </div>
    </>
  )
}

export default App
