"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#181A1B] text-white px-6 md:px-20">
      <div className="flex flex-col md:flex-row items-center gap-10 max-w-6xl w-full mt-16">
        {/* Left: Text */}
        <div className="flex-1 flex flex-col gap-6">
          <h1 className="text-5xl md:text-6xl font-bold text-white">
            Hi, I'm Damian Moreno
          </h1>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            I’m a 2nd-year Computer Science student at UC Irvine. I like getting frustrated with errors and solving problems with code.
          </p>

          {/* Call-to-action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <Link href="/about" className="group px-6 py-3 rounded-lg bg-[#2A2E2F] hover:bg-[#3A3E3F] transition-all text-white font-medium flex items-center gap-2">
              About Me
              <FontAwesomeIcon icon={faArrowRight} />
            </Link>
            <Link href="/projects" className="group px-6 py-3 rounded-lg bg-[#2A2E2F] hover:bg-[#3A3E3F] transition-all text-white font-medium flex items-center gap-2">
              Projects
              <FontAwesomeIcon icon={faArrowRight} />
            </Link>
            <Link href="/contact" className="group px-6 py-3 rounded-lg bg-[#2A2E2F] hover:bg-[#3A3E3F] transition-all text-white font-medium flex items-center gap-2">
              Contact
              <FontAwesomeIcon icon={faArrowRight} />
            </Link>
          </div>
        </div>

        <div className="flex-1 flex justify-center">
          <Image
            src="/pfp.webp"
            alt="Damian Moreno"
            width={300}
            height={300}
            className="rounded-full border-4 border-[#2A2E2F] shadow-lg"
          />
        </div>
      </div>

      <div className="mt-16 flex flex-col items-center gap-6 text-gray-300 max-w-4xl text-center">
        <p>💻 Backend and Infrastructure Development</p>
        <p>☁️ Cloud Technology Enthusiast</p>
        <p>🚀 Open to learning and building with anyone</p>
      </div>
    </div>
  );
}
