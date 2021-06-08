// import './App.css';
import React from 'react'
import { useState } from 'react'
import SearchBar from './components/SearchBar'
import CardList from "./components/Cards/CardList"
import MainNavBar from './components/MainNavBar'


const APIURL = 'https://wbs-final-json-api.herokuapp.com/';

function App()
{


  const [mentors, setMentors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);


  const onSearch = (text) =>
  {
    setIsLoading(true)
    fetch(`${ APIURL }users/skills/${ text }`)
      .then(res => res.json())
      .then(json =>
      {
        setMentors(json.data);
        setIsLoading(false);

      })
      .catch(() => console.log("request failed "))


  }
  console.log(mentors)

  return (
    <>
      <div className="App">
        <MainNavBar />
        <SearchBar onSearch={onSearch} />
        <CardList mentors={mentors} />




      </div>

    </>

  );
}

export default App;
