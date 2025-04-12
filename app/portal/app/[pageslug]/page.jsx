import DynamicLoader from "./DynamicLoader";

export default async function Page() {
  return <DynamicLoader/>;
}

export async function generateStaticParams() {
  return [
    { pageslug: "Dashboard" },
    { pageslug: "projects" },
    // Add more known slugs
  ];
}