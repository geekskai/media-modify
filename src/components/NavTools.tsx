"use client";

import * as React from "react";

import { Dropdown, Layout } from "antd";
import { useTranslations } from "next-intl";
import type { MenuProps, MenuTheme } from "antd";

import Icons from "./Icons";

const { Header, Footer, Sider, Content } = Layout;

export interface NavItem {
  name: React.ReactNode;
  href?: string;
  items?: MenuProps["items"];
}

export default function NavTools() {
  const t = useTranslations();

  const ToolImages: MenuProps["items"] = [
    {
      key: "image",
      label: (
        <div className="flex items-center">
          <Icons.FileImage className="mr-2 h-4 w-4 text-orange-500" />
          <span>{t("tools.image")}</span>
        </div>
      ),
    },
    {
      key: "audio",
      label: (
        <div className="flex items-center">
          <Icons.FileAudio className="mr-2 h-4 w-4 text-blue-500" />
          <span>{t("tools.audio")}</span>
        </div>
      ),
    },
    {
      key: "video",
      label: (
        <div className="flex items-center">
          <Icons.FileVideo className="mr-2 h-4 w-4 text-blue-500" />
          <span>{t("tools.video")}</span>
        </div>
      ),
    },
    {
      key: "file",
      label: (
        <div className="flex items-center">
          <Icons.File className="mr-2 h-4 w-4 text-blue-500" />
          <span>{t("tools.file")}</span>
        </div>
      ),
    },
  ];

  const NavItems: NavItem[] = [
    {
      name: t("tools.image"),
      href: "/",
      items: ToolImages,
    },
    {
      name: t("tools.audio"),
      href: "/",
      items: ToolImages,
    },
    {
      name: t("tools.video"),
      href: "/",
      items: ToolImages,
    },
    {
      name: t("tools.file"),
      href: "/",
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
