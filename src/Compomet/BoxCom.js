import React, { useState } from 'react';
import { data } from '../Json';
import Boximg2 from '../Compomet/Boximg2';
import BillingDetails from '../Billing/BillingDetails';



const date = () => {
  var data = new Date();
  var get = data.getDate() + '-' + data.getMonth() + '-' + data.getFullYear()
  return get
}

const BoxCom = () => {
  const [bill, setbill] = useState(data);
  const filter = (IID) => {
    const updateItem = data.filter((val) => {
      console.log(val.IID);
      return val.IID === IID
    })
    setbill(updateItem)

  }

  return (
    <>
      <div className='container'>
        <div className='row'>
          <div className='col-md-6 px-4 text-start'>Billing Overview</div>
          <div className='col-md-6 px-4 text-end'><span className='text-end'><span>Date: </span><span>{date()}</span><span></span></span></div>
        </div>
        <div className='row'>
          <div className='col-lg-4'>
            <Boximg2 filter={filter} />
          </div>
          <div className='col-lg-8'>
            <BillingDetails bill={bill} />
          </div>
        </div>
      </div>
    </>
  );
};



export default BoxCom;


