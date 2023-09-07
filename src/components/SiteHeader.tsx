import Link from "next/link";

import Icons from "./Icons";
import LocaleSwitcher from "./LocaleSwitcher";
import NavTools from "./NavTools";
import Logo from "./Logo";
import ThemeToggle from "./ThemeToggle";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-b-slate-200 bg-white dark:border-b-slate-700 dark:bg-slate-900">
      <div className="flex max-w-7xl m-auto py-5 h-17 items-center space-x-4 sm:justify-between sm:space-x-0">
        <Logo />
        <NavTools />
        <div className="flex items-center justify-end gap-1">
          <LocaleSwitcher />
          <ThemeToggle />
          <Link
            href="https://github.com/geekskai/media-modify"
            target="_blank"
            rel="noreferrer"
            className="btn"
          >
            <Icons.Github className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </header>
  );
}
