import React from 'react'
import Cards from "./Cards"
import { useState } from 'react'

export default function CardList({ selectedMentors })
{


    let nickname = [],
        bio = '';

    if (selectedMentors) {
        nickname = selectedMentor.map(i => i.nickname)
        bio = selectedMentor.map(i => i.bio)
    }


    return (
        <div>
            {/* {cardsData.map(i => (<Cards title={title} key={i.id} />))} */}
        </div>
    )
}
