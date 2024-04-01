import React, { useState } from 'react';
import '../trade-entry-form/TradeEntryForm.css'; // Import your CSS file

function TradeEntryForm({ onTradeSubmit }) {
  let [formData, setFormData] = useState({
    tradeDateTime: '',
    stockName: '',
    listingPrice: '',
    quantity: '',
    type: 'buy',
    pricePerUnit: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onTradeSubmit(formData);
    console.log(formData);
  };

  // Calculate the price per unit
  const calculatePricePerUnit = () => {
    
    if (!!formData.listingPrice && !!formData.quantity) {
      console.log(formData.listingPrice, formData.quantity);
      const pricePerUnit = formData.listingPrice / formData.quantity;
      formData.pricePerUnit  = pricePerUnit.toFixed(2);
      console.log(formData);
      return pricePerUnit.toFixed(2); // Limiting to two decimal places
    }
    return '';
  };

  return (
    <div className="trade-entry-form">
      <h2><strong>Trade</strong> Entry</h2>
      <form onSubmit={handleSubmit} className="form-container">
        <div className="form-row">
          <div className="form-group">
            <label>Trade Date and Time:</label>
            <input
              className="form-input"
              type="datetime-local"
              value={formData.tradeDateTime}
              onChange={(e) => setFormData({ ...formData, tradeDateTime: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label>StockName (Symbol):</label>
            <input
              className="form-input"
              type="text"
              value={formData.stockName}
              onChange={(e) =>{
              setFormData({ ...formData, stockName: e.target.value })
              console.log( e.target.value);
            }}
              
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>Listing Price:</label>
            <input
              className="form-input"
              type="number"
              value={formData.listingPrice}
              onChange={(e) =>{
                 setFormData({ ...formData, listingPrice: e.target.value })
                //  console.log(formData.listingPrice=e.target.value);
                
                }}
            />
          </div>
          <div className="form-group">
            <label>Quantity:</label>
            <input
              className="form-input"
              type="number"
              value={formData.quantity}
              onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>Type:</label>
            <select
              className="form-input"
              type="text"
              value={formData.type}
              onChange={(e) =>{
                setFormData({ ...formData, type: e.target.value });
                console.log( e.target.value);
            }}
            >
              <option value="buy">Buy</option>
              <option value="sell">Sell</option>
            </select>
          </div>
          <div className="form-group">
            <label>Price Per Unit:</label>
            <input
              className="form-input"
              type="number"
              value={calculatePricePerUnit()} // Display calculated price per unit
              readOnly // Prevents user from editing this field
            />
          </div>
        </div>
        <div className="form-row">
          <button className="form-button" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default TradeEntryForm;
