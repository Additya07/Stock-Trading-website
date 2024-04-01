import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';
import '../order-list/Pagination.css'; 

function Items({ currentItems }) {
  return (
    <>
      {currentItems &&
        currentItems.map((item) => (
          <div key={item}>
            <h3>Item #{item}</h3>
          </div>
        ))}
    </>
  );
}

function PaginatedItems({ itemsPerPage, orders }) {
  const [itemOffset, setItemOffset] = React.useState(0);
  const [pageCount, setPageCount] = React.useState(0); // Added state for page count

  React.useEffect(() => {
    // Calculate page count on initial render and data changes
    const count = Math.ceil(orders.length / itemsPerPage);
    setPageCount(count);
  }, [orders, itemsPerPage]);

  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = orders.slice(itemOffset, endOffset);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % orders.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
      <Items currentItems={currentItems} />
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        containerClassName="pagination-container" // Added class for styling
        activeLinkClassName="active-page" // Added class for active page styling
      />
    </>
  );
}

function App() {
  const [orders, setOrders] = useState([]); // Initialize orders as an empty array

  const handleCreateOrder = (orderData) => {
    setOrders([...orders, orderData]); // Update orders with the new order
  };

  return (
    <div>
      <OrderCreationPage onCreateOrder={handleCreateOrder} />
      <PaginatedItems itemsPerPage={4} orders={orders} />
    </div>
  );
}

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
    <div className="title" style={{ padding: '0 1rem' }}>
      <h2><strong>Create</strong> Order</h2>
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

ReactDOM.render(<App />, document.getElementById('root'));

export default PaginatedItems;
