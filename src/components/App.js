import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Header/Header';
import Dashboard from './Dashboard/Dashboard';
import Friends from './Friends/Friends';
import Friend from './Friend/Friend';
import Contacts from './Contacts/Contacts';
import PageNotFound from './PageNotFound/PageNotFound';
import {friends} from '../utils/friends';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Dashboard/>} />
        <Route path="/friends" element={<Friends friends={friends}/>} />
        <Route path="/friends/:id" element={<Friend friends={friends} />} />
        <Route path='/contacts' element={<Contacts />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
      
    </div>
  );
}

export default App;
