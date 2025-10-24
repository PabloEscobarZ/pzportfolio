import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import IconCloudDemo from "@/components/globe";
import { Code2, Paintbrush, Database, Layout, Cpu, Cloud } from "lucide-react";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaDocker,
  FaGitAlt,
  FaLinux,
  FaFigma,
  FaAws,
  FaAmazon,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiPostgresql,
  SiMongodb,
  SiGraphql,
  SiJest,
  SiWebpack,
  SiRedux,
  SiFirebase,
  SiVercel,
  SiVite,
  SiPhp,
  SiMysql,
  SiAdobephotoshop,
  SiJavascript,
  SiRaspberrypi,
  SiOllama,
  SiGodotengine,
  SiUnity,
} from "react-icons/si";
import { TbBrandVscode } from "react-icons/tb";
import { BsFileEarmarkCode, BsGrid1X2 } from "react-icons/bs";
import { MdAnimation } from "react-icons/md";
import { FcWorkflow } from "react-icons/fc";
import { useTranslation } from "react-i18next";

const SkillCard = ({ icon: Icon, title, skills, color }) => (
  <Card id="skills" className="group relative overflow-hidden bg-blue-950/70 dark:bg-blue-950/20 border-gray-700 hover:scale-[1.02] transition-all duration-300 hover:shadow-xl hover:shadow-purple-400/20">
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[rgba(144, 144, 252, 0.1)] to-transparent group-hover:via-[rgba(100,100,255,0.2)] animate-shimmer"></div>
    <CardContent className="p-6 relative z-10">
      <div className="flex items-center gap-4 mb-6">
        <div
          className={`p-3 rounded-xl bg-gray-800/50 ${color} group-hover:scale-110 transition-transform duration-300`}
        >
          <Icon className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
          {title}
        </h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <Badge
            key={index}
            variant="outline"
            className="group/badge relative bg-gray-800/50 hover:bg-gray-700/80 text-gray-100 border-gray-600 flex items-center gap-2 py-2 px-3 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20"
          >
            <span className="transform group-hover/badge:scale-110 transition-transform duration-300">
              {skill.icon}
            </span>
            <span className="font-medium">{skill.name}</span>
          </Badge>
        ))}
      </div>
    </CardContent>
  </Card>
);

const SkillsSection = () => {
  
  const { t } = useTranslation();
  const skillCategories = [
    {
      icon: Code2,
      title: t("skills.subtitle0"),
      color: "text-blue-400",
      skills: [
        { name: "JavaScript", 
          icon: <SiJavascript className="w-4 h-4 text-[#F7DF1E]" /> 
        },
        {
          name: "TypeScript",
          icon: <SiTypescript className="w-4 h-4 text-[#3178C6]" />,
        },
        {
          name: "HTML5",
          icon: <BsFileEarmarkCode className="w-4 h-4 text-[#E34F26]" />,
        },
        {
          name: "CSS3",
          icon: <BsFileEarmarkCode className="w-4 h-4 text-[#1572B6]" />,
        },
        {
          name: "Tailwind CSS",
          icon: <SiTailwindcss className="w-4 h-4 text-[#38B2AC]" />,
        },
        { name: "React", icon: <FaReact className="w-4 h-4 text-[#61DAFB]" /> },
      ],
    },
    {
      icon: Database,
      title: t("skills.subtitle1"),
      color: "text-green-400",
      skills: [
        {
          name: "PHP",
          icon: <SiPhp className="w-4 h-4 text-white" />,
        },
        {
          name: "Node.js",
          icon: <FaNodeJs className="w-4 h-4 text-[#339933]" />,
        },
        {
          name: "Python",
          icon: <FaPython className="w-4 h-4 text-[#3776AB]" />,
        },
        {
          name: "MySQL",
          icon: <SiMysql className="w-4 h-4 text-[#336791]" />,
        },
        {
          name: "MongoDB",
          icon: <SiMongodb className="w-4 h-4 text-[#47A248]" />,
        },
        {
          name: "REST APIs",
          icon: <BsGrid1X2 className="w-4 h-4 text-[#FF6C37]" />,
        },
      ],
    },
    {
      icon: Layout,
      title: t("skills.subtitle4"),
      color: "text-purple-400",
      skills: [
        {
          name: "Graphic Design",
          icon: <SiAdobephotoshop className="w-4 h-4 text-[#FF4081]" />,
        },
        {
          name: "Responsive Design",
          icon: <Layout className="w-4 h-4 text-[#38B2AC]" />,
        },
        {
          name: "UI Animation",
          icon: <MdAnimation className="w-4 h-4 text-[#00C853]" />,
        },
        {
          name: "Prototyping",
          icon: <MdAnimation className="w-4 h-4 text-[#F59E0B]" />,
        },
      ],
    },
    {
      icon: Cloud,
      title: t("skills.subtitle2"),
      color: "text-orange-400",
      skills: [
        {
          name: "Docker",
          icon: <FaDocker className="w-4 h-4 text-[#2496ED]" />},
        { name: "CI/CD", icon: <FcWorkflow className="w-4 h-4" /> },
        { name: "Git", icon: <FaGitAlt className="w-4 h-4 text-[#F05032]" /> },
        { name: "Linux", icon: <FaLinux className="w-4 h-4 text-[#FCC624]" /> },
      ],
    },
    {
      icon: Cpu,
      title: t("skills.subtitle3"),
      color: "text-pink-400",
      skills: [
        {
          name: "VS Code",
          icon: <TbBrandVscode className="w-4 h-4 text-[#007ACC]" />
        },
        {
          name: "Ollama",
          icon: <SiOllama className="w-4 h-4 text-[#646CFF]" />,
        },
        {
          name: "Raspberry Pi",
          icon: <SiRaspberrypi className="w-4 h-4 text-[#FFCA28]" />,
        },
      ],
    },
    {
      icon: Paintbrush,
      title: t("skills.subtitle5"),
      color: "text-yellow-400",
      skills: [
        { name: "Game Development", icon: <SiUnity className="w-4 h-4 text-[#478CBF]" /> },
        {
          name: "3D Modeling",
          icon: <Cpu className="w-4 h-4 text-[#7C4DFF]" />,
        },
        {
          name: "Motion Graphics",
          icon: <MdAnimation className="w-4 h-4 text-[#FF6D00]" />,
        },
      ],
    },
  ];

  return (
    <main className="pt-15 lg:pt-0 text-white relative" style={{ paddingTop: "40px", paddingBottom: "100px" }}>
      {/* Grid Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none"></div>

      <section id="skills" className="container mx-auto px-4 py-11 relative z-10">
        <div className="flex justify-center items-center mb-20">
          <IconCloudDemo />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <SkillCard
              key={index}
              icon={category.icon}
              title={category.title}
              skills={category.skills}
              color={category.color}
            />
          ))}
        </div>
      </section>
      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
        .bg-grid-pattern {
          background-image: linear-gradient(
              to right,
              rgba(100, 100, 255, 0.1) 1px,
              transparent 1px
            ),
            linear-gradient(
              to bottom,
              rgba(100, 100, 255, 0.1) 1px,
              transparent 1px
            );
          background-size: 30px 30px;
        }
      `}</style>
    </main>
  );
};

export default SkillsSection;
