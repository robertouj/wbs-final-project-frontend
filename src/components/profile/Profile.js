import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import BreadCrumbNav from "./BreadCrumbNav";

const APIURL = "https://wbs-final-json-api.herokuapp.com/users";
const meId = "60be54163e9bbcd950a171c2";

const fakeSkills = [
  {
    _id: "60be5aa03e9bbcd950a171c5",
    name: "React",
  },
  {
    _id: "60be5a8f3e9bbcd950a171c4",
    name: "JavaScript",
  },
  {
    _id: "60be5aad3e9bbcd950a171c6",
    name: "Piano",
  },
  {
    _id: "60c240c7ded44e002c638f79",
    name: "Hand Stand",
  },
  {
    _id: "60c240e4ded44e002c638f7a",
    name: "Parkour",
  },
  {
    _id: "60c24114ded44e002c638f7c",
    name: "Arabic",
  },
  {
    _id: "60c240faded44e002c638f7b",
    name: "NodeJS",
  },
  {
    _id: "60c24a15ded44e002c638f80",
    name: "Git",
  },
  {
    _id: "60c24132ded44e002c638f7e",
    name: "German",
  },
  {
    _id: "60c24b6803e4e669a73cef53",
    name: "Console",
  },
  {
    _id: "60c24b9003e4e669a73cef55",
    name: "Greek",
  },
  {
    _id: "60c24a2fded44e002c638f81",
    name: "Dota2",
  },
  {
    _id: "60c24f2d03e4e669a73cef56",
    name: "Barrel Rider",
  },
  {
    _id: "60c24b7303e4e669a73cef54",
    name: "CSS",
  },
  {
    _id: "60c2412aded44e002c638f7d",
    name: "English",
  },
];

const Profile = () => {
  let [me, setMe] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(APIURL)
      .then((res) => res.json())
      .then((json) => {
        const mentors = json.data;
        const me = mentors.find(({ _id }) => _id === meId);
        //setMe(me);
        me.skills = fakeSkills;
        setMe(me);
        setIsLoading(false);
      })
      .catch(() => console.log("request failed "));
  }, []);

  //console.log(me);
  return (
    <>
      <div className="profile">
        <BreadCrumbNav me={me} />
      </div>
    </>
  );
};

export default Profile;
