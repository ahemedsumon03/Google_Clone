import React, { useState, createContext, useContext } from 'react';
import axios from 'axios';
const baseUrl = "https://google-search3.p.rapidapi.com/api/v1";
const ResultContext = createContext();

export const ResultContextProvider = ({ children }) => {
    
    const [result, setResult] = useState([]);
    const [searchTerm, setSearchTerm] = useState('Vijay');
    const [isLoading, setIsLoading] = useState(false);
    
    const getResult = async (type) => {
        setIsLoading(true);
        const { data } = await axios.get(`${baseUrl}${type}`, {
            headers: {
                'x-user-agent': 'desktop',
                'x-proxy-location': 'EU',
                'x-rapidapi-host': 'google-search3.p.rapidapi.com',
                'x-rapidapi-key': process.env.REACT_APP_API_KEY
              }
        });
        if (type.includes('/news')) {
            setResult(data.entries);
        } else if (type.includes('/search')) {
            setResult(data.results);
        } else if (type.includes('/images')) {
            setResult(data.image_results);
        } else {
            setResult(data);
        }
        setIsLoading(false);
    }


    return (
        <ResultContext.Provider value={{ 
            getResult,result,isLoading,searchTerm,setSearchTerm
        }}>
            { children }
        </ResultContext.Provider>
    )
}

export const useResultContext = () => useContext(ResultContext);



