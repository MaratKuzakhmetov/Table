import React from 'react'

function Table({handleSort, filteredData}) {
  return (
    <table>
        <thead>
          <tr>
            <th>Дата</th>
            <th onClick={() => handleSort('name')} className='column'>Наименование</th>
            <th onClick={() => handleSort('number')} className='column'>Количество</th>
            <th onClick={() => handleSort('destination')} className='column'>Расстояние, км</th>
          </tr>
        </thead>
        <tbody>
          {filteredData && filteredData.map((item) => {
            return (
            <tr key={item.id}>
              <td>{item.date.split('T')[0].split('-').reverse().join('.')}</td>
              <td>{item.name}</td>
              <td>{item.number}</td>
              <td>{item.destination}</td>
            </tr>
            )
          })}
        </tbody>
      </table>
  )
}

export default Table
