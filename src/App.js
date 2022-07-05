import React  from "react";
import Calender from './components/Calender';
import Header from './components/Header';
import 'react-big-calendar/lib/css/react-big-calendar.css';


function App() {
 
  return (
    <>
      <Header />
      <Calender  />
    </>
  );
}

export default App;
