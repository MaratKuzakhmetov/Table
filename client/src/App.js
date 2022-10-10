import React, {useState, useEffect} from 'react';
import './App.css';
import Pagination from './components/Pagination/Pagination';
import Search from './components/Search/Search';
import Table from './components/Table/Table';


function App() {
  const [data, setData] = useState([]); // данные из БД с сервера
  const [totalPages, setTotalPages] = useState(0); // кол-во страниц (по дефолту 0)
  const [page, setPage] = useState(1); // номер страницы
  const [filteredData, setFilteredData] = useState([]); // отфильтрованные данные с БД

  // вытаскиваем данные с сервера через fetch
  useEffect(() => {
    async function fetchData() {
      const response = await fetch('/data');
      const result = await response.json();
      setData(result.slice((page - 1) * 5, page * 5)); // сделал по-дефолту 5 строк в таблицу на 1 страницу
      setFilteredData(result.slice((page - 1) * 5, page * 5))
      setTotalPages(result.length / 5); // общее кол-во страниц
    }
    fetchData();
  }, [page]); // в массив зависимости ставим номер страницы, чтобы на каждой новой странице были новые данные в таблицу

  // функция сортировки, сортирует по возрастанию
  const handleSort = (column) => {
    const copyData = [...data];
    const filteredData = copyData.sort((a, b) => (a[column] > b[column] ? 1 : -1));
    setFilteredData(filteredData);
  }

  // приложение состоит из 3 компонентов: Поисковик с 2 фильтрами; Сама таблица; Список страниц (Пагинация)
  return (
    <div className="App">
      <Search filteredData={filteredData} data={data} setFilteredData={setFilteredData}/>
      <Table handleSort={handleSort} filteredData={filteredData}/>
      <Pagination page={page} setPage={setPage} totalPages={totalPages}/>
    </div>
  );
}

export default App;
