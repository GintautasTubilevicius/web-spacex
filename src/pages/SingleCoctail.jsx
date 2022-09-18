import { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import { Loading } from "../Components"
import axios from 'axios';

export default function SingleCoctail() {
    const [singleCoctail, setSingleCoctail] = useState([])
    const { idDrink } = useParams()

    useEffect(() => {
        axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idDrink}`)
            .then(res => setSingleCoctail(res.data));
    }, [idDrink]);

    return (
        <>
            {!singleCoctail.drinks ? (<Loading />) : (
                <section className="py-56 place-items-center xl:px-64 2xl:px-96">
                    {
                        singleCoctail.drinks.map(({
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
                            <div className="max-width grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10 px-20" key={idDrink}>
                                <article>
                                    <img className="single" src={strDrinkThumb} alt="pav" />
                                </article>

                                <article>
                                    <h3 className="heading mb-10">{strDrink}</h3>
                                    <ul className="text-white opacity-75 text-sm">
                                        <li className="text-xl font-bold text-white mb-5">Details</li>
                                        <li className="mb-2 text-xl">Category: {strCategory}</li>
                                        {strAlcoholic !== "Alcoholic" ? (
                                            <li className="text-xl font-bold text-emerald-500 capitalize my-3">
                                                {strAlcoholic}
                                            </li>
                                        ) : (
                                            <li className="text-xl font-bold text-rose-500 capitalize my-3">
                                                {strAlcoholic}
                                            </li>
                                        )}
                                        <li className="mt-8 mb-2 text-xl font-bold text-white">Igredients</li>
                                        {strIngredient1 ? (<li className="mb-2 list-disc list-inside text-xl">{strIngredient1} {strMeasure1}</li>) : null}
                                        {strIngredient2 ? (<li className="mb-2 list-disc list-inside text-xl">{strIngredient2} {strMeasure2}</li>) : null}
                                        {strIngredient3 ? (<li className="mb-2 list-disc list-inside text-xl">{strIngredient3} {strMeasure3}</li>) : null}
                                        {strIngredient4 ? (<li className="mb-2 list-disc list-inside text-xl">{strIngredient4} {strMeasure4}</li>) : null}
                                        {strIngredient5 ? (<li className="mb-2 list-disc list-inside text-xl">{strIngredient5} {strMeasure5}</li>) : null}
                                        {strIngredient6 ? (<li className="mb-2 list-disc list-inside text-xl">{strIngredient6} {strMeasure6}</li>) : null}
                                        {strIngredient7 ? (<li className="mb-2 list-disc list-inside text-xl">{strIngredient7} {strMeasure7}</li>) : null}
                                        {strIngredient8 ? (<li className="mb-2 list-disc list-inside text-xl">{strIngredient8} {strMeasure8}</li>) : null}
                                        {strIngredient9 ? (<li className="mb-2 list-disc list-inside text-xl">{strIngredient9} {strMeasure9}</li>) : null}
                                        <li className="mt-8 text-xl font-bold text-white">Instructions</li>
                                        <li className="mb-2 text-xl">{strInstructions}</li>
                                        <li className="mt-8 text-xl font-bold text-white">Serving Glass</li>
                                        <li className="mb-2 text-xl">{strGlass}</li>
                                        <li className="text-lg text-white opacity-75 hover:opacity-100 pt-10">
                                            <Link to="/gin"><button type="button" class="text-white-900 hover:text-white border border-white hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">&larr; Back to Gin</button></Link>
                                        </li>

                                    </ul>
                                </article>
                            </div>
                        )
                    }
                </section >)
            }
        </>
    )
}