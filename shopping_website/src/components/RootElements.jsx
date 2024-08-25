import React from 'react'
import {Outlet } from 'react-router-dom'
import Navi from './Navbar'

function RootElement() {
  return (
    <div>
        <Navi/>
        <div className="p-4">

        <Outlet/>
    </div>
        </div>
        
  )
}

export default RootElement