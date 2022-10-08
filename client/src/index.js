import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { extendedApiSlice } from './redux/productsSlice';
import { cartApiSlice } from './redux/cartSlice';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/settings.scss';
import './styles/global.scss';
import { orderApiSlice } from './redux/orderSlice';

store.dispatch(extendedApiSlice.endpoints.getProducts.initiate());
store.dispatch(cartApiSlice.endpoints.getCart.initiate());
// store.dispatch(orderApiSlice.endpoints.getOrder.initiate());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
