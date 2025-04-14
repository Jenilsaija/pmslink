import React from 'react'
import SideBar from './SideBar'

function Layout({ Component }) {
    return (
        <div className='flex flex-row w-full h-screen'>
            <SideBar />

            <div className='flex flex-col w-[96%]'>
                {Component}
            </div>
        </div>
    )
}

export default Layout
