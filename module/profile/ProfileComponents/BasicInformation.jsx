import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import React, { useEffect, useState } from 'react'
import useSWR from 'swr'
import { getUserData, UpdateUserData } from './commonFunc'

const BasicInformation = () => {
    const [userData,setUserData] =useState({
        name: '',
        email: '',
        role: 'Project Manager',
    })
    
    const {data:user,error:err} = useSWR(["getUSerdata"],()=>getUserData(),{keepPreviousData:false});

    useEffect(()=>{
        if (user!==undefined) {
            setUserData({...userData,name:user?.name,email:user?.email});   
        }
    },[user])

    return (
        <div>
            <div className='w-full h-full bg-white border-2  rounded-md p-5'>
                <div className='p-5'>
                    <h1 className='text-2xl font-bold'>Account Information</h1>
                    <p className='text-sm'>Chnage your Account information</p>
                </div>
                <div className='flex flex-col gap-2 p-5'>
                    <label htmlFor="name">Name</label>
                    <input type="text" id='name' placeholder='Enter your name' className='border-2 border-blue-900 rounded-md p-2' onChange={(e)=>{setUserData({...userData,name:e.target.value})}} value={userData?.name}/>
                    <label htmlFor="email">Email</label>
                    <input type="email" id='email' placeholder='Enter your email' className='border-2 border-blue-900 rounded-md p-2' onChange={(e)=>{setUserData({...userData,email:e.target.value})}} value={userData?.email}/>
                    <label>Role</label>
                    <Badge variant="outline" className="bg-violet-800 text-white h-7">{userData?.role}</Badge>
                </div>
                <div className='flex items-center justify-start py-3 px-2 gap-1'>
                    <Button className='ml-2 w-fit h-10 cursor-pointer' onClick={()=>{setUserData({name:'',email:'',role:'Project Manager'})}}>Reset</Button>
                    <Button className='ml-2 w-fit h-10 cursor-pointer' onClick={()=>{UpdateUserData(userData)}}>Save</Button>
                </div>
            </div>
        </div>
    )
}

export default BasicInformation
