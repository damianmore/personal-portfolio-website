"use client";

import Image from "next/image";
import React from "react";

// Reusable component for company logo
const CompanyLogo = ({ src, alt }: { src: string; alt: string }) => (
  <div className="w-16 h-16 flex-shrink-0">
    <Image
      src={src}
      alt={alt}
      width={64}
      height={64}
      className="object-contain rounded-md"
    />
  </div>
);

export default function WorkExperiencePage() {
  const experiences = [
    {
      title: "Full-stack Developer",
      company: "Zotbins@UCI (Student Club)",
      dates: "September 2026 – Present",
      location: "Remote",
      description: [
        "Migrated a legacy database service to Node.js, making maintenance easier with no changes to dependent services.",
        "Built a CI pipeline to run HTTP and Postgres integration tests to verify service behavior stayed the same as before."
      ],
      logo: "zotbins.svg", 
    },
    {
      title: "Software Engineering Intern",
      company: "OpenSesame",
      dates: "June 2026 – August 2026",
      location: "Remote",
      description: [
        "Built a feature for 26 clients in Node.js to customize course templates, removing a blocker to using our platform.",
        "Restored course video playback for 300+ affected users by fixing iOS version detection in TypeScript that incorrectly blocked supported devices or displayed misleading error messages.",
        "Resolved AWS translation job failures on large courses by replacing AWS job checks that marked in-progress jobs as failed if they took too long with asynchronous polling that correctly waited for completion."
      ],
      logo: "opensesame.png", 
    },
    {
      title: "Software Engineering Intern",
      company: "LA-Tech.org (Nonprofit)",
      dates: "February 2026 – May 2026",
      location: "Remote",
      description: [
        "Developed an edge-case detector with a team of 6, flagging crashes and sudden swerves in 39,000+ public Waymo data frames using acceleration/jerk thresholds over rolling frame windows to help improve future model training.",
        "Engineered a Python data pipeline to transform 1TB+ of raw TFRecord file data into organized Parquet files, reducing file reloading time from ∼75 minutes to under 1 minute for each data re-analysis.",
        "Cut initial TFRecord file read time by 82% by loading file chunks in parallel and reading only relevant metrics."
      ],
      logo: "la-tech.png", 
    },
    {
      title: "Software Project Intern",
      company: "GoFlyy",
      dates: "January 2026 – February 2026",
      location: "Remote",
      description: [
        "Developed endpoints with the Gemini API to analyze clothing condition and route clothing return decisions.",
        "Built pipeline infrastructure using AWS S3 and AWS DynamoDB to store images and review results."
      ],
      logo: "goflyylogo.png", 
    },
    {
      title: "Infrastructure Intern",
      company: "Cyber@UCI",
      dates: "October 2025 – June 2026",
      location: "Irvine, CA",
      description: [
        "Implemented Golang endpoints to automate creation and destruction of virtual machines (VMs) from our Proxmox VM templates, reducing club workshop setup time from ∼40 minutes to under 15 minutes.",
        "Integrated Proxmox ticket-based authentication into our Golang app, letting non-technical club members have permission to manage VMs without needing to learn Proxmox and enabling reuse of our existing permission roles."
      ],
      logo: "cyber_uci_logo_color.svg", 
    },
    {
      title: "Software Engineering Intern",
      company: "NASA Jet Propulsion Laboratory (JPL)",
      dates: "July 2025 – September 2025",
      location: "La Canada Flintridge, CA",
      description: [
        " Developed a MATLAB tool that processes 100k+ lines of historical schedule data in seconds to predict how many hours each deep-space spacecraft or antenna will be actively communicating.",
        "Developed AWS Lambda functions that pull data from internal SQL databases and automate Confluence documentation page updates every week.",
        "Reduced Confluence page creation and update time from ∼30 minutes to under 5.",
        "Automated unit tests and deployed Docker images to AWS Lmabda with a GitHub Actions CI/CD pipeline.",
      ],
      logo: "/jpl.png",
    },
    {
      title: "Robotics Club Member and Mentor",
      company: "Sherman Oaks CES Robotics Club",
      dates: "October 2014 – June 2024",
      location: "Tarzana, CA",
      description: [
        "Programmed competition algorithms for autonomous navigation using sensors, boosting VEX robot performance.",
        "Mentored new middle school members by teaching VEX robotics programming fundamentals and structured testing and debugging practices to prepare them for future Robotics competitions.",
      ],
      logo: "/scr.png", 
    },
  ];

  return (
    <div className="flex flex-col p-6 gap-6">
      {/* Page title */}
      <h1 className="text-4xl font-bold text-white mb-6">Work Experience</h1>

      {/* Vertical list */}
      <div className="flex flex-col gap-6">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-start gap-4 p-4 rounded-lg"
            style={{ backgroundColor: "#2A2E2F" }}
          >
            {/* Logo */}
            <CompanyLogo src={exp.logo} alt={exp.company} />

            {/* Experience details */}
            <div className="flex flex-col">
              <h2 className="text-xl font-semibold text-white">{exp.title}</h2>
              <h3 className="text-md text-gray-300">
                {exp.company} — {exp.location}
              </h3>
              <p className="text-sm text-gray-400 mb-2">{exp.dates}</p>
              {exp.description.map((line, idx) => (
                <p key={idx} className="text-gray-200 mb-1">
                  • {line}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
