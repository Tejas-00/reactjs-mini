import propType from 'prop-types';

export default function Student(props) {
    return (
        <div className="student">
            <p>name: {props.name}</p>
            <p>age: {props.age}</p>
            <p>student: {props.isStudent ? 'Yes' : 'No'}</p>
        </div>
    )
}
Student.propTypes = {
    name: propType.string,
    age: propType.number,
    isStudent: propType.bool
}
Student.defaultProps = {
    name: 'Guest',
    age: 0,
    isStudent: false
}