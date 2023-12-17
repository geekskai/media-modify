"use client";

import * as React from "react";
import Link from "next/link";

import { Dropdown, Layout } from "antd";

import { useTranslations, useLocale } from "next-intl";
import type { MenuProps, MenuTheme } from "antd";

import Icons from "./Icons";

const { Header, Footer, Sider, Content } = Layout;

export interface NavItem {
  name: React.ReactNode;
  items?: MenuProps["items"];
}

export default function NavTools() {
  const t = useTranslations();

  const locale = useLocale();
  console.log(`🚀 ~ file: NavTools.tsx:24 ~ locale:`, locale);

  const ToolImages: MenuProps["items"] = [
    {
      key: "image",
      label: (
        <Link
          href={`/${locale}/tools/image`}
          locale={locale}
          className="flex-center"
        >
          <Icons.FileImage className="mr-2 h-4 w-4 text-orange-500" />
          <span>{t("tools.image")}</span>
        </Link>
      ),
    },
    {
      key: "audio",
      label: (
        <Link
          href={`/${locale}/tools/audio`}
          locale={locale}
          className="flex-center"
        >
          <Icons.FileAudio className="mr-2 h-4 w-4 text-blue-500" />
          <span>{t("tools.audio")}</span>
        </Link>
      ),
    },
    {
      key: "video",
      label: (
        <Link
          href={`/${locale}/tools/video`}
          locale={locale}
          className="flex-center"
        >
          <Icons.FileVideo className="mr-2 h-4 w-4 text-rose-500" />
          <span>{t("tools.video")}</span>
        </Link>
      ),
    },
    {
      key: "file",
      label: (
        <Link
          href={`/${locale}/tools/file`}
          locale={locale}
          className="flex items-center"
        >
          <Icons.FileText className="mr-2 h-4 w-4 text-green-500" />
          <span>{t("tools.file")}</span>
        </Link>
      ),
    },
  ];

  const NavItems: NavItem[] = [
    {
      name: t("tools.image"),
      items: ToolImages,
    },
    {
      name: t("tools.audio"),
      items: ToolImages,
    },
    {
      name: t("tools.video"),
      items: ToolImages,
    },
    {
      name: t("tools.file"),
      items: ToolImages,
    },
  ];

  return (
    <nav className="flex flex-1 gap-2 md:gap-5">
      {NavItems.map(({ name, items }, index) => (
        <Dropdown key={index} menu={{ items }}>
          <div className="btn">
            <b className="text-lg	text-lime-900	">{name}</b>
            <Icons.ChevronDown className="mr-2 h-4 w-4" />
          </div>
        </Dropdown>
      ))}
    </nav>
  );
}
