import React, { useState, useEffect } from 'react';


import BreadCrumbNav from './BreadCrumbNav'

const APIURL = 'https://wbs-final-json-api.herokuapp.com/users';
const meId = '60be54163e9bbcd950a171c2';

const Profile = () =>
{
    const [me, setMe] = useState({});

    useEffect(() =>
    {
        fetch(APIURL)
            .then(res => res.json())
            .then(json =>
            {
                const mentors = json.data;
                const me = mentors.find(({ _id }) => _id === meId)
                setMe(me)

            })
            .catch(() => console.log("request failed "))
    }, [])



    return (
        <BreadCrumbNav me={me} />
    );
}

export default Profile;