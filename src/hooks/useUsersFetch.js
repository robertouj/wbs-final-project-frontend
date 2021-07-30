import {useState, useEffect} from "react";
import axios from "axios"


function useUsersFetch () {
    const [ users, setUsers] =useState([]);

    useEffect(() => {
        axios
            .get(URL/users)
            .then ((response) => {
                setUsers(response.data);
            })
            .catch((error) => {
                console.log(error)
            })
    }, []);

    return users;

}


export default useUsersFetch;