import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import React from 'react'

const BasicInformation = () => {
    return (
        <div>
            <div className='w-full h-full bg-white border-2 border-blue-900 rounded-md'>
                <div className='p-5'>
                    <h1 className='text-2xl font-bold'>Account Information</h1>
                    <p className='text-sm'>Chnage your Account information</p>
                </div>
                <div className='flex flex-col gap-2 p-5'>
                    <label htmlFor="name">Name</label>
                    <input type="text" id='name' placeholder='Enter your name' className='border-2 border-blue-900 rounded-md p-2' />
                    <label htmlFor="email">Email</label>
                    <input type="email" id='email' placeholder='Enter your email' className='border-2 border-blue-900 rounded-md p-2' />
                    <label>Role</label>
                    <Badge variant="outline" className="bg-violet-800 text-white h-7">Project Manager</Badge>
                </div>
                <div className='flex items-center justify-end p-5'>
                    <Button className='ml-2 w-fit h-10 cursor-pointer'>Save</Button>
                </div>
            </div>
        </div>
    )
}

export default BasicInformation
