
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './component/Navbar';
import Home from './component/Home';
import Add from './component/Add';
import Edit from './component/Edit';

function App() {
  return (
   <>
   <BrowserRouter>
      <Navbar/>
    
       <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/addProduct' element={<Add/>} />
        <Route path='/editProduct/:id' element={<Edit/>} />
       </Routes>
  </BrowserRouter>
   </>
  );
}

export default App;
