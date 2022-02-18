import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Result from '../components/Result';

const NewRoutes = () => {

    return (
      <div>
          <Routes>
     
            <Route path="/" element={ <Navigate to='/search'/>}/>
            <Route path="/search" element={<Result />} />
            <Route path="/videos" element={ <Result/>}/>
            <Route path="/news" element={<Result />} />
            <Route path="/images" element={ <Result/>}/>
            
      </Routes>  
      </div>
      
  )
}

export default NewRoutes;