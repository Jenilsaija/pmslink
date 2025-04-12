import { Avatar } from '@radix-ui/react-avatar'
import { Home } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import { AvatarFallback, AvatarImage } from './ui/avatar'

function AppSideBar() {
    return (
        <div className='flex flex-row w-full h-screen'>
            <div className='flex flex-col items-center justify-between w-[4%] h-screen bg-blue-700 text-white'>
                <div className='my-2'><Image src="/logo.png" alt="logo" width={"50"} height={"50"} /></div>
                <div>
                    <button className='cursor-pointer p-2 rounded-md hover:bg-blue-900 ' title='Dashboard'>
                        <Home />
                    </button>
                </div>
                <div className='flex items-center justify-center'>
                    <Avatar>
                        <AvatarImage className={"rounded-full p-2 my-2"} src="https://github.com/shadcn.png" alt="@shadcn" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                </div>
            </div>

            <div className='flex flex-col w-[96%]'>

            </div>
        </div>
    )
}

export default AppSideBar
