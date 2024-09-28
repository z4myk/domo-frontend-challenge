import React, {useEffect, useState} from 'react'
import {Route, Routes} from 'react-router-dom'
import { Footer } from '../components/Footer'
import { HomePage } from '../components/HomePage'
import { Loader } from '../components/Loader'
import { Navbar } from '../components/Navbar'
export const AppRouter = () => {

    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        setTimeout(() => {
          setIsLoading(false);
        }, 4000);
      }, []);

    return (
        <>
        {isLoading ? (
            <Loader />
        ) : (
            <>
        <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />} />
            </Routes>
            <Footer />
        </>
    )}
      </>
    )
}
