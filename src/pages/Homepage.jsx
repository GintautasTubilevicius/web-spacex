import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Loading } from "../Components";
import Letter from "../Components/Letter";
import Search from "../Components/Search";

export default function Homepage() {

    const [random, setRandom] = useState(null);

    useEffect(() => {
        const fetchRandom = async () => {
            const res = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php');
            const data = await res.json();
            setRandom(data);
        }
        fetchRandom();
    }, []);

    return (
        <>
            {!random ? <Loading /> :
                <section className="px-3 flex justify-center max-h-screen">
                    <div className="">
                        <article>
                            <Search />
                            <div className="relative flex-col py-5 items-center">
                                <div className="flex-grow border-t border-white"></div>
                                <h1 className="text-white text-2xl font-bold text-center py-4">Random drink</h1>
                                <h1 className="text-white text-2xl font-bold text-center pb-10">{random.drinks[0].strDrink}</h1>
                            </div>
                            <div className="overflow-hidden  aspect-video bg-red-400 cursor-pointer rounded-xl relative group">
                                <div
                                    className="rounded-xl z-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/80 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-30 text-white flex items-end">
                                    <div>
                                        <div className="transform-gpu  p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out">
                                            <div className="font-bold text-xl">{random.drinks[0].strDrink}</div>
                                            <div className="font-bold text-sm">{random.drinks[0].strCategory}</div>
                                            <div className="opacity-60 text-sm ">
                                                {random.drinks[0].strInstructions}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <Link to={`/drinks/${random.drinks[0].idDrink}`}>
                                    <img
                                        alt="Random drink"
                                        className="object-cover w-full aspect-square group-hover:scale-110 transition duration-300 ease-in-out"
                                        src={random.drinks[0].strDrinkThumb}
                                    />
                                </Link>
                            </div>
                            <div className="relative flex py-5 items-center">
                                <div className="flex-grow border-t border-white"></div>
                            </div>
                            <div className="text-center mb-44">
                                <h3 className="text-white">Browse By Name</h3>
                                <Letter className="text-lg" />
                            </div>
                        </article>
                    </div>
                </section>}
        </>
    )
};