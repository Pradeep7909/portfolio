import "./globals.scss";
import { Poppins } from "next/font/google";
import { ReactNode } from "react";
import { Metadata } from "next";
import dynamic from "next/dynamic";
import { navMenus } from "@/data/navMenus";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  subsets: ["latin", "latin-ext"],
  display: "swap",
  preload: true,
  fallback: [
    "system-ui",
    "arial",
    "BlinkMacSystemFont",
    "Segoe UI",
    "Roboto",
    "Oxygen",
    "Ubuntu",
    "Fira Sans",
    "Droid Sans",
  ],
});

export const metadata: Metadata = {
  title: "Pradeep Rathore",
  description:
      "Pradeep Rathore is a skilled Software Engineer and Full Stack Developer from India, specializing in mobile and web development with expertise in modern technologies like React Native, Swift, Next.js, Node.js, and more.",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: [
    {
      url: "/favicon-96x96.png",
      rel: "icon",
      sizes: "64x64",
      type: "image/x-icon",
    },
  ],
  keywords: [
    "pradeep rathore",
    "pradeep",
    "pradeep0410",
    "pradeep-04-10",
    "rathore pradeep",
    "software engineer",
    "full stack developer",
    "mobile developer",
    "react native developer",
    "swift developer",
    "indian developer",
    "pradeep github",
  ],
};

const GoogleAnalytics = dynamic(
    () => import("@/components/common/GoogleAnalytics"),
    { ssr: false }
);
const WebVitals = dynamic(() => import("@/components/common/WebVitals"), {
  ssr: false,
});
const FloatingNavbar = dynamic(
    () => import("@/components/navbar/FloatingNavbar")
);
const ScrollToTop = dynamic(() => import("@/components/common/ScrollToTop"));

const isDebug = process.env.NODE_ENV === "development";

const RootLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
      <html lang="en" className={poppins.className}>
      {isDebug ? null : <GoogleAnalytics />}

      <body className={isDebug ? "debug-screens" : ""}>
      {isDebug ? <WebVitals /> : null}
      <FloatingNavbar className="app_nav" navItems={navMenus} />
      <main>{children}</main>
      <ScrollToTop />
      </body>
      </html>
  );
};

export default RootLayout;
