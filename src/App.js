// import './App.css';
import React from 'react'
import { useState } from 'react'
import SearchBar from './components/SearchBar'
import axios from "axios"
import Data from './MockData.json'
import CardList from "./components/Cards/CardList"
import MainNavBar from './components/MainNavBar'



// import FullCalendar from '@fullcalendar/react'
// import dayGridPlugin from '@fullcalendar/daygrid'
// import interactionPlugin from '@fullcalendar/daygrid'
// import { formatDate } from '@fullcalendar/react';
// import timeGridPlugin from '@fullcalendar/daygrid'


// const str = formatDate(new Date(), {
//   month: 'long',
//   year: 'numeric',
//   day: 'numeric'
// });

function App()
{


  const [selectedMentors, setSelectedMentors] = useState('');
  const [mentors, setMentors] = useState(Data);


  const onSearch = (text) =>
  {
    const selecting = mentors.filter(i =>
    {


      if (i.skills.filter(e => e === text)) {
        return i
      } else {
        alert('cant find what you are looking for')
      }
    })

    // console.log(selecting)
    setSelectedMentors(selecting)
  }
  // console.log(selectedMentor)

  return (
    <>
      <div className="App">
        <MainNavBar />
        <SearchBar onSearch={onSearch} />
        <CardList selectedMentors={selectedMentors} />



      </div>

    </>

  );
}

export default App;
// // <FullCalendar
// plugins={[ dayGridPlugin,  dayGridPlugin, interactionPlugin, timeGridPlugin ]}
// initialView="dayGridMonth"
// weekends={true}
// editable={true}
// events={[
//   { title: 'event 1', date: '2019-04-01' },
//   { title: 'event 2', date: '2021-06-02' }
// ]}
// />