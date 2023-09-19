"use client";
import { useTranslations } from "next-intl";
import ImgCrop from "antd-img-crop";

import type { RcFile, UploadFile, UploadProps } from "antd/es/upload/interface";

import { message, Upload, Form, Layout, Row, Select, Button } from "antd";

// import { InboxOutlined } from '@ant-design/icons';
// import type { UploadProps } from "antd";
// import {} from "antd";
import Link from "next/link";

import Icons from "@/components/Icons";
import { useState } from "react";

const { Header, Sider, Content, Footer } = Layout;

const { Dragger } = Upload;

const props: UploadProps = {
  name: "file",
  // multiple: true,
  accept: "image/*",
  maxCount: 1,
  // action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
  onChange(info) {
    const { status } = info.file;
    if (status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (status === "done") {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
  onDrop(e) {
    console.log("Dropped files", e.dataTransfer.files);
  },
};

const onChange = (value: string) => {
  console.log(`selected ${value}`);
};

const normFile = (e: any) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};

const onSearch = (value: string) => {
  console.log("search:", value);
};

export default function Page({ params }) {
  console.log(`🚀 ~ file: page.tsx:12 ~ params:`, params);

  const { locale, convert } = params;
  const t = useTranslations();

  // const locale = useLocale();
  console.log(`🚀 ~ file: convert page.tsx:13 ~ locale:`, locale);
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

  const [fileList, setFileList] = useState<UploadFile[]>([
    // {
    //   uid: "-1",
    //   name: "image.png",
    //   status: "done",
    //   url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    // },
  ]);

  const onChange: UploadProps["onChange"] = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };

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
            // style={{ maxWidth: "100%" }}
          >
            <Form.Item
              label="Target format:"
              name="format"
              rules={[{ required: true }]}
            >
              <Select
                placeholder="Select a person"
                optionFilterProp="children"
                onChange={onChange}
                onSearch={onSearch}
                options={[
                  {
                    value: "png",
                    label: "png",
                  },
                  {
                    value: "jpg",
                    label: "jpg",
                  },
                  {
                    value: "jpeg",
                    label: "jpeg",
                  },
                  {
                    value: "svg",
                    label: "svg",
                  },
                  {
                    value: "gif",
                    label: "gif",
                  },
                  {
                    value: "webp",
                    label: "webp",
                  },
                ]}
              />
            </Form.Item>
            <Form.Item
              label="Image quality:"
              name="quality"
              // rules={[{ required: true }]}
            >
              <Select
                placeholder="Select a type"
                // optionFilterProp="children"
                allowClear
                onChange={onChange}
                // onSearch={onSearch}
                options={[
                  {
                    value: "jack",
                    label: "Jack",
                  },
                  {
                    value: "lucy",
                    label: "Lucy",
                  },
                  {
                    value: "tom",
                    label: "Tom",
                  },
                ]}
              />
            </Form.Item>
            <Form.Item
              label="Resize image:"
              name="resize"
              // rules={[{ required: true }]}
            >
              <Select
                placeholder="Select a person"
                optionFilterProp="children"
                onChange={onChange}
                onSearch={onSearch}
                options={[
                  {
                    value: "jack",
                    label: "Jack",
                  },
                  {
                    value: "lucy",
                    label: "Lucy",
                  },
                  {
                    value: "tom",
                    label: "Tom",
                  },
                ]}
              />
            </Form.Item>
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
              action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
              listType="picture-card"
              fileList={fileList}
              onChange={onChange}
              onPreview={onPreview}
            >
              {fileList.length < 1 && "+ Upload"}
            </Upload>
          </ImgCrop>

          {/* <Button
            className="flex justify-center items-center m-auto"
            type="primary"
            icon={<Icons.RefreshCw className="animate-spin h-5 w-5" />}
            size="large"
          >
            Convert
          </Button> */}
        </Row>
      </Content>
    </Layout>
  );
}
