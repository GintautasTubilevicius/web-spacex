import React from 'react';
import DrinkList from '../Components/DrinkList';

export default function NonAlcoholic() {

    const text = 'Non Alcoholic Drinks';

    return (
        <DrinkList url={'https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic'} text={text}/>
    )
}

