import React from 'react'
import Cards from "./Cards"
import { useState } from 'react'

export default function CardList({ selectedMentor }) {

    
    let title = '',
        cardsData = [];

    if (selectedMentor) {
        title = selectedMentor[0].mentor
        cardsData = selectedMentor
    }
    // console.log(selectedMentor)

    return (
        <div>
              {cardsData.map(i => (<Cards title={title}  key={i.id} />))}
        </div>
    )
}
