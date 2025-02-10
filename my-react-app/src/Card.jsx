import profilePic from './assets/reactCardCompProfPic.jpg';

export function Card() {
    return (
        <div className="card">
            <img src= { profilePic } alt="Profile Picture" />
            <h2>Tejas Chandrabhan Sonawane</h2>
            <p>A frontend developer from India, passionate about Web3 and decentralization</p>
        </div>
    )
}