import React from 'react'

function Pagination({totalPages, page, setPage}) {


  const pageQty = [];
  for (let i = 0; i < totalPages; i++) {
    pageQty.push(i + 1);
  }

  return (
    <div className='pagination'>
    {pageQty.length && pageQty.map((item) => {
      return (
        <div className={item === page ? 'page select' : 'page'} key={item} onClick={(e) => setPage(item)}>
          {item}
        </div>
      )
    })}
  </div>
  )
}

export default Pagination
