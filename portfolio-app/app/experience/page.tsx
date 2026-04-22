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
      title: "Software Project Intern",
      company: "GoFlyy",
      dates: "February 2026 – April 2026",
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
      dates: "October 2025 – Present",
      location: "Irvine, CA",
      description: [
        "Implemented JWT-based authentication using Authentik to enforce role-based access control, ensuring different club teams can only edit virtual machines for their respective teams.",
        "Built Golang endpoints with the Proxmox VE API to automate creation and destruction of multiple VMs from shared templates, cutting club workshop setup time from ∼1 hour to under 15 minutes."
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
        "Automated unit tests and deployed Docker images to AWS with a GitHub Actions CI/CD pipeline.",
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
