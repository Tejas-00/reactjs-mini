function GuessNum(props) {
    const guessNum = 9;

    if (props.num === guessNum) {
        return <h1 className="greeting-mssg">Well Done, found it!</h1>;
    } else {
        return <h1 className="login-prompt">better luck next time</h1>;
    }
}

export default GuessNum; 