import React from 'react';

const Pagination = ({ curPage, goNext, goPrev, totalItems, itemsPerPage }) => {
  const isPrevPageAvailable = curPage === 1;
  const isNextPageAvailable = curPage === Math.ceil(totalItems / itemsPerPage);

  return (
    <div className="pagination">
      <button className="btn" onClick={goPrev} disabled={isPrevPageAvailable ? 'disabled' : null}>
        {isPrevPageAvailable ? '' : '←'}
      </button>
      <span className="pagination__page">{curPage}</span>
      <button className="btn" onClick={goNext} disabled={isNextPageAvailable ? 'disabled' : null}>
        {isNextPageAvailable ? '' : '→'}
      </button>
    </div>
  );
};

export default Pagination;
