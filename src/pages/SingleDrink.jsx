import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Loading } from "../Components";
import axios from 'axios';
import { FaCocktail } from "react-icons/fa";


export default function SingleDrink() {
    const [singleDrink, setSingleDrink] = useState([]);
    const { idDrink } = useParams();

    useEffect(() => {
        axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idDrink}`)
            .then(res => setSingleDrink(res.data));
    }, [idDrink]);

    return (
        <>
            {!singleDrink.drinks ? (<Loading />) : (
                <section className="py-14 px-10 flex justify-center">
                    {
                        singleDrink.drinks.map(({
                            idDrink,
                            strDrink,
                            strDrinkThumb,
                            strAlcoholic,
                            strCategory,
                            strInstructions,
                            strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5, strIngredient6, strIngredient7, strIngredient8, strIngredient9,
                            strMeasure1, strMeasure2, strMeasure3, strMeasure4, strMeasure5, strMeasure6, strMeasure7, strMeasure8, strMeasure9,
                            strGlass
                        }) =>
                            <div class="w-full max-w-xl h-2xl overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800" key={idDrink}>
                                <img className="object-cover object-center w-full " src={strDrinkThumb} alt="avatar" />

                                <div className="flex items-center px-6 py-3 bg-gray-900">
                                    <FaCocktail className="text-xl text-white" />

                                    <h1 className="mx-3 text-xl font-semibold text-white">{strDrink}</h1>
                                </div>

                                <div className="px-6 py-4 bg-gray-400">
                                    <h1 className="text-xl font-semibold text-gray-800 dark:text-white">{strCategory}</h1>

                                    {strAlcoholic !== "Alcoholic" ? (
                                        <p className="py-2 text-green-300 dark:text-green-300">{strAlcoholic}</p>
                                    ) : (
                                        <p className="text-lg py-2 text-rose-500 dark:text-rose-500">{strAlcoholic}</p>
                                    )}

                                    <h1 className="text-xl font-semibold text-gray-800 dark:text-white">Igredients</h1>

                                    {strIngredient1 ? (<li className="py-2 text-gray-700 dark:text-black">{strIngredient1} {strMeasure1}</li>) : null}
                                    {strIngredient2 ? (<li className="py-2 text-gray-700 dark:text-black">{strIngredient2} {strMeasure2}</li>) : null}
                                    {strIngredient3 ? (<li className="py-2 text-gray-700 dark:text-black">{strIngredient3} {strMeasure3}</li>) : null}
                                    {strIngredient4 ? (<li className="py-2 text-gray-700 dark:text-black">{strIngredient4} {strMeasure4}</li>) : null}
                                    {strIngredient5 ? (<li className="py-2 text-gray-700 dark:text-black">{strIngredient5} {strMeasure5}</li>) : null}
                                    {strIngredient6 ? (<li className="py-2 text-gray-700 dark:text-black">{strIngredient6} {strMeasure6}</li>) : null}
                                    {strIngredient7 ? (<li className="py-2 text-gray-700 dark:text-black">{strIngredient7} {strMeasure7}</li>) : null}
                                    {strIngredient8 ? (<li className="py-2 text-gray-700 dark:text-black">{strIngredient8} {strMeasure8}</li>) : null}
                                    {strIngredient9 ? (<li className="py-2 text-gray-700 dark:text-black">{strIngredient9} {strMeasure9}</li>) : null}

                                    <h1 class="text-xl font-semibold text-gray-800 dark:text-white">Instructions</h1>
                                    <p class="py-2 text-gray-700 dark:text-black">{strInstructions}</p>

                                    <h1 class="text-xl font-semibold text-gray-800 dark:text-white">Serving Glass</h1>
                                    <p class="py-2 text-gray-700 dark:text-black">{strGlass}</p>

                                </div>
                                <div className="flex flex-row justify-evenly px-3 pb-3 bg-gray-400">
                                    <div className="text-lg text-white opacity-75 hover:opacity-100 pt-3">
                                        <Link to="/coctails"><button type="button" class="text-white bg-black hover:text-white border border-black hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">Go to coctails</button></Link>
                                    </div>
                                    <div className="text-lg text-white opacity-75 hover:opacity-100 pt-3">
                                        <Link to="/favorites"><button type="button" class="text-white bg-black hover:text-white border border-black hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">Favorites</button></Link>
                                    </div>
                                    <div className="text-lg text-white opacity-75 hover:opacity-100 pt-3">
                                        <Link to="/drinks"><button type="button" class="text-white bg-black hover:text-white border border-black hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">Go to Drinks</button></Link>
                                    </div>
                                </div>

                            </div>
                        )
                    }
                </section >)
            }
        </>
    )
}
