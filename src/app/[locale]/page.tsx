"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

import Image from "next/image";
import FormComponent from "@/components/FormComponent";
import type { MenuProps, MenuTheme } from "antd";

import {
  Button,
  Col,
  Divider,
  Layout,
  Menu,
  Row,
  theme as antdTheme,
} from "antd";

const { Header, Sider, Content, Footer } = Layout;

import Icons from "@/components/Icons";
import { useTheme } from "next-themes";

export default function Page() {
  const t = useTranslations("site");

  return (
    <Layout className="h-full">
      <Layout className="max-w-7xl m-auto">
        <Content className="container mx-16 my-24">Content</Content>
      </Layout>
      <Footer className="max-w-7xl m-auto">
        Media Modify ©2023 Created by Media Modify
      </Footer>
    </Layout>
  );
}
