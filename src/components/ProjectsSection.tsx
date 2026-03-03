import { motion } from "framer-motion";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import project5 from "@/assets/project-5.jpg";
import project6 from "@/assets/project-6.jpg";

const projects = [
  { title: "Lonicon Identity", category: "Brand Identity", image: project1 },
  { title: "Editorial Spread", category: "Print Design", image: project2 },
  { title: "Geometric Series", category: "Poster Design", image: project3 },
  { title: "Sirmaur Packaging", category: "Packaging", image: project4 },
  { title: "Dashboard UI", category: "Web Design", image: project5 },
  { title: "Social Campaign", category: "Digital Design", image: project6 },
];

const ProjectsSection = () => {
  return (
    <section id="work" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="font-display text-4xl md:text-6xl font-bold text-foreground">
            Selected <span className="text-gradient">Work</span>
          </h2>
          <p className="mt-4 text-muted-foreground font-body max-w-lg">
            A curated collection of brand identities, digital experiences, and print design.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-lg bg-card hover-lift cursor-pointer"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <p className="text-primary text-xs tracking-[0.2em] uppercase font-body">{project.category}</p>
                <h3 className="font-display text-xl font-bold text-foreground mt-1">{project.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
