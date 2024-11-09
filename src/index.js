import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Add from './Page/Add';

import { Provider } from 'react-redux';
import store from './redux/Store';



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "order/add",
    element: <Add />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>,
  </React.StrictMode>
);


reportWebVitals();
