import * as React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

import Link from "next/link";

const { useRef, useState, useEffect, useMemo, memo } = React;

export interface ILogoProps {}

export const Logo: React.FC<ILogoProps> = (props) => {
  const {} = props;
  const t = useTranslations();

  return (
    <Link href="/" className="flex mr-32">
      <div className="hidden items-center space-x-2 md:flex">
        <Image
          src="/logo.jpeg"
          className="rounded-md"
          width={30}
          height={30}
          alt="Picture of the author"
        />
        <span className="text-lg">{t("site.title")}</span>
      </div>
    </Link>
  );
};
export default memo(Logo);
