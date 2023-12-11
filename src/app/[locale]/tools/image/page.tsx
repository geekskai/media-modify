"use client";
import { useTranslations } from "next-intl";
import ImgCrop from "antd-img-crop";

import type { RcFile, UploadFile, UploadProps } from "antd/es/upload/interface";

import {
  message,
  Upload,
  Form,
  Layout,
  Row,
  Select,
  Button,
  Input,
} from "antd";

// import { InboxOutlined } from '@ant-design/icons';
// import type { UploadProps } from "antd";
// import {} from "antd";
import Link from "next/link";

import Icons from "@/components/Icons";
import { useState } from "react";

const { Header, Sider, Content, Footer } = Layout;

const { Dragger } = Upload;

export default function Page({ params }) {
  console.log(`🚀 ~ file: page.tsx:12 ~ params:`, params);

  const { locale, convert } = params;
  const t = useTranslations();
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const [formatType, setFormatType] = useState<string>("png");
  console.log(`🚀 ~ file: page.tsx:37 ~ formatType:`, formatType);

  // const locale = useLocale();
  const onPreview = async (file: UploadFile) => {
    let src = file.url as string;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj as RcFile);
        reader.onload = () => resolve(reader.result as string);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow?.document.write(image.outerHTML);
  };

  const onSelectType = (type) => {
    setFormatType(type);
  };

  const onUploadChange: UploadProps["onChange"] = ({
    fileList: newFileList,
  }) => {
    setFileList(newFileList);
  };

  const beforeUpload = () => false;

  const onModalOk = () => {};
  const onModalCancel = () => {};

  const toolsList = [
    {
      href: "/tools/image",
      title: "AI Image Generator",
      description: "AI Image Generator",
      color: "green",
      label: t("tools.image_tools"),
      icon: <Icons.Image className="h-6 w-6" />,
    },
    {
      href: "/tools/audio",
      title: "AI Audio Generator",
      description: "AI Audio Generator",
      color: "indigo",
      label: t("tools.audio_tools"),
      icon: <Icons.Music4 className="h-6 w-6" />,
    },
    {
      title: "AI Video Generator",
      description: "AI Video Generator",
      href: "/tools/video",
      color: "blue",
      label: t("tools.video_tools"),
      icon: <Icons.Youtube className="h-6 w-6" />,
    },
    {
      title: "AI PDF Generator",
      description: "AI PDF Generator",
      color: "fuchsia",
      href: "/tools/pdf",
      label: t("tools.pdf_tools"),
      icon: <Icons.Webhook className="h-6 w-6" />,
    },
  ];

  return (
    <Layout className="h-full items-center px-8">
      <Content className="container max-w-7xl">
        <Row className="flex-col justify-center items-center gap-y-2">
          <h1 className="text-4xl my-6 font-bold leading-snug">Image Tools</h1>
          <p className="text-1xl ">Free Online Image Tools</p>
        </Row>
        <Layout className="max-w-7xl w-full items-center">
          <Content className="p-8 w-full">
            <div className="grid grid-cols-4 gap-4 font-mono text-white text-sm text-center font-bold leading-6 rounded-xl">
              {toolsList.map(
                ({ href, label, icon, color, title, description }) => {
                  return (
                    <Link
                      href={href}
                      locale={locale}
                      className="col-span-1 h-34 p-4 bg-gray-200 rounded-xl"
                    >
                      <div className="flex gap-3 justify-start	items-start">
                        <div
                          className={`mb-2 rounded-lg h-10 w-10 bg-${color}-200 flex justify-center	items-center`}
                        >
                          {icon}
                        </div>
                        <div className="flex flex-col justify-start	items-start">
                          <h4 className="text-black">{title}</h4>
                          <span className="text-violet-300 text-xs">
                            {label}
                          </span>
                        </div>
                      </div>

                      <p className="text-[#707375] text-left">{description}</p>
                    </Link>
                  );
                }
              )}

              {/* <Link href="/tools/audio" className="col-span-1 h-44 p-4">
                <div className="flex gap-3 justify-start	items-start">
                  <div className="rounded-lg h-10 w-10 bg-indigo-200 flex justify-center	items-center">
                    <Icons.Music4 className="h-6 w-6" />
                  </div>
                </div>
                {t("tools.audio_tools")}
              </Link>

              <Link href="/tools/video" className="col-span-1 h-44 p-4">
                <div className="flex justify-between items-center">
                  <div className="rounded-lg h-10 w-10 bg-blue-200 flex justify-center	items-center">
                    <Icons.Youtube className="h-6 w-6" />
                  </div>
                </div>
                {t("tools.video_tools")}
              </Link>
              <Link href="/tools/pdf" className="col-span-1 h-44 p-4">
                <div className="flex justify-between items-center">
                  <div className="rounded-lg h-10 w-10 bg-fuchsia-200 flex justify-center	items-center">
                    <Icons.Webhook className="h-6 w-6" />
                  </div>
                </div>
                {t("tools.pdf_tools")}
              </Link> */}
            </div>
          </Content>
        </Layout>
      </Content>
    </Layout>
  );
}
