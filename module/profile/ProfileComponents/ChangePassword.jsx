import { Button } from '@/components/ui/button'
import React, { useState } from 'react'
import { handleChangePassword } from './commonFunc';

const ChangePassword = () => {

    const [passdata,setPassData]= useState({
        oldpassword:"",
        newpassword:"",
        confirmpassword:""
    });
    const [error,setError]=useState({});

    function handleOnchange(event) {
        setPassData({...passdata,[event.target.id]:event.target.value});
    }

    return (
        <div>
            <div className='w-full h-full bg-white border-2 rounded-md p-5'>
                <div className='p-5'>
                    <h1 className='text-2xl font-bold'>Password</h1>
                    <p className='text-sm'>Chnage your Password</p>
                </div>
                <div className='flex flex-col gap-2 p-5'>
                    <label htmlFor="oldpassword">Old Password</label>
                    <input type="password" id='oldpassword' placeholder='Enter your old password' className='border-2 border-blue-900 rounded-md p-2' onChange={handleOnchange} value={passdata?.oldpassword}/>
                    {error?.oldpassword && <span className='text-red-600 font-semibold'>{error?.oldpassword}</span>}
                    <label htmlFor="newpassword">New Password</label>
                    <input type="password" id='newpassword' placeholder='Enter your new password' className='border-2 border-blue-900 rounded-md p-2' onChange={handleOnchange} value={passdata?.newpassword}/>
                    {error?.newpassword && <span className='text-red-600 font-semibold'>{error?.newpassword}</span>}
                    <label htmlFor="confirmpassword">Confirm Password</label>
                    <input type="password" id='confirmpassword' placeholder='Confirm your new password' className='border-2 border-blue-900 rounded-md p-2' onChange={handleOnchange} value={passdata?.confirmpassword}/>
                    {error?.confirmpassword && <span className='text-red-600 font-semibold'>{error?.confirmpassword}</span>}
                </div>
                <div className='flex items-center justify-start p-5'>
                    <Button className='ml-2 w-fit h-10 cursor-pointer' onClick={()=>handleChangePassword({passdata,setError,error})}>Change Password</Button>
                </div>
            </div>
        </div>
    )
}

export default ChangePassword
