import React from 'react'
import { Outlet } from 'react-router-dom'
import Menu from './Nav'

const Layout = () => {
  return (
    <>
      <Menu />
      <div className="container mt-5">
        <Outlet />
      </div>
    </>
  )
}

export default Layout