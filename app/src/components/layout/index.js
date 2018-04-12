import React from 'react'
import { Link } from 'react-router-dom'

import Header from './Header'

const Layout = ({ children }) => (
  <div>
    <Header />
      {children}
    <Footer />
  </div>
)

const Footer = () => (
  <nav className="flex flex-wrap content-end p-6">
  <div className="flex items-center flex-no-shrink mr-6">
    <span className="text-xl tracking-tight">Footer</span>
  </div>
  </nav>
)

export default Layout