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
import { client } from '@/utils/apoll';
import { ROUTE_CONFIG } from '@/routes';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <Routes>
        {ROUTE_CONFIG.map((item) => (
          <Route path={item.path} key={item.key} element={<item.element />}/>
        ))}
      </Routes>
    </BrowserRouter>
  </ApolloProvider>
)
