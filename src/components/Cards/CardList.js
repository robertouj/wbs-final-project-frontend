import React from 'react'
import Cards from "./Cards"
import { useState } from 'react'

export default function CardList({ mentors })
{


    let allData = [],
        skill1 = '',
        skill2 = '',
        skill3 = '';



    if (mentors) {
        allData = mentors
    }


    return (
        <div >
            {allData.map(i => (
                <Cards
                    nickname={i.name}
                    skills={i.skills}
                    bio={i.bio}
                    photo={i.photo}
                    experience={i.experience}
                    availability={i.availability}
                    key={i._id} />))}
        </div>
    )
}
