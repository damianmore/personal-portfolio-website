"use client";

import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import React from "react";

interface Project {
  title: string;
  technologies: string;
  image: string;
  github: string;
  live: string;
}

export default function ProjectsPage() {
  const projects: Project[] = [
    {
      title: "AnteaterEvents",
      technologies: "Django, React, Supabase, Render, Docker, Gemini API",
      image: "/ae_desktop.png",
      github: "https://github.com/damianmore/anteater-events",
      live: "https://anteater-events.onrender.com/",
    },
    {
      title: "SyllabusWizard",
      technologies: "React, Python, AWS Bedrock, S3, Lambda, API Gateway, Textract",
      image: "/aiuc.png",
      github: "",
      live: "https://devpost.com/software/syllabuswizard",
    },
    {
      title: "TFT Discord Bot",
      technologies: "Python, Discord API",
      image: "/tft.webp",
      github: "https://github.com/damianmore/tft-discord-bot",
      live: "",
    },
    {
      title: "Bob vs the FBI",
      technologies: "Godot, GDScript",
      image: "/bob.png",
      github: "https://github.com/KingRocco21/Beyond-the-Grave",
      live: "https://kingrocco21.itch.io/bob-vs-the-fbi",
    },

  ];

  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold text-white mb-6">Projects</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative group rounded-lg overflow-hidden cursor-pointer"
          >
            {/* Background image */}
            <Image
              src={project.image}
              alt={project.title}
              width={400}
              height={400} 
              className="object-cover w-full h-80 md:h-96 transition-transform group-hover:scale-105 group-hover:blur-sm"
            />

            {/* Overlay icons */}
            <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
            {project.github && (
                <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300"
                >
                <FontAwesomeIcon icon={faGithub} size="2x" />
                </a>
            )}
            {project.live && (
                <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300"
                >
                <FontAwesomeIcon icon={faLink} size="2x" />
                </a>
            )}
            </div>

            {/* Title + tech text at bottom */}
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-5 text-white p-2 text-sm">
              <h2 className="font-semibold">{project.title}</h2>
              <p className="text-gray-200">{project.technologies}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
