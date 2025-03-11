import PropTypes from 'prop-types';

function UserGreeting(props) {
    if (props.isLoggedIn) {
        return <h1 className="greeting-mssg">Welcome back, {props.username}!</h1>;
    } else {
        return <h1 className='login-prompt'>{props.username}, Please login to continue</h1>;
    }
}

UserGreeting.propTypes = {
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string,
};

UserGreeting.defaultProps = {
    isLoggedIn: false,
    username: 'Guest',
};

export default UserGreeting;
