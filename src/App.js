import React, { useEffect } from "react";
import Calender from './components/Calender';
import Header from './components/Header';
import 'react-big-calendar/lib/css/react-big-calendar.css';
// import { useDispatch, useSelector } from 'react-redux'
// import { dateActions } from './store/actions/dateActions'


function App() {
 
  return (
    <>
      <Header />
      <Calender  />
    </>
  );
}

export default App;
