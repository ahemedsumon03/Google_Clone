import React from 'react'
import { Link } from 'react-router-dom'
import Search from '../components/Search';

const NavBar = ({ darkMode, setDarkMode }) => {
  return (
      <div className='p-5 pb-0 flex flex-wrap sm:justify-between justify-center items-center border-b dark:border-gray-700 border-gray-200'>
          <div className='flex justify-between items-center space-x-5 w-screen'>
              <Link to="/">
                  <p className='text-2xl bg-blue-500 text-white font-bold py-1 px-2 rounded dark:bg-gray-200 dark:text-gray-900'>Google</p>
              </Link>
              <button className='text-sm bg-gray-200 p-3 rounded-full text-gray-700 hover:shadow-lg' onClick={() => setDarkMode(!darkMode)}>{ darkMode ? 'Dark' : 'Light'}</button>
          </div>
          <Search/>
      </div>
  )
}

export default NavBar;
