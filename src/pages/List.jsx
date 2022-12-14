import { useState, useEffect } from "react";
import { Loading } from "../Components";
import { Link, useParams } from "react-router-dom"
import Pagination from "../Components/Pagination";
import axios from 'axios';

export default function List() {

    const [list, setList] = useState([]);
    const { letter } = useParams();
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(12);
    const [heart, setHeart] = useState(JSON.parse(localStorage.getItem('items')) || []);


    useEffect(() => {
        axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?${letter}`)
            .then(response => {
                const drinks = response.data.drinks;
                const newdata = drinks.map((o) => ({
                    ...o,
                    isSelected: false
                }));
                const newDataWithFavorites = newdata.map((item) => {
                    if (heart.find(s => s.idDrink === item.idDrink)) {
                        item.isSelected = true;
                    }
                    return item;
                })
                setList(newDataWithFavorites);
            });
    }, [letter, heart]);

    const Favorite = (index) => {
        const newItems = [...list];
        const found = newItems.find(obj => {
            return obj.idDrink === index;
        });
        const match = heart.some(s => s.idDrink === found.idDrink)
        found.isSelected = !found.isSelected;
        if(!found.isSelected) setHeart(s => [...s].filter(element => element.idDrink !== found.idDrink));
        if (!match) setHeart(s => [...s, found]);
        setList(newItems);
    }

    useEffect(() => {
        localStorage.setItem('items', JSON.stringify(heart));
    }, [heart]);

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = list.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <>
            {!currentPosts ? (<Loading />) : (
                <section className="py-14 flex flex-col items-center">
                    <h1 className="heading text-center pb-16 ">{list.length} Coctails found</h1>
                    <Pagination postsPerPage={postsPerPage} totalPosts={list.length} paginate={paginate} currentPage={currentPage} />
                    <div className="container flex items-center flex-wrap px-14 pt-4 pb-12">
                        {
                            currentPosts.map((list, index) =>
                            (
                                <div key={list.idDrink} className="w-full sm:w-1/2 md:w-1/3 xl:w-1/4 2xl:w-1/6 p-6 flex flex-col">
                                    <Link to={`/drinks/${list.idDrink}`}>
                                        <img className="hover:grow hover:shadow-lg rounded-lg" src={list.strDrinkThumb} alt={list.strDrink} />
                                    </Link>
                                    <div className="pt-3 flex items-center justify-between">
                                        <p className="text-white text-lg font-bold truncate">{list.strDrink}</p>
                                        <div onClick={() => Favorite(list.idDrink)}>
                                            <svg className={`${list.isSelected ? 'text-red-700' : 'text-gray-500'} cursor-pointer h-8 w-8 fill-current hover:text-red-700`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                                <path d="M12,4.595c-1.104-1.006-2.512-1.558-3.996-1.558c-1.578,0-3.072,0.623-4.213,1.758c-2.353,2.363-2.352,6.059,0.002,8.412 l7.332,7.332c0.17,0.299,0.498,0.492,0.875,0.492c0.322,0,0.609-0.163,0.792-0.409l7.415-7.415 c2.354-2.354,2.354-6.049-0.002-8.416c-1.137-1.131-2.631-1.754-4.209-1.754C14.513,3.037,13.104,3.589,12,4.595z M18.791,6.205 c1.563,1.571,1.564,4.025,0.002,5.588L12,18.586l-6.793-6.793C3.645,10.23,3.646,7.776,5.205,6.209 c0.76-0.756,1.754-1.172,2.799-1.172s2.035,0.416,2.789,1.17l0.5,0.5c0.391,0.391,1.023,0.391,1.414,0l0.5-0.5 C14.719,4.698,17.281,4.702,18.791,6.205z" />
                                            </svg>
                                        </div>
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