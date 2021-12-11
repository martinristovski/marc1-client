import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getOrders } from '../requests';
import Order from '../components/order';
import { Link } from "react-router-dom";
import * as Layout from '../layout/';
import { authenticate } from '../ducks/auth';

const OrderInfo = (props) => {
  const { orders } = props;

  return (
    <div>
      <div className='container'>
        <h2>Incoming Orders</h2>

        {orders.map(order => {
          return <Order phoneNumber={order['Phone Number']} food={order['Food Items']} drink={order['Drink Items']} notes={order['Note Items']}/>
        })}

      </div>
    </div>
  )
}

const LoginForm = (props) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div className='container'>
      <h2>Login</h2>
      <input placeholder='Username' className='form-control' value={username} onChange={event => setUsername(event.target.value)}/>
      <input placeholder='Password' className='form-control mt-3' value={password} onChange={event => setPassword(event.target.value)}/>
      <button className='btn btn-primary mt-3' onClick={() => props.onSubmit({username, password})}>Login</button>
    </div>
  )
}

const Admin = () => {
  const [orders, setOrders] = useState([]);
  const authenticated = useSelector(state => state.auth.authenticated);
  const dispatch = useDispatch();

  useEffect(() => {
    getOrders(response => {
      const responseOrders = response.data;
      responseOrders.reverse();
      setOrders(responseOrders);
    })
  }, [])

  return (
    <div>
      <Layout.Navbar>
        <li className="nav-item">
          <Link className='nav-link active' to="/">Homepage</Link>
        </li>
      </Layout.Navbar>

      {authenticated ? <OrderInfo orders={orders}/> : <LoginForm onSubmit={data => {
        if (data.username === 'admin' && data.password === 'password') {
          dispatch(authenticate())
        }
      }}/>}

    </div>
  )
}

export default Admin;
