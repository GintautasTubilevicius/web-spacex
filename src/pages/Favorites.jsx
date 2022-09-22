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
                <section className="py-14 flex flex-col items-center sm:px-5">
                    <h1 className="heading text-center pb-16 ">My Best Coctails</h1>
                    <div className="container flex gap-10 items-center justify-center flex-wrap pt-4 pb-12 px-3">
                        {
                            items.map(({ idDrink, strDrink, strDrinkThumb, strCategory, strInstructions }) =>
                            (
                                <div className="max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800" key={idDrink}>
                                    <div className="px-4 py-2">
                                        <h1 className="text-lg font-bold text-gray-800 dark:text-white truncate">{strDrink}</h1>
                                        <p className="mt-1 text-sm text-gray-600 dark:text-gray-400"></p>
                                    </div>
                                    <div className="overflow-hidden  bg-red-400 cursor-pointer relative group">
                                        <div
                                            className="rounded-xl z-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/80 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-30 text-white flex items-end">
                                            <div>
                                                <div className="transform-gpu  p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out">
                                                    <div className="font-bold text-xl">{strDrink}</div>
                                                    <div className="opacity-60 text-sm ">
                                                        See your Favorite Coctail instructions and ingredients
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <Link to={`/coctails/${idDrink}`}>
                                            <img
                                                alt="Random drink"
                                                className="object-cover w-full aspect-square group-hover:scale-110 transition duration-300 ease-in-out"
                                                src={strDrinkThumb}
                                            />
                                        </Link>
                                    </div>
                                    <div className="flex items-center justify-center px-4 py-2 bg-gray-400">
                                        <button onClick={() => remove(idDrink)} className="px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-300 transform bg-white rounded hover:bg-rose-400 focus:bg-gray-400 focus:outline-none">Delete from favorites</button>
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

