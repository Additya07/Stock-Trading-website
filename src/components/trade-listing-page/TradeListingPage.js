import React, { useState } from 'react';
import Pagination from '../Pagination.js';
import '../trade-listing-page/TradeListingPage.css'; 

function TradeListingPage({ orders }) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; // Number of items per page

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentOrders = orders.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // If there are no orders, display null
  if (!orders || orders.length === 0) {
    return null;
  }

  return (
    <div className="trade-listing-page">
      <h2 className="page-heading">Available data</h2>
      <table className="orders-table">
        <thead>
          <tr>
            <th className="order-id-header">Order ID</th>
            <th className="quantity-header">Quantity</th>
            <th className="price-header">Per Unit Price</th>
            <th className="type-header">Type</th>
            <th className="stock-header">Stock</th>
          </tr>
        </thead>
        <tbody>
          {currentOrders.map((order, index) => (
            <tr key={index} className="order-row">
              <td className="order-id">{index + 1}</td> {/* Assuming order ID starts from 1 */}
              <td className="quantity">{order.quantity}</td>
              <td className="price">{order.pricePerUnit}</td> {/* Displaying Price Per Unit */}
              <td className="type">{order.type}</td> {/* Displaying Type */}
              <td className="stock">{order.stock}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination
        totalItems={orders.length}
        itemsPerPage={itemsPerPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
}

export default TradeListingPage;
