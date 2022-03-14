import React, { useContext } from 'react';
import { PayPalButton } from 'react-paypal-button-v2';
import { useNavigate } from 'react-router-dom';
import AppContext from '../context/AppContext';
import '../styles/components/Payment.css';

export const Payment = () => {

  const { state, addNewOrder } = useContext(AppContext)
  const { cart, buyer } = state
  const navigate = useNavigate()

  const paypalOptions = {
    clientId: 'ATjuOkj9BqkHo0gk8wFLMUWoFkiuxWHkTS2uY1kx9hRYi8_ffpSXMsJ2Vsfg5e8Sx_x50MAe72JMcJUY',
    intent: 'capture',
    currency: 'USD'
  }

  const buttonStyles = {
    layout:'vertical',
    shape: 'react'
  }

  const handlePaymentSuccess = (data) =>{
    
    if(data.status === 'COMPLETED'){
      const newOrder = {
        buyer,
        product: cart,
        payment: data
      }
      addNewOrder(newOrder);
      navigate('/checkout/success')
    }
  }

  const handleSumTotal = () => {
    const reducer = (accumulator, currentValue) => accumulator + currentValue.price
    const sum = cart.reduce(reducer, 0)
    return sum
  }

  return (
    <div className="Payment">
      <div className="Payment-content">
        <h3>Resumen del pedido:</h3>
        {
          cart.map((item) => (
            <div className="Payment-item" key={item.title}>
              <div className="Payment-element">
                <h4>{item.title}</h4>
                <span>{`$ ${item.price}`}</span>
              </div>
            </div>
          ))
        }
        <div className="Payment-button">
          <PayPalButton
            paypalOptions={paypalOptions}
            buttonStyles={ buttonStyles }
            amount={handleSumTotal()}
            onPaymentStart={() => console.log('Start Payment')}
            onSuccess={data => handlePaymentSuccess(data)}
            onError={error=>console.log(error)}
            onCancel={data => console.log(data)}
          />
        </div>
      </div>
      <div />
    </div>
  );
};
