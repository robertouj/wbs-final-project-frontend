import React from 'react'
import { useState } from 'react';
import AddSkill from './skills-comps/AddSkill'
import SkillsList from './skills-comps/SkillsList'

export default function Skills()
{

    const [skills, setSkills] = useState([]);
    const [text, setText] = useState('');

    return (
        <div>
            Skills
            <h2 className="mb-5" style={{ textAlign: "center" }}>Skills pageHello</h2>
            <AddSkill text={text} setText={setText} skills={skills} setSkills={setSkills} />
            <SkillsList skills={skills} setSkills={setSkills} />
        </div>
    )
}
