import React,{useState,useEffect} from 'react'
import Link from './Links'
import { useDebounce } from 'use-debounce'
import { useResultContext } from '../components/Context/ResultContext'

const Search = () => {

  const { setSearchTerm } = useResultContext();
  const [text, setText] = useState('Elon Mask');
  const [debounceValue] = useDebounce(text, 3000);

  useEffect(() => {
    setSearchTerm(debounceValue);
  }, [debounceValue]);

  return (
    <div>
        <div className='relative sm:ml-48 md:ml-32 sm:-mt-10 mt-3'>
        <input
          type="text"
          value={text}
          className='sm:w-96 w-80 h-10 dark:bg-gray-200 border outline-none rounded-full shadow-sm p-6 text-black hover:shadow-lg'
          placeholder="Search google or type url"
          onChange={(e)=>setText(e.target.value)}
        />
        </div>
        <Link/>
    </div>
  
  )
}

export default Search