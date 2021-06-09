// import React, { useState, createContext } from 'react'
// import SearchBar from './SearchBar';


// const APIURL = 'https://wbs-final-json-api.herokuapp.com/';

// export const MentorsContext = createContext();

// export const MentorsProvider = ({ children }) =>
// {


//     const [mentors, setMentors] = useState([]);
//     const [isLoading, setIsLoading] = useState(false);
//     const [searchQuery, setSearchQuery] = useState('');

//     const onSearch = (text) =>
//     {

//         setIsLoading(true)
//         fetch(`${ APIURL }users/skills/${ text }`)
//             .then(res => res.json())
//             .then(json =>
//             {
//                 setMentors(json.data);
//                 setIsLoading(false);
//                 console.log(json.data)
//             })
//             .catch(() => console.log("request failed "))


//     }


//     const search = () =>
//     {
//         onSearch(searchQuery)
//         setSearchQuery('')
//     }

//     const searchHandler = (e) =>
//     {
//         setSearchQuery(e.target.value.toLowerCase());
//         // console.log(setResults);
//     }

//     const handelEnter = e =>
//     {

//         if (e.key === 'Enter') {
//             e.preventDefault();
//             search()
//         }

//     }
//     const clickHandler = (j) =>
//     {
//         j.preventDefault();
//         search()
//     }

//     return (
//         <MentorsContext.Provider
//             setSearchQuery={setSearchQuery}
//             searchQuery={searchQuery}
//             search={search} mentors={mentors}
//             clickHandler={clickHandler}
//             handelEnter={handelEnter}
//             searchHandler={searchHandler}>
//             {children}
//         </MentorsContext.Provider>
//     )
// }