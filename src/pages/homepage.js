import * as Layout from '../layout/';
import OrderForm from '../containers/order-form';
import { submitOrderInfo } from '../requests';

const Homepage = () => {
  return (
    <div>
      <Layout.Navbar/>

      <div className='container'>
        <h1 className='mt-4'>Place an order for pickup</h1>
        <OrderForm 
          
          onSubmit={orderInfo => {
            submitOrderInfo(
              orderInfo.finishedOrders, 
              orderInfo.phoneNumber, 
              response => console.log(response), 
              error => console.log(error)
            )
          }}/>
      </div>
    </div>
  )
}

export default Homepage;
