import React from 'react'
import Cards from "./Cards"
import { useState } from 'react'

export default function CardList({ mentors })
{


    let allData = [];



    if (mentors) {
        allData = mentors
    }
    console.log(allData)

    return (
        <div>
            {allData.map(i => (<Cards nickname={i.name} skills={[i.skills]} key={i._id} />))}
        </div>
    )
}
