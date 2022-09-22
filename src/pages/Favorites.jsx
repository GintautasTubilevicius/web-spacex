import { useState, useEffect } from "react";
import { Loading } from "../Components";
import { Link } from "react-router-dom";

export default function Favorites() {

    const [items, setItems] = useState(JSON.parse(localStorage.getItem('items')) || []);

    const remove = (idDrink) => {
        console.log('items', items)
        setItems(s => [...s].filter(element => element.idDrink !== idDrink))
    };

    useEffect(() => {
        localStorage.setItem('items', JSON.stringify(items))
    }, [items]);

    return (
        <>
            {!items ? (<Loading />) : (
                <section className="py-40 flex flex-col items-center sm:px-5">
                    <h1 className="heading text-center pb-16 ">My Best Coctails</h1>
                    <div className="container flex gap-10 items-center justify-center flex-wrap pt-4 pb-12 px-3">
                        {
                            items.map(({ idDrink, strDrink, strDrinkThumb }) =>
                            (
                                <div className="max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800" key={idDrink}>
                                    <div className="px-4 py-2">
                                        <h1 className="text-lg font-bold text-gray-800 dark:text-white truncate">{strDrink}</h1>
                                        <p className="mt-1 text-sm text-gray-600 dark:text-gray-400"></p>
                                    </div>
                                    <Link to={`/coctails/${idDrink}`}>
                                        <img className="object-cover w-full mt-2" src={strDrinkThumb} alt="Drinks" />
                                    </Link>
                                    <div className="flex items-center justify-center px-4 py-2 bg-gray-400">
                                        <button onClick={() => remove(idDrink)} className="px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-300 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none">Delete from favorites</button>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </section >)
            }
        </>
    )
}

