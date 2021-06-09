import React from 'react'
import { useState } from 'react';
import AddSkill from './skills-comps/AddSkill'
import SkillsList from './skills-comps/SkillsList'
import APIData from '../../MockData.json'

export default function Skills({ skills })
{


    const [newSkills, setNewSkills] = useState([]);
    const [name, setName] = useState([]);


    console.log(newSkills)


    return (
        <div>
            Skills
            <h2 className="mb-5" style={{ textAlign: "center" }}>Skills pageHello</h2>
            <AddSkill text={name} setText={setName} newSkills={newSkills} setNewSkills={setNewSkills} />
            <SkillsList skills={skills} newSkills={newSkills} />
        </div>
    )
}
