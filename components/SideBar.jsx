"use client";
import React from 'react'
import { AvatarFallback, AvatarImage } from './ui/avatar'
import { Avatar } from '@radix-ui/react-avatar'
import { BadgeCheck, Bell, ChevronsUpDown, CreditCard, Home, LayoutGrid, LogOut, Sparkles, Users, FileText, MessageSquare, Clock, Settings } from 'lucide-react'
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from './ui/dropdown-menu';
import { removeCookie } from '@/lib/cookies.lib';
import { 
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";


const SideBar = () => {
    const router = useRouter();

    const sidebarItems = [
        {
            title: "Dashboard",
            slug: "dashboard",
            icon: <Home size={20} />
        },
        {
            title: "Projects",
            slug: "projects",
            icon: <LayoutGrid size={20} />
        },
        {
            title: "Team",
            slug: "team",
            icon: <Users size={20} />
        },
        {
            title: "Files",
            slug: "files",
            icon: <FileText size={20} />
        },
        {
            title: "Messages",
            slug: "messages",
            icon: <MessageSquare size={20} />
        },
        {
            title: "History",
            slug: "history",
            icon: <Clock size={20} />
        }
    ];

    function handleLogout() {
        removeCookie("userToken");
        router.replace("/login");    
    }

    return (
        <TooltipProvider>
            <div className="h-screen w-16 bg-blue-600 flex flex-col items-center py-6 fixed left-0 top-0">
                <div className="mb-8">
                    <div className="w-10 h-10 bg-white rounded flex items-center justify-center">
                        <div className="w-6 h-6 bg-blue-600 rounded"></div>
                    </div>
                </div>
                
                <div className="flex flex-col gap-6 items-center">
                    {sidebarItems.map((item) => (
                        <Tooltip key={item.slug}>
                            <TooltipTrigger asChild>
                                <button 
                                    className="text-white p-2 rounded-md hover:bg-white/10"
                                    onClick={() => router.push(`/portal/app/${item.slug}`)}
                                >
                                    {item.icon}
                                </button>
                            </TooltipTrigger>
                            <TooltipContent side="right">
                                <p>{item.title}</p>
                            </TooltipContent>
                        </Tooltip>
                    ))}
                </div>
                
                <div className="mt-auto flex flex-col gap-6 items-center">
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <button 
                                className="text-white p-2 rounded-md hover:bg-white/10"
                                onClick={() => router.push('/portal/app/settings')}
                            >
                                <Settings size={20} />
                            </button>
                        </TooltipTrigger>
                        <TooltipContent side="right">
                            <p>Settings</p>
                        </TooltipContent>
                    </Tooltip>
                    
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <button 
                                className="text-white p-2 rounded-md hover:bg-white/10"
                                onClick={handleLogout}
                            >
                                <LogOut size={20} />
                            </button>
                        </TooltipTrigger>
                        <TooltipContent side="right">
                            <p>Logout</p>
                        </TooltipContent>
                    </Tooltip>
                </div>
            </div>
        </TooltipProvider>
    )
}

export default SideBar
