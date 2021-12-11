import { useState } from 'react';
import Pager from '../components/pager';
import PagerEntry from '../components/pager-entry';

const FirstPage = (props) => {
  const { finishedOrders, setOrder, order } = props;

  return (
    <div>
      <div className='mt-1 mb-1'>
        {finishedOrders.length > 0 ? <h3>Your order so far:</h3> : null} 
        <div className='list-group'>
          {finishedOrders.map(finishedOrder => (
            <div className='list-group-item'>
              {finishedOrder.food} | {finishedOrder.drink} | {finishedOrder.notes}
            </div>
          ))}
        </div>
      </div>

      <label>Food Item</label>
      <select className="form-control" value={order.food} onChange={(event) => setOrder({...order, food: event.target.value})}>
        <option disabled={order.food !== ''} value=''>-- select an option --</option>
        <option value='Option 1'>Option 1</option>
        <option value='Option 2'>Option 2</option>
        <option value='Option 3'>Option 3</option>
      </select>

      <label className='mt-3'>Drink Item</label>
      <select className="form-control" value={order.drink} onChange={(event) => setOrder({...order, drink: event.target.value})}>
        <option disabled={order.drink !== ''} value=''>-- select an option --</option>
        <option value='Option 1'>Option 1</option>
        <option value='Option 2'>Option 2</option>
        <option value='Option 3'>Option 3</option>
      </select>

      <label className='mt-3'>Special notes</label>
      <textarea value={order.notes} onChange={(event) => setOrder({...order, notes: event.target.value})} className='form-control'></textarea>
    </div>
  )
}

const SecondPage = (props) => {
  const { phoneNumber, setPhoneNumber } = props;
  return (
    <div>
      <label>Phone Number</label>
      <input value={phoneNumber} onChange={(event) => setPhoneNumber(event.target.value)} className='form-control' />
    </div>
  )
}

const ThirdPage = () => {
  return (
    <div>
      <h2>Your order has been submitted, we'll call you when it's ready.</h2>
    </div>
  )
}

const OrderForm = (props) => {
  const [finishedOrders, setFinishedOrders] = useState([]);
  const [page, setPage] = useState(1);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [order, setOrder] = useState({
    food: "",
    drink: "",
    notes: ""
  });

  return (
    <div>
      <Pager currentPage={page}>
        <PagerEntry page={1}>
          <FirstPage finishedOrders={finishedOrders} order={order} setOrder={setOrder}/>
          <button className='mt-3 me-1 btn btn-primary' onClick={() => {
            setFinishedOrders([...finishedOrders, order])
            setOrder({food: "", drink: "", notes: ""})
          }}>Add</button>

          <button onClick={() => setPage(page + 1)} className='mt-3 btn btn-secondary'>Done</button>
        </PagerEntry>

        <PagerEntry page={2}>
          <SecondPage phoneNumber={phoneNumber} setPhoneNumber={setPhoneNumber}/>
          <button onClick={() => {
            setPage(page + 1)
            props.onSubmit({finishedOrders, phoneNumber})
          }} className='mt-3 btn btn-secondary'>Done</button>
        </PagerEntry>

        <PagerEntry page={3}>
          <ThirdPage/>
        </PagerEntry>
      </Pager>
    </div>
  );
}

export default OrderForm;
