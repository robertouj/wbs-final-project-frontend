import React from "react";
import { useState } from "react";
import AddSkill from "./skills-comps/AddSkill";
import SkillsList from "./skills-comps/SkillsList";
import APIData from "../../MockData.json";

export default function Skills({ skills }) {
  const [newSkills, setNewSkills] = useState([]);
  const [name, setName] = useState([]);

  console.log(newSkills);

  return (
    <section className="profile-content">
      <h1>Skills</h1>
      <h3>bla bla bla</h3>
      <p>sddasff fsdfadsfdsa dsfdsfdsf.</p>
      <div className="skillsContent">
        <AddSkill
          text={name}
          setText={setName}
          newSkills={newSkills}
          setNewSkills={setNewSkills}
        />
        <SkillsList skills={skills} newSkills={newSkills} />
      </div>
    </section>
  );
}
