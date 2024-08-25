import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import ProductPage from "./components/ProductPage";
import Cart from "./components/Cart";
import RootElement from './components/RootElements';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Provider} from 'react-redux';
import store from './Redux/store';

const Router = createBrowserRouter([
  {
    path: "/",
    element: <RootElement/>,
    children: [
      {
        index: true,
        element: <ProductPage/>
      },
      {
        path: "/cart",
        element: <Cart/>
      }
    ]
  },
  

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={Router} />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
