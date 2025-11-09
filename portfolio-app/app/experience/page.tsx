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
      title: "Infrastructure Intern",
      company: "Cyber@UCI",
      dates: "October 2025 – Present",
      location: "Irvine, CA",
      description: [
        "Learning and beginning to support virtual machine infrastructure automation for Cybersecurity competition training using Ansible and Terraform.",
      ],
      logo: "cyber_uci_logo_color.svg", 
    },
    {
      title: "Software Engineering Intern",
      company: "NASA Jet Propulsion Laboratory (JPL)",
      dates: "July 2025 – September 2025",
      location: "La Canada Flintridge, CA",
      description: [
        "Developed a MATLAB tool for NASA’s DSN Loading Studies team, integrating the spacecraft schedule API to predict spacecraft-antenna usage from historical data and replace a previously manual process.",
        "Created algorithms in MATLAB to calculate spacecraft-antenna usage from 100K+ lines of scheduling data in seconds.",
        "Developed a Python spacecraft documentation automation tool for DSN Mission Interface Managers that queries data from internal SQL databases and updates Atlassian Confluence pages via RESTful APIs.",
        "Reduced Confluence page creation time from ∼1 hour to under 5 minutes and reduced manual entry by 70%.",
        "Automated unit tests and deployed Docker images with a GitHub Actions CI/CD pipeline to AWS Lambda via AWS ECR, enabling weekly automated updates of spacecraft documentation.",
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
