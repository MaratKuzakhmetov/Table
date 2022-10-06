import React, { useState } from 'react'

function Search({filteredData, data, setFilteredData}) {

  const [firstAttribute, setFirstAttribute] = useState('');
  const [secondAttribute, setSecondAttribute] = useState('');
  const [filterValue, setFilterValue] = useState('');
  

  const handleSortBy = (event) => {
    const selected = event.target.value;
    setFirstAttribute(selected);
    event.preventDefault();
  }

  const handleSortBySecond = (event) => {
    const selected = event.target.value;
    setSecondAttribute(selected);
    event.preventDefault();
  }

  const handleSearch = (event) => {
    const searchedValue = event.target.value;
    setFilterValue(searchedValue);
    let filteredInformation = null;
    if (searchedValue === '') {
      setFilteredData(data);
      return;
    } else {
        if (firstAttribute === 'Название') {
          if (secondAttribute === 'Равно') {
            filteredInformation = data.filter((item) => item.name.toLowerCase() === searchedValue.toLowerCase());
          } else if (secondAttribute === 'Содержит') {
              filteredInformation = data.filter((item) => item.name.toLowerCase().includes(searchedValue.toLowerCase()));
          }
        } else if (firstAttribute === 'Количество') {
            if (secondAttribute === 'Равно') {
              filteredInformation = data.filter((item) => item.number === +searchedValue);
            } else if (secondAttribute === 'Содержит') {
                filteredInformation = data.filter((item) => item.number.toString().includes(searchedValue));
            } else if (secondAttribute === 'Больше') {
                filteredInformation = data.filter((item) => item.number > searchedValue);
            } else if (secondAttribute === 'Меньше') {
                filteredInformation = data.filter((item) => item.number < searchedValue);
            }
        } else if (firstAttribute === 'Расстояние') {
            if (secondAttribute === 'Равно') {
              filteredInformation = data.filter((item) => item.destination === +searchedValue);
            } else if (secondAttribute === 'Содержит') {
                filteredInformation = data.filter((item) => item.destination.toString().includes(searchedValue));
            } else if (secondAttribute === 'Больше') {
                filteredInformation = data.filter((item) => item.destination > searchedValue);
            } else if (secondAttribute === 'Меньше') {
              filteredInformation = data.filter((item) => item.destination < searchedValue);
            }
        }
    } 
      setFilteredData(filteredInformation);
  }

  return (
    <div className='wrapper'>
    <select className='wrapper__select' onChange={(e) => handleSortBy(e)}>
      <option selected disabled>Сортировать по:</option>
      <option value={filteredData?.name}>Название</option>
      <option value={filteredData?.number}>Количество</option>
      <option value={filteredData?.destination}>Расстояние</option>
    </select>
    {firstAttribute && firstAttribute === 'Название' 
      ? 
      <select className='wrapper__select' onChange={(e) => handleSortBySecond(e)}>
        <option selected disabled>Выберите условие:</option>
        <option>Равно</option>
        <option>Содержит</option>
      </select>
      :
      <select className='wrapper__select' onChange={(e) => handleSortBySecond(e)}>
      <option selected disabled>Выберите условие:</option>
      <option>Равно</option>
      <option>Содержит</option>
      <option>Больше</option>
      <option>Меньше</option>
    </select>
    }
    <input
    className='input'
    type='text'
    placeholder='Поиск...'
    value={filterValue}
    onChange={(e) => handleSearch(e)}
    />
  </div>
  )
}

export default Search
