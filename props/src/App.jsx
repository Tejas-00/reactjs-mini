import Student from "./Student"

function App() {
  return (
    <>
      <Student name='Tejas' age={20} isStudent={true}/>
      <Student name='Rohit' age={21} isStudent={false}/>
      <Student name='Jai'/>
    </>
  )
}

export default App
