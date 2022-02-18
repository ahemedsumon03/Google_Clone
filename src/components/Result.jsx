import React,{useEffect} from 'react'
import { useResultContext } from './Context/ResultContext';
import { useLocation } from 'react-router-dom';
import ReactPlayer from 'react-player';
import Loading from './Loading';


const Result = () => {

  const location = useLocation();
  const { getResult, isLoading, result, searchTerm, setSearchTerm } = useResultContext();

  useEffect(() => {

    if (searchTerm) {
      if (location.pathname === '/videos') {
        getResult(`/search/q=${searchTerm} videos`)
      } else {
        getResult(`${location.pathname}/q=${searchTerm}&num=40`);
      }
    }

  }, [searchTerm,location.pathname]);

  console.log(result);


  
  if (isLoading) {
    return <Loading/>
  }

  console.log(location.pathname);

  // eslint-disable-next-line default-case
  switch (location.pathname) {
    case '/search':
      return (
        <div className='flex flex-wrap justify-between space-y-6 sm:px-56'>
          {result?.map(({ link ,title },index) => (
            <div key={ index } className="w-full md:w-2/5">
              <a href={ link } target="_blank" rel="noreferrer">
                <p className='text-sm'>
                    {link > 30 ? link.substr(0,30) : link }
                </p>
                <p className='text-lg hover:underline dark:text-blue-300 text-blue-700'>
                   {title}
                </p>
              </a>
             </div>
           ))}
        </div>
      )
    case '/images':
      return (
        <div className="flex flex-wrap justify-center items-center">
          {result?.map(({image,link:{href,title}},index) => (
            <a href={ href } target="_blank" rel="noreferrer" key={index} className="sm:p-3 p-5">
                 <img src={image?.src} alt={title} loading="lazy" />
                 <p className='sm:w-36 w-36 break-words text-sm mt-2'>{title}</p>
             </a>
          ))}
        </div>
      )

    case '/news':
      return (
        <div className='flex flex-wrap justify-between space-y-6 sm:px-56'>
        {result?.map(({title,link,id,source}) => (
          <div key={ id } className="w-full md:w-2/5">
            <a href={ link } target="_blank" rel="noreferrer" className='hover:underline'>
              <p className='tex-lg dark:text-blue-300 text-blue-700'>{ title }</p>
            </a>
            <div className='flex gap-4'>
              <a href={source?.href} target='_blank' rel="noreferrer" className='hover:underline hover:text-blue-300'>{ source?.href }</a>
            </div>

           </div>
         ))}
      </div>
      )

    case '/videos':
      return (
        <div className='flex flex-wrap'>
          {result?.map(({link},index) => (
            <div key={ index } className='p-2'>
              <ReactPlayer
                url={link && link}
                controls
                width='335px'
                height='225px'
              />
            </div>
          ))}
        </div>
      )
  }

  return (
    <div>Result</div>
  )
}

export default Result