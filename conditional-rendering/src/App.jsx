import UserGreeting from "./UserGreeting.jsx";
import GuessNum from "./GuessNum.jsx";

function App() {
  return (
      <>
          <UserGreeting isLoggedIn = {true} username = "Tejas Sonawane"/>
          <GuessNum num = {9}></GuessNum>
      </>
  );
}

export default App;