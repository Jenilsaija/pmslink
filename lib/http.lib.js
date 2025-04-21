import axios from "axios";
import { getCookie } from "./cookies.lib";

export async function makeRequest(url, arrReqParams,bypastoken=false) {
    try {
        const token = getCookie('userToken');
        let arrReqheaders ={};
        if (!bypastoken && token?.length>0) {
            arrReqheaders = {
                headers: {
                    'Content-Type': 'application/json',
                    "Authorization": token
                }
            }
        }
        const arrResponse = await axios.post(url, arrReqParams, arrReqheaders);
        return arrResponse;
    } catch (error) {
        console.error(error);
        console.log(error, "error");
        return undefined;
    }
}