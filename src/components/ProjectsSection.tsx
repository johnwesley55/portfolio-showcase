import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import project5 from "@/assets/project-5.jpg";
import project6 from "@/assets/project-6.jpg";

const projects = [
  { title: "Lonicon", subtitle: "Brand Identity", image: project1, year: "2025", size: "large" as const },
  { title: "Editorial", subtitle: "Print Design", image: project2, year: "2024", size: "small" as const },
  { title: "Geometric", subtitle: "Poster Series", image: project3, year: "2024", size: "small" as const },
  { title: "Sirmaur", subtitle: "Packaging", image: project4, year: "2023", size: "large" as const },
  { title: "Dashboard", subtitle: "Web Design", image: project5, year: "2023", size: "small" as const },
  { title: "Campaign", subtitle: "Digital Design", image: project6, year: "2025", size: "small" as const },
];

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);

  const isLarge = project.size === "large";

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, delay: index % 2 === 0 ? 0 : 0.15 }}
      className={`relative group ${isLarge ? "md:col-span-2 aspect-[16/10]" : "aspect-[4/5]"}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      data-hover
    >
      <div className="relative w-full h-full overflow-hidden rounded-lg">
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
          style={{ y }}
          animate={{ scale: hovered ? 1.08 : 1 }}
          transition={{ duration: 0.6 }}
        />

        {/* Overlay */}
        <motion.div
          className="absolute inset-0 bg-background/70"
          initial={{ opacity: 0 }}
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />

        {/* Content on hover */}
        <motion.div
          className="absolute inset-0 flex flex-col justify-between p-6 md:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex justify-between items-start">
            <span className="text-primary text-xs tracking-[0.3em] uppercase font-body">{project.subtitle}</span>
            <span className="text-muted-foreground text-xs font-body">{project.year}</span>
          </div>
          <div>
            <h3 className="font-display text-3xl md:text-5xl font-bold text-foreground">{project.title}</h3>
            <div className="mt-3 flex items-center gap-2">
              <span className="text-primary text-sm font-body">View Project</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-primary">
                <path d="M4 12L12 4M12 4H5M12 4V11" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Number badge */}
      <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-primary flex items-center justify-center">
        <span className="text-primary-foreground text-xs font-display font-bold">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  return (
    <section id="work" className="py-32 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-primary text-xs tracking-[0.4em] uppercase font-body mb-4">Portfolio</p>
            <h2 className="font-display text-5xl md:text-8xl font-bold text-foreground leading-[0.9]">
              Selected
              <br />
              <span className="text-outline">Works</span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-muted-foreground font-body text-sm max-w-xs"
          >
            A curated collection of brand identities, digital experiences, and print work — each crafted with intent.
          </motion.p>
        </div>

        {/* Asymmetric grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
