"use client";

import { getCookie } from "@/lib/cookies.lib";
import dynamic from "next/dynamic";
import { useParams, useRouter } from "next/navigation";
import { Suspense } from "react";

export default function DynamicLoader() {
  const params = useParams();
  const router = useRouter();
  const token = getCookie("userToken");
  
  if (token == "" || token == null || token == undefined) {
    router.push("/login");
  } 
  
  const Component = dynamic(() => import(`@/module/${params?.pageslug}/index.js`), { ssr: false }) || (() => <div>Page Not Found</div>);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Component />
    </Suspense>
  );
}
