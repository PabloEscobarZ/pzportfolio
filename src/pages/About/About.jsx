import { useState, useEffect } from "react";

export default function About() {
    const [code] = useState(`
  const profile = {
      name: 'Paolo Zagarella',
      title: 'Full-Stack Developer | UI Responsive Enthusiast | Problem Solver',
      skills: [
          'PHP', 'Javascript', 'TypeScript', 'HTML', 'CSS',
          'Python', 'Java', 'C#', 'C++', 'NodeJS', 'Godot',
          'Angular', 'React', 'NextJS', 'Vite', 'Express',
          'MySQL', 'MongoDB', 'Docker', 'Git', 'Linux', 'WP'
      ],
      hardWorker: true,
      quickLearner: true,
      problemSolver: true,
      yearsOfExperience: 6, 
      hireable: function() {
          return (
              this.hardWorker &&
              this.problemSolver &&
              this.skills.length >= 5 &&
              this.yearsOfExperience >= 3
          );
      },
      getDevInformations: function() {
          console.log(
              \`\${this.name} is a 
              \${this.title} with \${this.yearsOfExperience}+ 
              years of experience. Hard Skilled in: PHP, JS, HTML.\`;
      }
  };
    `);
    
      useEffect(() => {
        Prism.highlightAll();
    
        // Add CSS animation for grid and dots
        const style = document.createElement("style");
        style.textContent = `
          @keyframes gridPulse {
            0%, 100% { opacity: 0.1; }
            50% { opacity: 0.3; }
          }
          
          @keyframes dotPulse {
            0%, 100% { opacity: 0.2; transform: scale(0.8); }
            50% { opacity: 0.5; transform: scale(1.2); }
          }
          
          /* Media query for 1366x768 resolution */
          @media screen and (width: 1366px) and (height: 768px), 
                 screen and (width: 1367px) and (height: 768px),
                 screen and (width: 1368px) and (height: 769px) {
            .hero {
              padding-top: 12rem !important;
            }
            .hero .container {
              padding-top: 10rem !important;
              margin-top: 5rem !important;
            }
            .hero-section-padding {
              padding-top: 12rem !important;
            }
          }
        `;
        document.head.appendChild(style);
    
        // Apply extra padding for 1366x768 resolution
        const checkResolution = () => {
          const isTargetResolution =
            window.innerWidth >= 1360 &&
            window.innerWidth <= 1370 &&
            window.innerHeight >= 760 &&
            window.innerHeight <= 775;
    
          if (isTargetResolution) {
            document.documentElement.style.setProperty(
              "--hero-padding-top",
              "12rem"
            );
          } else {
            document.documentElement.style.setProperty("--hero-padding-top", "0");
          }
        };
    
        checkResolution();
        window.addEventListener("resize", checkResolution);
    
        return () => {
          document.head.removeChild(style);
          window.removeEventListener("resize", checkResolution);
        };
      }, [code]);

  return (
    <>
      <section id="about" className="container mx-auto mt-20 px-4 py-11 relative z-10 animate__animated animate__fadeInDown animate__delay-0.1s">
                      
                      <div className="gradient-border" >
                        <div className="code-window bg-[#091121]">
                          <div className="window-header">
                            <div className="window-dot bg-red-500"></div>
                            <div className="window-dot bg-yellow-500"></div>
                            <div className="window-dot bg-green-500"></div>
                            <span className="ml-2 text-sm text-foreground flex items-center gap-2">
                              <i className="fas fa-code"></i>
                              developer.js
                            </span>
                          </div>
                          <pre className="language-javascript">
                            <code className="language-javascript">{code}</code>
                          </pre>
                        </div>
                      </div>
      </section>
    </>
  );
}
