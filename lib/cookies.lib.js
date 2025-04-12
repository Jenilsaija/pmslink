import Cookies from "js-cookie";

export function setCookie(cname, cvalue, exdays) {
    Cookies.set(cname, btoa(cvalue), { expires: exdays ,path: '/'})
}

export function getCookie(cname) {
   let cookiesdata = Cookies.get(cname);
   
   if (cookiesdata?.length>0) {
       cookiesdata = atob(cookiesdata);
    }
   return cookiesdata;
}

export function removeCookie(cname) {
    Cookies.remove(cname, { path: '/' });
} 