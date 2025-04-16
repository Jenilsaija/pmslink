import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { EyeIcon, InfoIcon, User2Icon } from 'lucide-react'
import React, { useState } from 'react'
import BasicInformation from './ProfileComponents/BasicInformation'
import ChangePassword from './ProfileComponents/ChangePassword'
import AboutApp from './ProfileComponents/AboutApp'

const index = () => {

  const [activeTab,setAcitiveTab] = useState(1);
  const profiletab = [
    { id:1,title: "Account Information", desc: "Chnage your Account information", icon: <User2Icon /> },
    { id:2,title: "Password", desc: "Chnage your Password", icon: <EyeIcon /> },
    { id:3,title: "About", desc: "About this application", icon: <InfoIcon /> },
  ]

  function getComponent() {
    switch (activeTab) {
      case 1:
        return <BasicInformation />;
      case 2:
        return <ChangePassword />;
      case 3:
        return <AboutApp/>;
      default:
        return null;
    }
  }

  return (
    <div className='container flex flex-row h-screen p-14 gap-10 '>
      <div className='w-[30%] h-full border-blue-900 border-2 rounded-md'>
        <div className='p-5'>
          {profiletab.map((item, index) => {
            return (<div className={`flex items-center gap-2 p-3 my-1 rounded-2xl justify-start ${item?.id===activeTab ? "bg-blue-600 text-white" : "hover:bg-blue-600 hover:text-white cursor-pointer"}`} key={index} onClick={() => setAcitiveTab(item?.id)}>
              {item?.icon}
              <div className='ml-2'>
                <h1 className='text-lg font-bold'>{item?.title}</h1>
                <p>{item?.desc}</p>
              </div>
            </div>)
          })}
        </div>
      </div>
      <div className='w-[70%] rounded-md'>
        {getComponent()}
      </div>
    </div>
  )
}

export default index
