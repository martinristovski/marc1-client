import axios from 'axios';

const url = 'http://formhoster-env-1.eba-v8gea4pu.us-east-2.elasticbeanstalk.com';
const formId = '4ncksMxtYUgyh_L80zmhHb_9s0WPN-izfzVxTO3gfIA'

export const submitOrderInfo = (orders, phoneNumber, onSuccess, onError) => {
  const foodItems = [];
  const drinkItems = [];
  const noteItems = [];

  orders.map(order => {
    foodItems.push(order.food)
    drinkItems.push(order.drink);
    noteItems.push(order.notes);
  });

  axios.post(`${url}/user/submit_form`, {
    form_id: formId,
    submission_data: [
      {
        field_name: "Food Items",
        field_value: foodItems.join(" | ")
      },
      {
        field_name: "Drink Items",
        field_value: drinkItems.join(" | ")
      },
      {
        field_name: "Note Items",
        field_value: noteItems.join(" | ")
      },
      {
        field_name: "Phone Number",
        field_value: phoneNumber
      }
    ]
  }, 
  {
    headers: {
      'Content-Type': 'application/json',
      'Referrer': 'http://www.xyz.com'
    }
  })
  .then(response => onSuccess(response))
  .catch(error => onError(error))
     
}
