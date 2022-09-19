import React from 'react'

export default function Pagination({ postsPerPage, totalPosts, paginate, currentPage }) {

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <div className="flex">
            <button onClick={() => paginate(currentPage > 1 ? currentPage - 1 : currentPage)} className={`${currentPage <= 1 ? 'cursor-not-allowed' : null} flex items-center justify-center px-4 py-2 mx-1 text-gray-500 capitalize bg-white rounded-md rtl:-scale-x-100 `}>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
            </button>
            {
                pageNumbers.map(number => (
                <button onClick={() => paginate(number)} key={number} className={`hidden px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform ${currentPage === number ?  'bg-green-500' : 'bg-white'} bg-white rounded-md sm:inline  hover:bg-green-500 dark:hover:bg-green-500 hover:text-white dark:hover:text-gray-200`}>
                        {number}
                    </button>
                ))
            }
            <button onClick={() => paginate(currentPage < pageNumbers.length ? currentPage + 1 : currentPage)} className={`${currentPage >= pageNumbers.length ? 'cursor-not-allowed' : null} flex items-center justify-center px-4 py-2 mx-1 text-gray-500 capitalize bg-white rounded-md rtl:-scale-x-100 `}>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
            </button>
        </div>
    )
}
