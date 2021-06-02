import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Personal from "./Personal"
import Bio from "./Bio"
import Skills from "./Skills"
import Schedule from "./Schedule"
import Wallet from "./Wallet"

const Profile = () => {
    return ( 
        <>
    <div>
        <Link to="/Personal">Personal-details</Link>
        <Link to="/Bio">Bio</Link>
        <Link to="/Skills">Skills</Link>
        <Link to="/Schedule">Schedules</Link>
        <Link to="/Wallet">Wallet</Link>
        

    </div>
    <div>
        <Switch>
            <Route path="/Personal">
                <Personal />
            </Route>
            <Route path="/Bio">
            <Bio />
            </Route>
            <Route path="/Skills">
            <Skills />

            </Route>
            <Route path="/Schedule">
            <Schedule />

            </Route>
            <Route path="/Wallet">
            <Wallet />

            </Route>
        </Switch>
    </div>
    </>
     );
}
 
export default Profile;