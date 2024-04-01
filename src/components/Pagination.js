import React from 'react';
import '../components/Pagination.css';

function Pagination({ totalItems, itemsPerPage, onPageChange }) {
  const pageCount = Math.ceil(totalItems / itemsPerPage);

  const handlePageClick = (pageNumber) => {
    onPageChange(pageNumber);
  };

  return (
    <div className="pagination">
      {/* ... logic to generate page numbers and navigation buttons */}
      {Array.from({ length: pageCount }, (_, i) => (
        <button key={i + 1} onClick={() => handlePageClick(i + 1)}>
          {i + 1}
        </button>
      ))}
    </div>
  );
}

export default Pagination;
