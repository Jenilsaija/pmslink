import React from 'react';
import { Search, Bell, User } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getCookie } from '@/lib/cookies.lib';
import { useRouter } from 'next/navigation';

const Header = ({ title, subtitle, user, notificationCount = 0 }) => {
  const router = useRouter();

  const handleLogout = () => {
    document.cookie = "userToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    router.push('/login');
  };

  return (
    <header className="flex items-center justify-between py-4 px-6 border-b border-border">
      <div>
        <h1 className="text-xl font-semibold">{title}</h1>
        {subtitle && <p className="text-sm text-gray-500">{subtitle}</p>}
      </div>
      
      <div className="flex items-center gap-4">
        <div className="relative md:block hidden">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
          <input
            type="text"
            placeholder="Search..."
            className="pl-10 pr-4 py-2 rounded-lg border border-gray-200 text-sm w-64"
          />
        </div>
        
        {/* Notifications */}
        <DropdownMenu>
          <DropdownMenuTrigger className="relative">
            <Bell size={20} className="text-gray-600" />
            {notificationCount > 0 && (
              <Badge variant="destructive" className="absolute -top-2 -right-2 px-1.5 min-w-[18px] h-[18px] text-[10px] flex items-center justify-center">
                {notificationCount}
              </Badge>
            )}
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-80">
            <DropdownMenuLabel>Notifications</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <div className="max-h-96 overflow-y-auto py-2">
              <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                <p className="text-sm font-medium">New project assigned</p>
                <p className="text-xs text-gray-500">You've been assigned to Project Alpha</p>
                <p className="text-xs text-gray-400 mt-1">2 hours ago</p>
              </div>
              <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                <p className="text-sm font-medium">Task due soon</p>
                <p className="text-xs text-gray-500">Task "Create UI Designs" is due tomorrow</p>
                <p className="text-xs text-gray-400 mt-1">5 hours ago</p>
              </div>
            </div>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* User Menu */}
        <DropdownMenu>
          <DropdownMenuTrigger className="outline-none">
            <Avatar className="h-8 w-8">
              <AvatarImage 
                src={user?.avatar || `https://api.dicebear.com/7.x/avataaars/svg?seed=${user?.name}`}
                alt={user?.name || "User"} 
              />
              <AvatarFallback>
                {user?.name?.charAt(0) || "U"}
              </AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => router.push('/portal/app/profile')}>
              <User className="mr-2 h-4 w-4" />
              <span>Profile</span>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={handleLogout}>
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default Header;
