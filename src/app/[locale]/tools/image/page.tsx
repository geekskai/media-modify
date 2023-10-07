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

  return (
    <Layout className="h-full items-center px-8">
      <Content className="container max-w-7xl">
        <Row className="flex-col justify-center items-center gap-y-2">
          <h1 className="text-4xl my-6 font-bold leading-snug">
            Image Convert Online
          </h1>
          <Form
            layout="inline"
            name="wrap"
            labelCol={{ flex: "110px" }}
            labelAlign="left"
            wrapperCol={{ flex: 1 }}
            colon={false}
          >
            <Form.Item
              label="Target format:"
              name="format"
              initialValue="JPG"
              rules={[{ required: true }]}
            >
              <Select
                placeholder="Select a type"
                optionFilterProp="children"
                // defaultValue="JPG"
                onChange={onSelectType}
                // onSearch={onSearch}
                options={[
                  {
                    value: "png",
                    label: "PNG",
                  },
                  {
                    value: "jpg",
                    label: "JPG",
                  },
                  {
                    value: "jpeg",
                    label: "JPEG",
                  },
                  {
                    value: "svg",
                    label: "SVG",
                  },
                  {
                    value: "gif",
                    label: "GIF",
                  },
                  {
                    value: "webp",
                    label: "WEBP",
                  },
                ]}
              />
            </Form.Item>
            <Form.Item label="Image quality:" name="quality">
              <Input placeholder="1...100" />
            </Form.Item>
            {/* <Form.Item label="Resize image:" name="resize">
              <Select
                placeholder="Input Resize image"
                optionFilterProp="children"
                onChange={onResizeImage}
                options={[
                  {
                    value: "0",
                    label: "Keep original image size",
                  },
                  {
                    value: "1",
                    label: "Change width and height",
                  },
                  {
                    value: "2",
                    label: "Change width only",
                  },
                  {
                    value: "3",
                    label: "Change height only",
                  },
                  {
                    value: "4",
                    label: "Change height only",
                  },
                ]}
              />
            </Form.Item> */}
          </Form>
        </Row>

        <Row className="w-full h-1/3 m-auto justify-center items-center">
          <ImgCrop
            rotationSlider
            showReset
            aspectSlider
            showGrid
            modalOk="确认完成"
            modalCancel="取消"
            modalWidth="40%"
            onModalCancel={onModalCancel}
            onModalOk={onModalOk}
          >
            <Upload
              // action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
              listType="picture-card"
              fileList={fileList}
              onChange={onUploadChange}
              onPreview={onPreview}
              beforeUpload={beforeUpload}
            >
              {fileList.length < 1 && "+ Upload"}
            </Upload>
          </ImgCrop>

          <Button
            className="flex justify-center items-center m-auto"
            type="primary"
            icon={<Icons.RefreshCw className="animate-spin h-5 w-5" />}
            size="large"
          >
            Convert Now
          </Button>
        </Row>
      </Content>
    </Layout>
  );
}
