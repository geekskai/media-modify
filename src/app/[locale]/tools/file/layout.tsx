"use client";
import { useTranslations } from "next-intl";

import type { UploadFile, UploadProps } from "antd/es/upload/interface";

import { Upload, Layout } from "antd";

import { useState } from "react";

const { Header, Sider, Content, Footer } = Layout;

const { Dragger } = Upload;

export default function Page({ params }) {
  console.log(`🚀 ~ file: page.tsx:12 ~ params:`, params);

  const { locale, convert } = params;
  const t = useTranslations();
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const [formatType, setFormatType] = useState<string>("png");

  // const locale = useLocale();
  const onPreview = async (file: UploadFile) => {
    // let src = file.url as string;
    // if (!src) {
    //   src = await new Promise((resolve) => {
    //     const reader = new FileReader();
    //     reader.readAsDataURL(file.originFileObj as RcFile);
    //     reader.onload = () => resolve(reader.result as string);
    //   });
    // }
    // const image = new Image();
    // image.src = src;
    // const imgWindow = window.open(src);
    // imgWindow?.document.write(image.outerHTML);
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

  return (
    <Layout className="h-full items-center px-8">
      <h1 className="m-[30px]">{convert}</h1>
      <Content className="container max-w-7xl ">
        <div className="flex-center h-full bg-[url('/image/todo.jpeg')]"></div>
      </Content>
    </Layout>
  );
}
