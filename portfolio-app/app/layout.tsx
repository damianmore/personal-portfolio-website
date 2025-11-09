"use client"; // required for React components using state/hover

import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUser,
  faEnvelope,
  faSuitcase,
  faFolderOpen,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "./globals.scss";
import Image from "next/image";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {

  const SidebarIcon = ({
    icon,
    label,
    href,
  }: {
    icon: any;
    label: string;
    href: string;
  }) => (
    <Link
      href={href}
      className="relative flex items-center justify-center w-8 h-8 my-1 group"
    >
      <FontAwesomeIcon
        icon={icon}
        size="2x"
        className="text-gray-300 hover:text-white transition-colors"
      />
      {/* Tooltip */}
      <span className="absolute left-10 w-max opacity-0 group-hover:opacity-100 transition-opacity bg-gray-800 text-white text-xs px-2 py-1 rounded z-50 whitespace-nowrap">
        {label}
      </span>
    </Link>
  );

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex min-h-screen`}
        style={{ backgroundColor: "#1F2223" }} 
      >
        {/* Sidebar */}
        <aside
          className="fixed left-0 top-0 h-screen p-2 flex flex-col justify-between items-center"
          style={{ backgroundColor: "#2A2E2F", width: "5rem" }} // w-20 = 5rem
        >
          <div className="mb-2">
            <Link href="/" className="flex flex-col items-center">
              <Image
                src="/petr.png" 
                alt="Logo"
                width={40}
                height={40}
                className="rounded-full"
              />
              <h1 className="text-xs font-bold text-center text-gray-300 mt-1">
                Damian
              </h1>
            </Link>
          </div>

          {/* Middle icons */}
          <nav className="flex flex-col items-center gap-2">
            <SidebarIcon icon={faHome} label="Home" href="/" />
            <SidebarIcon icon={faUser} label="About Me" href="/about" />
            <SidebarIcon icon={faSuitcase} label="Work" href="/experience" />
            <SidebarIcon icon={faFolderOpen} label="Projects" href="/projects" />
            <SidebarIcon icon={faEnvelope} label="Contact" href="/contact" />
          </nav>

          {/* Bottom icons */}
          <div className="flex flex-col items-center gap-2">
            <SidebarIcon
              icon={faLinkedin}
              label="LinkedIn"
              href="https://www.linkedin.com/in/damian-moreno0126/"
            />
            <SidebarIcon
              icon={faGithub}
              label="GitHub"
              href="https://github.com/damianmore"
            />
          </div>
        </aside>

        {/* Main content */}
        <main
          className="flex-1 ml-20 p-4 overflow-y-auto"
          style={{ backgroundColor: "#181A1B", color: "#FFFFFF" }}
        >
          {children}
        </main>
      </body>
    </html>
  );
}
