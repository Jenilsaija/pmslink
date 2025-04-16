"use client";
import { SignUpForm } from "@/components/Register-form";
import { makeRequest } from "@/lib/http.lib";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

export default function LoginPage() {
  const router =useRouter();
  const [singUpFormData, setSignupFormData] = useState({
    name:"",
    email: "",
    password: "",
    cnfpassword: "",
  });

  const [error, setErrors] = useState({});
  const validateFormData = () => {
    const errors = {};

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!singUpFormData.email) {
      errors.email = "Email is required";
    } else if (!emailRegex.test(singUpFormData.email)) {
      errors.email = "Please enter a valid email";
    } else {
      errors.email = "";
    }

    if (!singUpFormData.password.trim()) {
      errors.password = "Password is required";
    } else if (singUpFormData.password.length <= 8) {
      errors.password = "Password should be at least 8 characters long";
    } else {
      errors.password = "";
    }

    if (!singUpFormData.cnfpassword.trim()) {
      errors.cnfpassword = "Confirm Password is required";
    } else if (singUpFormData.password !== singUpFormData.cnfpassword) {
      errors.cnfpassword = "Password and Confirm Password should be same";
    } else {
      errors.cnfpassword = "";
    }

    setErrors(errors);
  };


  const handleSubmit = async(e) => {
    e.preventDefault();
    validateFormData();

    if (error.email === '' && error.password === '' && error.cnfpassword == '') {
      const arrPrams = {
        "action": "SIGNUP",
        "name": singUpFormData.name,
        "email": singUpFormData.email,
        "password": singUpFormData.password
      }
      const objResponse = await makeRequest(process.env.PMSAPIURL+"auth.php",arrPrams);
      
      if (objResponse.status === 200 && objResponse.data.status) {
        if (objResponse.data.status) {
          toast(objResponse.data.message);
          router.push("/login");
        }else{
          toast(objResponse.data.message, {variant: "destructive"});
        }
      }
    }
  };

  const onChange = (e) => {
    setSignupFormData({ ...singUpFormData, [e.target.name]: e.target.value });
  }

  return (
    (<div
      className="bg-background flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
      <div className="w-full max-w-sm">
        <SignUpForm singUpFormData={singUpFormData} onChange={onChange} handleSubmit={handleSubmit} error={error} />
      </div>
    </div>)
  );
}
