import React from 'react';
import DrinkList from '../Components/DrinkList';

export default function Coctails() {

    const text = 'Coctails';

    return (
        <DrinkList url={'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail'} text={text} />
    )
}
