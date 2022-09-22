import React from 'react';
import DrinkList from '../Components/DrinkList';

export default function Gin() {

    const text = 'Coctails with GIN';

    return (
        <DrinkList url={'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Gin'} text={text} />
    )
}

