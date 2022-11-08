import React from 'react'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import Test from './pages/Test'

export default function AppRoutes() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/test" element={<Test />} />
        </Routes>
    </BrowserRouter>
  )
}