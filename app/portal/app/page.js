"use client";
import { getCookie } from '@/lib/cookies.lib';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'

function page() {
  const router = useRouter();
  
  useEffect(()=>{
    const token = getCookie("userToken");
    
    if (token == "" || token == null || token == undefined) {
      router.replace("/login");
    } else {
      router.replace("/portal/app/Dashboard");
    }
  },[])

  return <></>
}

export default page
