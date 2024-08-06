import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom"
import React from "react"
import Layout from "./components/Layout"
import Home from './components/Home/Home'


export default function App() {
  return (
    <>
    {/* <Home /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}