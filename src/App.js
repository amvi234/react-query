import React from 'react';
import { useState } from 'react';
import Planets from './components/Planets';
import Navbar from './components/Navbar';
import People from './components/People';
import { ReactQueryDevtools } from 'react-query/devtools'

function App() {

  const [page, setPage] = useState('planets');

  return (
    <>
    <div className="App">
      <h1>Star Wars Info</h1>
      <Navbar setPage={setPage} />
      <div className="content">
        {page === 'planets' ? <Planets /> : <People />}
      </div>
    </div>
    <ReactQueryDevtools initialIsOpen={false}/>
    </>
  );
}

export default App;
