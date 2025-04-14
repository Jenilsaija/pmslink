import { EyeIcon, User2Icon } from 'lucide-react'
import React from 'react'

const index = () => {
    const profiletab =[
        {title:"Account Information",desc:"Chnage your Account information", icon:<User2Icon/>},
        {title:"Password", desc:"Chnage your Password",icon:<EyeIcon/>},
    ]


  return (
    <div className='container flex flex-row h-screen p-14 gap-2'>
      <div className='w-[30%] h-full'>
        {profiletab.map((item,index) => {
        return (<div className='flex items-center gap-2 border-b-2 p-3 rounded-2xl justify-start hover:bg-blue-600 hover:text-white cursor-pointer'key={index}>
            {item?.icon}
            <div className='ml-2'>
                <h1 className='text-lg font-bold'>{item?.title}</h1>
                <p>{item?.desc}</p>
            </div>
        </div>)})}
      </div>
      
      <div className='w-[70%] bg-base-100 rounded-md'>

      </div>
    </div>
  )
}

export default index
