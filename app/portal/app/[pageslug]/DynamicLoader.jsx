"use client";

import Layout from "@/components/Layout";
import { getCookie } from "@/lib/cookies.lib";
import dynamic from "next/dynamic";
import { useParams, useRouter } from "next/navigation";
import { Suspense } from "react";

export default function DynamicLoader() {
  const params = useParams();
  const router = useRouter();
  const token = getCookie("userToken");

  if (token == "" || token == null || token == undefined) {
    router.replace("/login");
  }

  const Component = dynamic(() => import(`@/module/${params?.pageslug}/index.js`), { ssr: false });

  return (
    <>
        <Suspense fallback={<div>Loading...</div>}>
          <Layout Component={<Component />}/>
        </Suspense>
    </>
  );
}
