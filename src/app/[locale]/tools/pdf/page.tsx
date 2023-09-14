"use client";
import { useTranslations } from "next-intl";

import { Layout, Tag } from "antd";
import Icons from "@/components/Icons";

const { Header, Sider, Content, Footer } = Layout;

export default function Page() {
  const t = useTranslations();

  return <Layout className="h-full items-center">PDF tools</Layout>;
}
