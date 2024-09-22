"use client";
import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import { twMerge } from 'tailwind-merge'


import { Layout, Tag } from "antd";
import Icons from "@/components/Icons";

const { Header, Sider, Content, Footer } = Layout;

export default function Page({ params }) {
  const t = useTranslations();

  const locale = useLocale();

  const toolsList = [
    {
      href: "/tools/image",
      color: "green",
      icon: <Icons.Image className="h-7 w-7" />,
      title: "Image Tools",
      description: "Solve Your Image Problems",
    },
    {
      href: "/tools/audio",
      icon: <Icons.Image className="h-7 w-7" />,
      title: "Image Tools",
      description: "Solve Your Image Problems",
    },
  ];

  const [videoLink, setVideoLink] = useState(
    "https://youtu.be/CsxNTc4vNEg?si=PHuF5O2kZo5_YcoH"
  );

  const [finalLink, setFinalLink] = useState("");

  const [showDownload, setShowDownload] = useState(false);

  const handleDownload = async () => {
    const res = await axios.get(`/api/downloader?url=${videoLink}`);
    // const data = await res.json();
    console.log(`🚀 ~ data:`, res.data);
    setFinalLink(res.data.format.url);
    setShowDownload(true);
  };

  return (
    <Layout className="h-full items-center">
      <Layout className="max-w-7xl w-full items-center">
        <Content className="p-8 w-full">
          <div className="grid grid-cols-5 gap-4 font-mono text-white text-sm text-center font-bold leading-6 rounded-xl">
            <Link
              href="/tools/image"
              locale={locale}
              className="w-56 h-44 p-4 rounded-xl shadow-lg bg-gradient-to-br from-green-300 to-green-500"
            >
              <article className="flex justify-between items-center">
                <div className="rounded-full h-12 w-12 bg-green-200 flex justify-center	items-center">
                  <Icons.Image className="h-7 w-7" />
                </div>
                <Tag
                  color="green"
                  bordered={false}
                  className="bg-green-100 rounded-xl"
                >
                  56+ tools
                </Tag>
              </article>
              <span className="flex-start">{t("tools.image_tools")}</span>
            </Link>
            <Link
              href="/tools/audio"
              className="w-56 h-44 p-4 rounded-xl shadow-lg bg-gradient-to-br from-indigo-300 to-indigo-500"
            >
              <div className="flex justify-between items-center">
                <div className="rounded-full h-12 w-12 bg-indigo-200 flex justify-center	items-center">
                  <Icons.Music4 className="h-7 w-7" />
                </div>
                <Tag
                  color="indigo"
                  bordered={false}
                  className="bg-indigo-100 rounded-xl"
                >
                  56+ tools
                </Tag>
              </div>
              <span className="flex-start">{t("tools.audio_tools")}</span>
            </Link>
            <Link
              href="/tools/video"
              className="w-56 h-44 p-4 rounded-xl shadow-lg bg-gradient-to-br from-blue-300 to-blue-500"
            >
              <div className="flex justify-between items-center">
                <div className="rounded-full h-12 w-12 bg-blue-200 flex justify-center	items-center">
                  <Icons.Youtube className="h-7 w-7" />
                </div>
                <Tag
                  color="blue"
                  bordered={false}
                  className="bg-blue-100 rounded-xl"
                >
                  56+ tools
                </Tag>
              </div>
              <span className="flex-start">{t("tools.video_tools")}</span>
            </Link>
            <Link
              href="/tools/pdf"
              className="w-56 h-44 p-4 rounded-xl shadow-lg bg-gradient-to-br from-fuchsia-300 to-fuchsia-500"
            >
              <div className="flex justify-between items-center">
                <div className="rounded-full h-12 w-12 bg-fuchsia-200 flex justify-center	items-center">
                  <Icons.Webhook className="h-7 w-7" />
                </div>
                <Tag
                  color="fuchsia"
                  bordered={false}
                  className="bg-fuchsia-100 rounded-xl"
                >
                  56+ tools
                </Tag>
              </div>
              <span className="flex-start">{t("tools.pdf_tools")}</span>
            </Link>
            <Link
              href="/tools/file"
              className="w-56 h-44 p-4 rounded-xl shadow-lg bg-gradient-to-br from-orange-300 to-orange-500"
            >
              <div className="flex justify-between items-center">
                <div className="rounded-full h-12 w-12 bg-orange-200 flex justify-center	items-center">
                  <Icons.FileText className="h-7 w-7" />
                </div>
                <Tag
                  color="orange"
                  bordered={false}
                  className="bg-orange-100 rounded-xl"
                >
                  56+ tools
                </Tag>
              </div>

              <span className="flex-start">{t("tools.file_tools")}</span>
            </Link>
          </div>

           <div className="flex  py-5 bg-indigo-600 rounded-md flex-col items-center gap-3">
            <h3>youtube downloader</h3>
            <div className=" mt-4  space-x-2 w-full flex gap-2 justify-center">
              <input
                type="text"
                className="w-1/2 p-2 rounded-md outline-none"
                placeholder="Enter youtube video url"
                value={videoLink}
                onChange={(e) => setVideoLink(e.target.value)}
              />
              <button
                onClick={handleDownload}
                className=" border rounded py-1 px-5"
              >
                {" "}
                Convert
              </button>
            </div>
          </div>
        </Content>
      </Layout>
      <Footer className="max-w-7xl m-auto">
        Media Modify ©2023 Created by Media Modify
      </Footer>
    </Layout>
  );
}
