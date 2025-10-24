import React, { useState } from "react";
import EducationLoader from "@/components/ui/EducationLoader";
import {
  Star,
  Award,
  Calendar,
  BookOpen,
  GraduationCap,
  Trophy,
} from "lucide-react";
import { motion } from "framer-motion";
import { MdMargin } from "react-icons/md";
import { useTranslation } from "react-i18next";

const EducationSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const { t } = useTranslation();
  const educationData = [
    {
      degree: t("education.degree0"),
      school: t("education.school0"),
      mascot: "📘",
      year: t("education.year0"),
      achievements: ["GPA: 4.89", "Subject: Science"],
      skills: ["Mathematics", "Physics", "Chemistry", "Biology"],
      description: t("education.desc0")
    },
    {
      degree: t("education.degree1"),
      school: t("education.school1"),
      mascot: "📗",
      year: t("education.year1"),
      achievements: ["GPA: 4.25", "Subject: Arts"],
      skills: ["Blockchain", "Computer Networks", "Advanced Programming"],
      description: t("education.desc1"),
    },
  ];

  const workingData = [
    {
      degree: t("education.degree2"),
      school: t("education.school2"),
      mascot: "💻​",
      year: t("education.year2"),
      achievements: ["GPA: 4.89", "Subject: Science"],
      skills: ["PHP", "HTML", "JS", "CSS", "MySQL", "Node.js", "Express"],
      description: t("education.desc2")
    },
    {
      degree: t("education.degree3"),
      school: t("education.school3"),
      mascot: "🚚​",
      year: t("education.year3"),
      achievements: ["GPA: 4.25", "Subject: Arts"],
      skills: ["PHP", "HTML", "JS", "CSS", "MySQL", "Rest API", "Aruba Cloud"],
      description: t("education.desc3"),
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const educationOffset = educationData.length;

  return (
    <section id="education" className="container mx-auto px-4 py-11 relative" style={{ paddingTop: "50px", paddingBottom: "80px" }}>
      {/* Grid Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:50px_50px]" />
        <div className="absolute inset-0 bg-gradient-to-t" />
        <div className="absolute inset-0 border border-white/[0.05] grid grid-cols-2 md:grid-cols-4" />
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10 mt-10 mb-40">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-700 to-purple-700 bg-clip-text text-transparent mb-6">
            {t("education.title")}
          </h2>
          <p className="max-w-2xl mx-auto text-lg">
            {t("education.description")}
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className={`relative border rounded-xl p-8 transition-all duration-300 bg-blue-950/70 dark:bg-blue-950/20 backdrop-blur-sm ${
                hoveredIndex === index
                  ? "border-purple-500 scale-[1.02]"
                  : "border-blue-400/20"
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{edu.mascot}</span>
                    <h3 className="text-2xl font-bold text-white">
                      {edu.degree}
                    </h3>
                  </div>
                  <p className="text-lg text-gray-300 flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-purple-500" />
                    {edu.school}
                  </p>
                  <p className="text-gray-400 flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {edu.year}
                  </p>
                </div>

                <p className="text-gray-300 text-sm italic border-l-2 border-purple-500 pl-3">
                  {edu.description}
                </p>

                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-white flex items-center gap-2">
                    <Trophy className="w-4 h-4 text-yellow-500" />
                    {t("education.keys")}
                  </h4>
                  {/* <div className="flex flex-wrap gap-2">
                    {edu.achievements.map((achievement, i) => (
                      <div
                        key={i}
                        className="px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 flex items-center gap-2 text-sm"
                      >
                        <Award className="w-4 h-4" />
                        <span>{achievement}</span>
                      </div>
                    ))}
                  </div> */}
                </div>

                <div className="flex flex-wrap gap-2">
                  {edu.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs rounded bg-blue-500/10 text-blue-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <div className="max-w-6xl mx-auto px-4 relative z-10 pt-20">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-700 to-blue-700 bg-clip-text text-transparent mb-6">
            {t("education.worktitle")}
          </h2>
          <p className="max-w-2xl mx-auto text-lg">
            {t("education.workdesc")}
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {workingData.map((wrk, index) => { 
            const uniqueIndex = index + educationOffset; 
            return (            
            <motion.div
              key={index}
              variants={cardVariants}
              className={`relative border rounded-xl p-8 transition-all duration-300 bg-blue-950/70 dark:bg-blue-950/20 backdrop-blur-sm ${
                hoveredIndex === uniqueIndex
                  ? "border-purple-500 scale-[1.02]"
                  : "border-blue-400/20"
              }`}
              onMouseEnter={() => setHoveredIndex(uniqueIndex)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
            
              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{wrk.mascot}</span>
                    <h3 className="text-2xl font-bold text-white">
                      {wrk.degree}
                    </h3>
                  </div>
                  <p className="text-lg text-gray-300 flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-purple-500" />
                    {wrk.school}
                  </p>
                  <p className="text-gray-400 flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {wrk.year}
                  </p>
                </div>

                <p className="text-gray-300 text-sm italic border-l-2 border-purple-500 pl-3">
                  {wrk.description}
                </p>

                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-white flex items-center gap-2">
                    <Trophy className="w-4 h-4 text-yellow-500" />
                    {t("education.keys")}
                  </h4>
                  {/* <div className="flex flex-wrap gap-2">
                    {edu.achievements.map((achievement, i) => (
                      <div
                        key={i}
                        className="px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 flex items-center gap-2 text-sm"
                      >
                        <Award className="w-4 h-4" />
                        <span>{achievement}</span>
                      </div>
                    ))}
                  </div> */}
                </div>

                <div className="flex flex-wrap gap-2">
                  {wrk.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs rounded bg-blue-500/10 text-blue-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          )})}
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;
