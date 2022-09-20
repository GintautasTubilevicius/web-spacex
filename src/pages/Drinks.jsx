import React from 'react'
import DrinkList from '../Components/DrinkList'

export default function Drinks() {

    const text = 'Drinks';

    return (
        <DrinkList url={'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink'} text={text} />
    )
}

