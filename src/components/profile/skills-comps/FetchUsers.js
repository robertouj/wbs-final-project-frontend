import React, { useEffect, useState } from 'react'
import axios from 'axios'

function FetchUsers()
{
    const [users, setUsers] = useState([]);

    useEffect(() =>
    {
        axios
            .get(`https://wbs-final-json-api.herokuapp.com/users`)
            .then((response) =>
            {
                setUsers(response.data);
            })
            .catch((error) =>
            {
                console.log(error)
            })
    }, []);
    console.log(users)

    return users;
}

export default FetchUsers
