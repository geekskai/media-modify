"use client";
import { useTranslations } from "next-intl";

import Link from "next/link";

import { Layout, Tag } from "antd";
import Icons from "@/components/Icons";

const { Header, Sider, Content, Footer } = Layout;

export default function Page() {
  const t = useTranslations();

  return (
    <Layout className="h-full items-center">
      image tools
      <Link href="/tools/image/jpg-to-png">jpg-to-png</Link>
    </Layout>
  );
}
