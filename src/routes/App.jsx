import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../components/Layout';
import { Home } from '../containers/Home';
import { Checkout } from '../containers/Checkout';
import { Information } from '../containers/Information';
import { Payment } from '../containers/Payment';
import { Success } from '../containers/Success';
import { NotFound } from '../containers/NotFound';
import AppContext from '../context/AppContext';
import useInitialState from '../hooks/useInitialState';


export const App = () => {
  const initialState = useInitialState()
  return (
    <AppContext.Provider value={initialState}>
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/checkout" element={<Checkout />}></Route>
          <Route
            exact
            path="/checkout/information"
            element={<Information />}
          ></Route>
          <Route exact path="/checkout/payment" element={<Payment />}></Route>
          <Route exact path="/checkout/success" element={<Success />}></Route>
          <Route element={<NotFound />}></Route>
        </Routes>
      </Layout>
    </BrowserRouter>
    </AppContext.Provider>
  );
};
