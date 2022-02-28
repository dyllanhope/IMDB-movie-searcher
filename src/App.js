import React, { Component } from 'react';
import Router from './Router.js';
import { bg } from './App.css';
import NavBar from './components/Navbar';
import model from './model';
import { createStore, StoreProvider, persist } from 'easy-peasy';


function App() {

  const store = createStore(persist(model, {storage: 'localStorage'}));

  return (
    <StoreProvider store={store}>
      <div className='bg'>
        <NavBar />
        <Router />
      </div>
    </StoreProvider>
  );
}

export default App;
