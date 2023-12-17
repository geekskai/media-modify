import Layout from "./layout";
import type { Metadata } from "next";

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({
  params,
  searchParams,
}: Props): Promise<Metadata> {
  // read route params
  const id = params.id;

  return {
    title: `Create Amazing Audio with AI: Unleash Your Imagination! - Media Modify`,
    description: `Get creative with our AI audio tool! Generate attention-grabbing visuals effortlessly, perfect for any project.`,
  };
}

export default function Page(props) {
  console.log(`🚀 ~ file: audio page.tsx:convert  ~ props:`, props);
  return <Layout {...props} />;
}
