import dynamic from "next/dynamic";
import { useSearchParams } from "next/navigation";

export default function Index(){
  const searchParams = useSearchParams();
  const ref = searchParams?.get('ref');
  let refData = {};
  
  if (ref !== undefined && ref !== null) {
    refData = JSON.parse(atob(ref));
  }


  const props ={
    demo:"1111111111"
  }

  let filename = "";

  switch (refData?.doAction) {
    case "ADD":
      
      break;
  
    default:
      filename = "List";
      break;
  }

  const Component =dynamic(() => import(`./${filename}.js`), {
    ssr: false,
  });

  return (
    <>
      <Component {...props}/>
    </>
  )
}