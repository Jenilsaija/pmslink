import axios from "axios";
import DynamicLoader from "./DynamicLoader";

export default async function Page() {
  return <DynamicLoader/>;
}

export async function generateStaticParams() {
  // Fetch the list of known slugs from your API or database
  const arrSlugs = await axios.get("http://localhost/api/pages.php");
  const arrSlugsData = await arrSlugs.data;

  return arrSlugsData.map((page) => {
    return { pageslug: page.slug };
  });
}