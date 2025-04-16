import { Button } from '@/components/ui/button'
import React from 'react'

const ChangePassword = () => {
    return (
        <div>
            <div className='w-full h-full bg-white border-2 border-blue-900 rounded-md'>
                <div className='p-5'>
                    <h1 className='text-2xl font-bold'>Password</h1>
                    <p className='text-sm'>Chnage your Password</p>
                </div>
                <div className='flex flex-col gap-2 p-5'>
                    <label htmlFor="oldpassword">Old Password</label>
                    <input type="password" id='oldpassword' placeholder='Enter your old password' className='border-2 border-blue-900 rounded-md p-2' />
                    <label htmlFor="newpassword">New Password</label>
                    <input type="password" id='newpassword' placeholder='Enter your new password' className='border-2 border-blue-900 rounded-md p-2' />
                    <label htmlFor="confirmpassword">Confirm Password</label>
                    <input type="password" id='confirmpassword' placeholder='Confirm your new password' className='border-2 border-blue-900 rounded-md p-2' />
                </div>
                <div className='flex items-center justify-end p-5'>
                    <Button className='ml-2 w-fit h-10 cursor-pointer'>Save</Button>
                </div>
            </div>
        </div>
    )
}

export default ChangePassword
