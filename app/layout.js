"use client";
import { usePathname, useRouter } from "next/navigation";
import "./globals.css";
import { useEffect } from "react";


export default function RootLayout({ children }) {
  const router = useRouter();
  const path = usePathname();
  
  useEffect(()=>{
    const pageslug = path.split("/");
    if (pageslug[0] !== "" || pageslug[1] !== "") {
      router.replace("/portal/app/");
    } else if (pageslug[0] !== "portal" || pageslug[1] !== "app") {
      router.replace("/portal/app/");
    }
  },[])

  return (
    <html lang="en">
      <body
      >
        {children}
      </body>
    </html>
  );
}
