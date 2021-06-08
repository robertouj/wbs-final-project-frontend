import React from 'react'
import Cards from "./Cards"
import { useState } from 'react'

export default function CardList({ selectedMentors })
{


    let allData = [];
           


    if (selectedMentors) {
            allData = selectedMentors
    }


    return (
        <div>
            {allData.map(i => (<Cards 
            nickname={i.nickname}
            bio={i.bio}
            skills={i.skills}
            photo={i.photo}
            experience={i.experience}
            availability={i.availability}
            key={i.userId} />))}
        </div>
    )
}        
// nickname = selectedMentor.map(i => i.nickname)
//         bio = selectedMentor.map(i => i.bio)

//         userId = selectedMentors.map(i => i.userId)
// {cardsData.map(i => (<Cards title={title}  key={i.id} />))}