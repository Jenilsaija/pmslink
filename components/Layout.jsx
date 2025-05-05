import React from 'react'
import SideBar from './SideBar'

function Layout({ Component }) {
    return (
        <div className='flex flex-row min-h-screen'>
            <SideBar />

            <div className='flex-1 ml-16'>
                {Component}
            </div>
        </div>
    )
}

export default Layout
