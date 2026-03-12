import React from "react";

const experiences = [
  {
    period: "2024 — Present",
    role: "Frontend Developer (Fresher)",
    company: "Self Projects",
    description:
      "Currently learning and building modern web applications using React and Tailwind CSS. Creating responsive portfolio projects and improving JavaScript fundamentals while exploring modern frontend development tools.",
    technologies: ["React", "JavaScript", "Tailwind CSS", "Git", "Vite"],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-15 relative overflow-hidden">

      {/* background glow */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />

      <div className="container mx-auto px-6 relative z-10">

        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-primary text-sm uppercase tracking-wider">
            Experience
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            My Learning <span className="text-primary">Journey</span>
          </h2>

          <p className="text-muted-foreground">
            My journey as a frontend developer, learning modern technologies
            and building real-world projects.
          </p>
        </div>

        {/* Main Cards */}
        <div className="grid md:grid-cols-2 gap-8">

          {/* Experience Card */}
          {experiences.map((exp, idx) => (
            <div key={idx} className="relative group">

              {/* glow layer */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/40 to-transparent blur opacity-0 group-hover:opacity-100 transition duration-500"></div>

              {/* card */}
              <div className="relative glass rounded-2xl p-8 border border-primary/20 hover:border-primary/50 transition duration-500">

                <span className="text-sm text-primary font-medium">
                  {exp.period}
                </span>

                <h3 className="text-xl font-semibold mt-2">
                  {exp.role}
                </h3>

                <p className="text-muted-foreground">
                  {exp.company}
                </p>

                <p className="text-sm text-muted-foreground mt-4">
                  {exp.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-5">
                  {exp.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          ))}

          {/* Currently Learning Card */}
          <div className="relative group">

            {/* glow layer */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/40 to-transparent blur opacity-0 group-hover:opacity-100 transition duration-500"></div>

            {/* card */}
            <div className="relative glass rounded-2xl p-8 border border-primary/20 hover:border-primary/50 transition duration-500">

              <h3 className="text-xl font-semibold mb-4 text-primary">
                Currently Learning
              </h3>

              <ul className="space-y-3 text-muted-foreground text-sm">
                <li>⚡ Advanced React concepts (Hooks, Performance)</li>
                <li>⚡ Responsive UI design with Tailwind CSS</li>
                <li>⚡ Git & GitHub workflow</li>
                <li>⚡ API integration using Fetch & Axios</li>
                <li>⚡ Building real portfolio projects</li>
              </ul>

            </div>
          </div>

        </div>

        {/* Developer Stats */}
        <div className="grid grid-cols-3 gap-6 mt-16 text-center">

          <div className="glass p-6 rounded-xl border border-primary/20">
            <h3 className="text-3xl font-bold text-primary">10+</h3>
            <p className="text-sm text-muted-foreground">Projects Built</p>
          </div>

          <div className="glass p-6 rounded-xl border border-primary/20">
            <h3 className="text-3xl font-bold text-primary">6+</h3>
            <p className="text-sm text-muted-foreground">Technologies</p>
          </div>

          <div className="glass p-6 rounded-xl border border-primary/20">
            <h3 className="text-3xl font-bold text-primary">1+</h3>
            <p className="text-sm text-muted-foreground">Year Learning</p>
          </div>

        </div>

        {/* Quote */}
        <div className="mt-16 text-center max-w-2xl mx-auto">
          <p className="text-muted-foreground italic">
            “I enjoy turning ideas into real web applications and continuously
            improving my frontend development skills.”
          </p>
        </div>

      </div>
    </section>
  );
};

export default Experience;