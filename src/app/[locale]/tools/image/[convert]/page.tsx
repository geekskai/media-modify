"use client";
import { useTranslations, useLocale } from "next-intl";

import { Layout, Tag } from "antd";
import Link from "next/link";

import Icons from "@/components/Icons";

const { Header, Sider, Content, Footer } = Layout;

export default function Page({}) {
  const t = useTranslations();

  const locale = useLocale();
  console.log(`🚀 ~ file: convert page.tsx:13 ~ locale:`, locale);

  return <Layout className="h-full items-center">convert tools</Layout>;
}
