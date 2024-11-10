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
import All from './Page/All';
import Pending from './Page/Pending';
import Review from './Page/Review';
import Sucess from './Page/Sucess';
import Complete from './Page/Complete';
import Cancel from './Page/Cancel';



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "order/add",
    element: <Add />,
  },
  {
    path: "order/all",
    element: <All/>,
  },
  {
    path: "order/pending",
    element: <Pending/>,
  },
  {
    path: "order/review",
    element: <Review/>,
  },
  {
    path: "order/sucsess",
    element: <Sucess/>,
  },
  {
    path: "order/complete",
    element: <Complete/>,
  },
  {
    path: "order/cancel",
    element: <Cancel/>,
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
