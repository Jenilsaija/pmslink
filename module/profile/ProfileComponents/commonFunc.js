import { makeRequest } from "@/lib/http.lib";

export async function getUserData() {
    const userdata = await makeRequest("/api/application.php",{action:"USER.READ"});
    
    return userdata?.data?.data;
}

export async function UpdateUserData(userdata) {
    const arrReqParams = {
        "action":"USER.UPDATE",
        "update":{
            "name":userdata?.name,
            "email":userdata?.email
        }
    }
    const objresult = await makeRequest("/api/application.php",arrReqParams);
    if (objresult.data.status) {
        alert("User updated successfully");
    }
}

export async function handleChangePassword(params){
    const {
        passdata,
        setError,
        error
    }=params;

    if(passdata?.oldpassword==="") {
        setError({...error,oldpassword:"Old password should not be empty."})
        return null;
    }else{
        setError({...error,oldpassword:""})
    }

    if (passdata?.newpassword !== passdata?.confirmpassword) {
        setError({...error,confirmpassword:"Confirm password dosen't match new password"})
        return null;
    }else{
        setError({...error,confirmpassword:""});
    }


    const arrReqParams = {
        "action":"USER.UPDATE",
        "update":{
            "oldpassword":passdata?.oldpassword,
            "newpassword":passdata?.newpassword
        }
    }
    const objresult = await makeRequest("/api/application.php",arrReqParams);
    if (objresult.data.status) {
        alert("User updated successfully");
    }
}
