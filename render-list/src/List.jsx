
function List() {
    const fruits = [{id: 1, name: "apple", calorie: 95}, 
                    {id: 2, name: "banana", calorie: 105}, 
                    {id: 3, name: "grape", calorie: 65}, 
                    {id: 4, name: "orange", calorie: 45}, 
                    {id: 5, name: "pineapple", calorie: 37}];

    const listItem = fruits.map(fruit => <li key={fruit.id}>{fruit.name} - {fruit.calorie}</li>)

    return (
        <ol>{listItem}</ol>
    )
}

export default List;