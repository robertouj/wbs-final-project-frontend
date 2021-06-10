import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';


import BreadCrumbNav from './BreadCrumbNav'
import SideBar from './SideBar';

const APIURL = 'https://wbs-final-json-api.herokuapp.com/users';
const meId = '60be54163e9bbcd950a171c2';

const Profile = () =>
{
    let [me, setMe] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() =>
    {
        setIsLoading(true)
        fetch(APIURL)
            .then(res => res.json())
            .then(json =>
            {
                const mentors = json.data;
                const me = mentors.find(({ _id }) => _id === meId)
                setMe(me)
                setIsLoading(false);
            })
            .catch(() => console.log("request failed "))
    }, [])

    console.log(me)
    return (
        <>

            <div className="profile">
                <BreadCrumbNav me={me} />
                {/* <SideBar /> */}
            </div>
        </>
    );
}

export default Profile;