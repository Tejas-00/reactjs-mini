// code breakdown:

// useState(null) initializes a state variable selected that stores the currently selected question.
// setSelected is the function used to update selected.

// handleSingleSelection This function takes an id as input and updates the selected state.
// Clicking on a question sets selected to that question’s id.

// Checks if data exists and has items.
// If data exists, it maps through each item.
// If data is empty, it shows "No data found".
// Renders an accordion list:
// Each item has a title (question) and a content (answer).
// Clicking on a title calls handleSingleSelection(dataItem.id), updating selected.
// If dataItem.id === selected, the answer is displayed.

import { useState } from 'react'
import './App.css'
import data from './data'
import './index.css'

function App() {
  const [selected, setSelected] = useState(null);

  function handleSingleSelection(currentId) {
    setSelected(currentId === selected ? null : currentId);
  }

  return (
    <>
      <div className="accordian">
        {
          data && data.length > 0 
          ? data.map(dataItem => 
          <div className='item'>
            <div className='title' onClick={() => handleSingleSelection(dataItem.id)}>
              <h3>{dataItem.question} 🔽</h3>
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
