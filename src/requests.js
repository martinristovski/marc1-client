import axios from 'axios';

const url = 'https://4xexwmktvc.execute-api.us-east-2.amazonaws.com/';
const formId = '4ncksMxtYUgyh_L80zmhHb_9s0WPN-izfzVxTO3gfIA'

const apiKey = 'yII26qwLhGpy7D-9pWDDk7B5S8r1hLsfdvfNZc9rTxA'
const uuid = 'cd391c6b-d52c-4ea2-b0ba-fe288c1e5ec2'

export const getOrders = (onSuccess) => {
  axios.get(`${url}/developer/${uuid}/${formId}/response`, {
    headers: {
      'API-KEY': apiKey,
    }
  })
  .then(response => {
    onSuccess(response)
  })
  .catch(error => {
    console.log(error);
  })
}

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
