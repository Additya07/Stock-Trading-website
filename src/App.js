import React, { useState } from 'react';
import TradeEntryForm from './components/trade-entry-form/TradeEntryForm.js';
import TradeListingPage from './components/trade-listing-page/TradeListingPage.js';
import OrderCreationPage from './components/order-creation/OrderCreationPage.js';
  
function App() {
  // Define state variables
  const [orders, setOrders] = useState([]);

  // Function to handle trade submission
  const onTradeSubmit = (formData) => {
    // Update the orders state with the new trade data
    setOrders([...orders, formData]);
  };

  // Function to handle order creation
  const onCreateOrder = (newOrder) => {
    setOrders([...orders, newOrder]);
  };

  return (
    <div className="App">
      {/* Trade Entry Form component */}
      <TradeEntryForm onTradeSubmit={onTradeSubmit} />

      {/* Order Creation Page component (potentially passing orders as prop) */}
      <OrderCreationPage onCreateOrder={onCreateOrder} orders={orders} />

      <TradeListingPage orders={orders} />


    </div>
  );
}

export default App;
