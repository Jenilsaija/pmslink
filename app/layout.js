"use client";
import { useParams, usePathname, useRouter, useSearchParams} from "next/navigation";
import "./globals.css";
import { useEffect } from "react";
import { Toaster } from "@/components/ui/sonner";


export default function RootLayout({ children }) {
  const router = useRouter();
  const path = usePathname();
  
  useEffect(()=>{
    const pageslug = path.split("/");
    
    if (pageslug[1] !== "portal" || pageslug[2] !== "app" || pageslug[3] === undefined || pageslug[3] === "") {
      router.replace("/portal/app/dashboard");
    }
  },[])

  return (
    <html lang="en">
      <body
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
