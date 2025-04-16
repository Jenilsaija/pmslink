'use client';
import { LoginForm } from "@/components/login-form"
import { setCookie } from "@/lib/cookies.lib";
import { makeRequest } from "@/lib/http.lib";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

export default function LoginPage() {
  const router = useRouter();
  const [loginData,setLoginData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    validateData();
    if (error === null) {
      const arrReqParams = {
        action: "LOGIN",
        email: loginData.email,
        password: loginData.password,
      };
      const res = await makeRequest(process.env.PMSAPIURL+"auth.php",arrReqParams,true);
      if (res.status===200 && res.data && res.data.status) {
        if (res.data.status) {
          toast.success(res.data.message);
          setCookie("userToken",res.data.token,2);
          router.push("/portal/app/");
        }else{
          toast.error(res.data.message);
        }
      }
    }
  }

  function validateData () {
    //validate emil and password.
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(loginData.email)) {
      setError("Invalid email address");
    }else{
      setError(null);
    }
  }

  return (
    (<div
      className="bg-background flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
      <div className="w-full max-w-sm">
        <LoginForm loginData={loginData} handleChange={handleChange} handleSubmit={handleSubmit} error={error}/>
      </div>
    </div>)
  );
}
