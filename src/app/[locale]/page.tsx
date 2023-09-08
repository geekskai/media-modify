"use client";
import { useTranslations } from "next-intl";

import { Layout, Tag } from "antd";
import Icons from "@/components/Icons";

const { Header, Sider, Content, Footer } = Layout;

export default function Page() {
  const t = useTranslations();

  return (
    <Layout className="h-full items-center">
      <Layout className="max-w-7xl w-full items-center">
        <Content className="mx-16 my-24 w-full">
          <div className="grid grid-cols-5 gap-4 font-mono text-white text-sm text-center font-bold leading-6 rounded-xl">
            <div className="w-56 h-44 p-4 rounded-xl shadow-lg bg-gradient-to-br from-green-300 to-green-500">
              <div className="flex justify-between items-center">
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
              </div>
              {t("tools.image_tools")}
            </div>
            <div className="w-56 h-44 p-4 rounded-xl shadow-lg bg-gradient-to-br from-indigo-300 to-indigo-500">
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
              {t("tools.audio_tools")}
            </div>
            <div className="w-56 h-44 p-4 rounded-xl shadow-lg bg-gradient-to-br from-blue-300 to-blue-500">
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
              {t("tools.video_tools")}
            </div>
            <div className="w-56 h-44 p-4 rounded-xl shadow-lg bg-gradient-to-br from-fuchsia-300 to-fuchsia-500">
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
              {t("tools.pdf_tools")}
            </div>
            <div className="w-56 h-44 p-4 rounded-xl shadow-lg bg-gradient-to-br from-orange-300 to-orange-500">
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
              {t("tools.file_tools")}
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
