import React from 'react';

export default function Footer() {
    return (
        <div className="">
            <footer className="pt-6 bg-transparent shadow flex-wrap sm:items-center sm:justify-center flex md:items-center md:justify-evenly md:p-6">
                <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 <a href="https://gintautastubilevicius.github.io/" className="hover:underline">Gintautas™</a>. All Rights Reserved.
                </span>
                <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
                    <li>
                        <a href="!#" className="mr-4 hover:underline md:mr-6 ">About</a>
                    </li>
                    <li>
                        <a href="!#" className="mr-4 hover:underline md:mr-6">Privacy Policy</a>
                    </li>
                    <li>
                        <a href="!#" className="mr-4 hover:underline md:mr-6">Licensing</a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/gintautas-tubilevi%C4%8Dius/" className="hover:underline">Contact</a>
                    </li>
                </ul>
            </footer>
        </div>
    )
}
