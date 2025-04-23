import axios from "axios";
import DynamicLoader from "./DynamicLoader";

export default async function page() {
  return <DynamicLoader/>;
}

export async function generateStaticParams() {
  // Fetch the list of known slugs from your API or database
  const arrSlugs = await axios.get(process.env.PMSAPIURL+"/pages.php");
  const arrSlugsData = arrSlugs?.data;

  return arrSlugsData.map((page) => {
    return { pageslug: page?.slug,screenName:page?.title,description:page?.description };
  });
}