/*
 * @Date: 2023-07-25 09:21:23
 * @Author: Bruce Hsu
 * @Description: 
 */
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Custom Imports
import './index.css'
import Home from './containers/Home'
import Content from './containers/Content';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/content' element={<Content />} />
    </Routes>
    
  </BrowserRouter>
)
