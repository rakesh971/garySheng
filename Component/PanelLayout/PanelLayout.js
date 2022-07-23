import React from 'react'
import SideBar from '../SideBar/SideBar'

const PanelLayout = ({children}) => {
  return (
    <div>
        <SideBar/>
        <>
            {children}
        </>
    </div>
  )
}

export default PanelLayout