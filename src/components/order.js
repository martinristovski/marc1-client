const Order = (props) => {

  const foodItems = props.food.split("|")
  const drinkItems = props.drink.split("|")
  const noteItems = props.notes.split("|")

  console.log(foodItems);

  return (
    <div className='card mt-4'>
      <div className='card-body'>
        Phone Number: {props.phoneNumber}
        <ul className='list-group mt-3'>
          {foodItems.map((foodItem, i) => {
            return (
              <li className='list-group-item'>
                food: {foodItem} | drink: {drinkItems[i]} | notes: {noteItems[i]}
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default Order;
