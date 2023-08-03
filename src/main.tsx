/*
 * @Date: 2023-07-25 09:21:23
 * @Author: Bruce Hsu
 * @Description: 
 */
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ApolloProvider } from '@apollo/client';

// Custom Imports
import './index.css'
import Home from '@/containers/Home'
import Content from '@/containers/Content';
import Login from '@/containers/Login';
import { client } from '@/utils/apoll';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/content' element={<Content />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </BrowserRouter>
  </ApolloProvider>
)
