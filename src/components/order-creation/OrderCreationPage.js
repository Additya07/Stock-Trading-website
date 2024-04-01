import React, { useState } from 'react';
import '../order-creation/OrderCreationPage.css';

function OrderCreationPage({ onCreateOrder }) {
  const [orderData, setOrderData] = useState({
    quantity: '',
    perUnitPrice: '',
    type: '',
    stock: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setOrderData({
      ...orderData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreateOrder(orderData);
    setOrderData({
      quantity: '',
      perUnitPrice: '',
      type: '',
      stock: ''
    });
  };

  return (
    <div className="order-creation-page">
      <h2>Create Order</h2>
      <form onSubmit={handleSubmit} className="order-creation-form">
        <div className="form-row-all">
          <div className="form-group-all">
            <label>Quantity:</label>
            <input 
              type="number" 
              name="quantity" 
              value={orderData.quantity} 
              onChange={handleChange} 
              required 
              className="form-input"
            />
          </div>
          <div className="form-group-all">
            <label>Per Unit Price:</label>
            <input 
              type="number" 
              name="perUnitPrice" 
              value={orderData.perUnitPrice} 
              onChange={handleChange} 
              required 
              className="form-input"
            />
          </div>
        </div>
        <div className="form-row-all">
          <div className="form-group-all">
            <label>Type:</label>
            <select 
              name="type" 
              value={orderData.type} 
              onChange={handleChange} 
              required 
              className="form-input"
            >
              <option value="">Select Type</option>
              <option value="buy">Buy</option>
              <option value="sell">Sell</option>
            </select>
          </div>
          <div className="form-group-all">
            <label>Stock:</label>
            <input 
              type="text" 
              name="stock" 
              value={orderData.stock} 
              onChange={handleChange} 
              required 
              className="form-input"
            />
          </div>
        </div>
        <button type="submit" className="form-button">Create</button>
      </form>
    </div>
  );
}

export default OrderCreationPage;
