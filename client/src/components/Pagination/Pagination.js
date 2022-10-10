import React from 'react'

function Pagination({totalPages, page, setPage}) {

  // делаем массив с номерами страниц для пагинации
  const pageQty = [];
  for (let i = 0; i < totalPages; i++) {
    pageQty.push(i + 1);
  }
  
  // с помощью map выводим блоки с номерами страниц
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
