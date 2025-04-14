"use client";
import React from 'react'
import { AvatarFallback, AvatarImage } from './ui/avatar'
import { Avatar } from '@radix-ui/react-avatar'
import { BadgeCheck, Bell, ChevronsUpDown, CreditCard, Home, LayoutGrid, LogOut, Sparkles } from 'lucide-react'
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from './ui/dropdown-menu';
import { removeCookie } from '@/lib/cookies.lib';


const SideBar = () => {
    const router = useRouter();

    const arrSideBarItems = [
        {
            title: "Dashboard",
            slug: "dashboard",
            icon: <Home />
        },
        {
            title: "Projects",
            slug: "projects",
            icon: <LayoutGrid />
        }
    ];

    function handleLogout() {
        removeCookie("userToken");
        router.replace("/login");    
    }

    return (
        <>
            <div className='flex flex-col items-center justify-between w-[4%] h-screen bg-blue-700 text-white'>
                <div className='my-2'><Image src="/logo.png" alt="logo" width={"50"} height={"50"} /></div>
                <div>
                    {
                        arrSideBarItems.map((item) => {
                            return (
                                <div key={item?.slug}>
                                    <button className='cursor-pointer p-2 rounded-md hover:bg-blue-900 ' title={item?.title} onClick={() => { router.replace(`/portal/app/${item?.slug}`) }}>
                                        {item?.icon}
                                    </button>
                                </div>
                            )
                        })
                    }
                </div>
                <div className='flex items-center justify-center my-2'>
                    <DropdownMenu className="w-full">
                        <DropdownMenuTrigger>
                            <Avatar className="h-full w-full rounded-lg py-2">
                                {/* <AvatarImage src={user.avatar} alt={user.name} /> */}
                                <AvatarFallback className="rounded-lg p-2 bg-blue-900">CN</AvatarFallback>
                            </Avatar>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent
                            className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
                            side={"right"}
                            align="end"
                            sideOffset={4}
                        >
                            <DropdownMenuLabel className="p-0 font-normal">
                                <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                                    <Avatar className="h-8 w-8 rounded-lg">
                                        {/* <AvatarImage src={user.avatar} alt={user.name} /> */}
                                        <AvatarFallback className="rounded-lg bg-blue-900 p-2 text-white">CN</AvatarFallback>
                                    </Avatar>
                                    <div className="grid flex-1 text-left text-sm leading-tight">
                                        <span className="truncate font-semibold">{"adasd"}</span>
                                        <span className="truncate text-xs">{"dsfsdf"}</span>
                                    </div>
                                </div>
                            </DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuGroup>
                                <DropdownMenuItem className={"cursor-pointer"} onClick={() => { router.replace("./profile") }}>
                                    <BadgeCheck />
                                    Account
                                </DropdownMenuItem>
                                <DropdownMenuItem className={"cursor-pointer"}>
                                    <Bell />
                                    Notifications
                                </DropdownMenuItem>
                            </DropdownMenuGroup>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className={"cursor-pointer"} onClick={handleLogout}>
                                <LogOut />
                                Log out
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
        </>
    )
}

export default SideBar
