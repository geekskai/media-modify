import createMiddleware from "next-intl/middleware";
import { defaultLocale, languages } from "./locale";

export default createMiddleware({
  // A list of all locales that are supported
  locales: Object.keys(languages),

  // If this locale is matched, pathnames work without a prefix (e.g. `/about`)
  defaultLocale,
});

export const config = {
  // Skip all paths that should not be internationalized. This example skips the
  // folders "api", "_next" and all files with an extension (e.g. favicon.ico)
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
