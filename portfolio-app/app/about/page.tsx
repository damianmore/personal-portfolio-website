import Image from "next/image";

export default function AboutPage() {
  // Manually defined skills with placeholder URLs
  const skills = [
    // Languages
    { name: "Python", url: "/images/python.png" },
    { name: "Java", url: "/images/java.png" },
    { name: "TypeScript", url: "/images/typescript.png" },
    { name: "C++", url: "/images/c-.png" },
    { name: "MATLAB", url: "/images/Matlab_Logo.png" },
    { name: "Lua", url: "/images/Lua-Logo.svg.png" },
    { name: "SQL", url: "/images/Postgresql_elephant.svg.png" },

    // Frameworks & Technologies
    { name: "Spring Boot", url: "/images/Spring_Boot.svg.png" },
    { name: "Django", url: "/images/django-icon.svg" },
    { name: "AWS", url: "/images/aws-color.png" },
    { name: "Docker", url: "/images/docker.png" },
    { name: "Git", url: "/images/Git_icon.svg.png" },
    { name: "GitHub Actions", url: "/images/github-actions-logo-png_seeklogo-428028.png" },
    { name: "Terraform", url: "/images/terraform-icon.svg" },
    { name: "Ansible", url: "/images/ansible-svgrepo-com.svg" },
    { name: "Supabase", url: "/images/supabase.webp" },

    // Tools & Methodologies
    { name: "Jira", url: "/images/atlassian-jira-icon.webp" },
    { name: "Figma", url: "/images/Figma-logo.svg.png" },
    { name: "Confluence", url: "/images/Atlassian_Confluence_2017_logo_(cropped).svg.png" },
  ];

  return (
    <div className="flex flex-col p-6 gap-8">
      {/* Main content split evenly */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* Left: Title + paragraphs */}
        <div className="md:w-1/2 flex flex-col items-start gap-4 text-lg text-gray-200">
          <h1 className="text-4xl font-bold mb-4">About Me</h1>

          <p className="mb-4">
            Hi! I'm Damian Moreno, a current 2nd year at University of California Irvine studying Computer Science. I am really interested in working with cloud infrastructure and learning how to tackle the problems of reliability and scalability for software.
          </p>

          <p className="mb-4">
            I have experience developing backend APIs with Python Django and FastAPI. I have experience developing frontend components with Typescript and React. I also am currently learning how to develop in Java Spring Boot. In the future I also want to learn Golang!
          </p>

          <p>
            My favorite thing about software is being able to create something on my own laptop and see it able to be used by people across the world. I think software is unique in that my solutions can impact someone no matter where they are. It feels like magic but it's real, and I want to learn so much more about how it all works.
          </p>
        </div>

        {/* Right: Skills grid */}
        <div className="md:w-1/2 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {skills.map((skill) => (
            <div key={skill.name} className="flex flex-col items-center text-xs">
              <Image
                src={skill.url}
                alt={skill.name}
                width={100}
                height={100}
                className="rounded"
              />
              <span className="mt-1 text-center">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
