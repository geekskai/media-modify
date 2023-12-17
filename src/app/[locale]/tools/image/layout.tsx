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
  const { locale, convert } = params;
  const t = useTranslations();
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const [formatType, setFormatType] = useState<string>("png");

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
      href: "/image/ai-image-generator",
      title: "AI Image Generator",
      description: "AI Image Generator",
      bgClass: "bg-green-200",
      textClass: "text-green-400",
      label: t("tools.image_tools"),
    },
    {
      href: "/image/compress",
      title: "Compress Image Size",
      description: "Compress your image",
      bgClass: "bg-yellow-200",
      textClass: "text-yellow-400",
      label: t("tools.image_tools"),
    },
    {
      href: "/image/png-to-jpg",
      title: "AI PNG to JPG",
      description: "Convert a PNG Image to JPG Online",
      bgClass: "bg-violet-200",
      textClass: "text-violet-400",
      label: t("tools.image_tools"),
    },
    {
      href: "/image/eps-to-png",
      title: "AI Video Generator",
      description: "AI Video Generator",
      bgClass: "bg-blue-200",
      textClass: "text-blue-400",
      label: t("tools.image_tools"),
    },
    {
      href: "/image/font-to-png",
      title: "AI PDF Generator",
      description: "AI PDF Generator",
      bgClass: "bg-fuchsia-200",
      textClass: "text-fuchsia-400",
      label: t("tools.image_tools"),
    },
    {
      href: "/image/gif-to-apng",
      title: "AI GIF to APNG",
      description: "AI GIF to APNG",
      bgClass: "bg-rose-200",
      textClass: "text-rose-400",
      label: t("tools.image_tools"),
    },
    {
      href: "/image/gif-to-png",
      title: "AI GIF to PNG",
      description: "AI GIF to PNG",
      bgClass: "bg-cyan-200",
      textClass: "text-cyan-400",
      label: t("tools.image_tools"),
    },
    {
      href: "/image/heic-to-png",
      title: "AI HEIC to PNG",
      description: "HEIC to PNG",
      bgClass: "bg-indigo-200",
      textClass: "text-indigo-400",
      label: t("tools.image_tools"),
    },
    {
      href: "/image/jpg-to-png",
      title: "AI JPG to PNG",
      description: "JPG to PNG",
      bgClass: "bg-sky-200",
      textClass: "text-sky-400",
      label: t("tools.image_tools"),
    },
    {
      href: "/image/jpg-to-svg",
      title: "AI JPG to SVG",
      description: "JPG to SVG",
      bgClass: "bg-purple-200",
      textClass: "text-purple-400",
      label: t("tools.image_tools"),
    },
    {
      href: "/image/png-to-eps",
      title: "AI PNG to EPS",
      description: "PNG to EPS",
      bgClass: "bg-emerald-200",
      textClass: "text-emerald-400",
      label: t("tools.image_tools"),
    },
    {
      href: "/image/png-to-gif",
      title: "AI PNG to GIF",
      description: "PNG to GIF",
      bgClass: "bg-orange-200",
      textClass: "text-orange-400",
      label: t("tools.image_tools"),
    },
    {
      href: "/image/png-to-svg",
      title: "AI PNG to SVG",
      description: "PNG to SVG",
      bgClass: "bg-teal-200",
      textClass: "text-teal-400",
      label: t("tools.image_tools"),
    },
    {
      href: "/image/png-to-tiff",
      title: "AI PNG to TIFF",
      description: "PNG to TIFF",
      bgClass: "bg-cyan-200",
      textClass: "text-cyan-400",
      label: t("tools.image_tools"),
    },
    {
      href: "/image/png-to-webp",
      title: "AI PNG to WEBP",
      description: "PNG to WEBP",
      bgClass: "bg-pink-200",
      textClass: "text-pink-400",
      label: t("tools.image_tools"),
    },
    {
      href: "/image/psd-to-png",
      title: "AI PSD to PNG",
      description: "PSD to PNG",
      bgClass: "bg-purple-200",
      textClass: "text-purple-400",
      label: t("tools.image_tools"),
    },
    {
      href: "/image/svg-to-png",
      title: "AI SVG to PNG",
      description: "SVG to PNG",
      bgClass: "bg-red-200",
      textClass: "text-red-400",
      label: t("tools.image_tools"),
    },
    {
      href: "/image/text-to-image",
      title: "AI Text to PNG",
      description: "Text to image",
      bgClass: "bg-lime-200",
      textClass: "text-lime-400",
      label: t("tools.image_tools"),
    },
    {
      href: "/image/tiff-to-png",
      title: "GIF to PNG",
      description: "GIF to PNG",
      bgClass: "bg-neutral-200",
      textClass: "text-neutral-400",
      label: t("tools.image_tools"),
    },
    {
      href: "/image/webp-to-png",
      title: "WEBP to PNG",
      description: "WEBP to PNG",
      bgClass: "bg-amber-200",
      textClass: "text-amber-400",
      label: t("tools.image_tools"),
    },
  ];
  return (
    <Layout className="h-full items-center px-8">
      <Content className="container max-w-7xl">
        <Row className="flex-center flex-col gap-y-2">
          <h1 className="text-4xl my-6 font-bold leading-snug">Image Tools</h1>
          <p className="text-1xl text-[#707375]">Free Online Image Tools</p>
        </Row>
        <Layout className="max-w-7xl w-full items-center">
          <Content className="p-8 w-full">
            <div className="grid grid-cols-4 gap-4 font-mono text-white text-sm text-center font-bold leading-6 rounded-xl">
              {toolsList.map((props) => {
                const { href, label, textClass, bgClass, title, description } =
                  props;
                return (
                  <Link
                    key={href}
                    href={href}
                    locale={locale}
                    className="col-span-1 h-34 p-4 bg-white rounded-xl"
                  >
                    <div className="flex-start gap-3">
                      <div
                        className={`mb-2 rounded-lg h-10 w-10 ${bgClass} flex-center`}
                      >
                        <Icons.Image className="h-6 w-6" />
                      </div>
                      <div className="flex-start flex-col">
                        <h4 className="text-black">{title}</h4>
                        <span className={`text-xs ${textClass}`}>{label}</span>
                      </div>
                    </div>
                    <p className="text-[#707375] text-left">{description}</p>
                  </Link>
                );
              })}
            </div>
          </Content>
        </Layout>
      </Content>
    </Layout>
  );
}
