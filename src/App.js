import React from 'react'
import './App.css'
import {BrowserRouter,  Routes, Route} from 'react-router-dom';
import Home from './Home';

import Error from './Error';
const App = () => {
  return (
    <>

    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      {/* <Route path="movies/:id" element={<SingleMovie/>}/> */}
     <Route path="*" element={<Error/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
