import React from 'react';
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import Header from './components/Header';
import Adddevs from './components/pages/Adddevs';
import Dashboard from './components/pages/Dashboard';
import Home from './components/pages/Home';
import Singlepage from './components/pages/Singlepage';

function App() {
  return (
   <>
 
     <BrowserRouter>
        <Header/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/dashboard' element={<Dashboard/>}/>
            <Route path='/adddevs' element={<Adddevs/>}/>
            <Route path='/single/:id' element={<Singlepage/>}/>
        </Routes>
       
     </BrowserRouter>
   </>
   
   )
}

export default App;
