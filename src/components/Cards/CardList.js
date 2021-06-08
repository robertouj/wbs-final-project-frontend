import React from 'react'
import Cards from "./Cards"
import { useState } from 'react'

export default function CardList({ mentors })
{


    let allData = [],
        skill1 = '',
        skill2 = '';



    if (mentors) {
        allData = mentors
    }
    console.log(allData)

    return (
        <div >
            {allData.map(i => (
                <Cards
                    nickname={i.name}
                    skill1={i.skills[0].name}
                    skill2={i.skills[1].name}
                    bio={i.bio}
                    photo={i.photo}
                    experience={i.experience}
                    availability={i.availability}
                    key={i._id} />))}
        </div>
    )
}
