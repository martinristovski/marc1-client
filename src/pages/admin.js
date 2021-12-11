import { useState, useEffect } from 'react';
import { getOrders } from '../requests';
import Order from '../components/order';
import { Link } from "react-router-dom";
import * as Layout from '../layout/';

const Admin = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    getOrders(response => {
      setOrders(response.data);
      console.log(orders);
    })
  }, [])

  return (
    <div>
      <Layout.Navbar>
        <li className="nav-item">
          <Link className='nav-link active' to="/">Homepage</Link>
        </li>
      </Layout.Navbar>
      <div className='container'>
        <h2>Incoming Orders</h2>

        {orders.map(order => {
          return <Order phoneNumber={order['Phone Number']} food={order['Food Items']} drink={order['Drink Items']} notes={order['Note Items']}/>
        })}

      </div>
    </div>
  )
}

export default Admin;
