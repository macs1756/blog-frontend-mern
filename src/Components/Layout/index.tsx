import * as React from 'react'
import Navbar from '../Navbar'
import { LayoutProps } from '../../Types'


const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <React.Fragment>
      <div className='container mx-auto mt-[150px]'>
        <Navbar />
        {children}
      </div>
    </React.Fragment>
  )
}

export default Layout
