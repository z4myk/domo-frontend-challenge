import React from 'react'
import {Route, Routes} from 'react-router-dom'
import { HomePage } from '../components/HomePage'
import { Navbar } from '../components/Navbar'
export const AppRouter = () => {
    return (
        <>
        <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />} />
            </Routes>
        </>
    )
}
