import React,{useState} from 'react'
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import NewRoutes from './components/Routes';

const App = () => {

  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className='dark:bg-gray-900 bg-gray-100 dark:text-gray-200 black min-h-screen'>
        <NavBar darkMode={darkMode} setDarkMode={setDarkMode} />
        <NewRoutes />
        <Footer />
      </div>
    </div>
  )
}

export default App;


