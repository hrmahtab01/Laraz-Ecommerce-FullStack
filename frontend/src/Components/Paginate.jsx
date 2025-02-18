import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import ReactPaginate from "react-paginate";
import Product from "./Product";

// Example items, to simulate fetching from another resources.

function Paginate({ itemsPerPage ,allproduct}) {
  const items = allproduct;
  function Items({ currentItems }) {
    return (
      <>
        {currentItems &&
          currentItems.map((item) => (
            <>
              <div>
                <Product products={item} />
              </div>
            </>
          ))}
      </>
    );
  }

  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
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
        nextLabel="next "
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel=" prev"
        renderOnZeroPageCount={null}
        containerClassName="flex gap-3 items-center mt-3"
        nextClassName="bg-teal-500 px-2 py-1 rounded-md text-white"
        previousClassName="bg-teal-500 px-2 py-1 rounded-md text-white"
        activeClassName="bg-red-500 rounded-full px-2 text-white"
      />
    </>
  );
}

export default Paginate;
