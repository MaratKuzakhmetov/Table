import React, {useState, useEffect} from 'react';
import './App.css';
import Pagination from './components/Pagination/Pagination';
import Search from './components/Search/Search';
import Table from './components/Table/Table';


function App() {
  const [data, setData] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [page, setPage] = useState(1);
  const [filteredData, setFilteredData] = useState([]);
  
  useEffect(() => {
    async function fetchData() {
      const response = await fetch('/data');
      const result = await response.json();
      setData(result.slice((page - 1) * 5, page * 5));
      setFilteredData(result.slice((page - 1) * 5, page * 5))
      setTotalPages(result.length / 5);
    }
    fetchData();
  }, [page]);

  const handleSort = (column) => {
    const copyData = [...data];
    const filteredData = copyData.sort((a, b) => (a[column] > b[column] ? 1 : -1));
    setFilteredData(filteredData);
  }

  return (
    <div className="App">
      <Search filteredData={filteredData} data={data} setFilteredData={setFilteredData}/>
      <Table handleSort={handleSort} filteredData={filteredData}/>
      <Pagination page={page} setPage={setPage} totalPages={totalPages}/>
    </div>
  );
}

export default App;
