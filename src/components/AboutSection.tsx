import { motion } from "framer-motion";

const skills = ["Brand Identity", "Typography", "UI/UX Design", "Print Design", "Packaging", "Motion Graphics"];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-6 bg-card">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-4xl md:text-6xl font-bold text-foreground">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="mt-6 text-muted-foreground font-body leading-relaxed">
            I'm Alex — a freelance graphic designer with 8+ years of experience turning ideas into compelling visual identities. I work closely with startups, agencies, and established brands to create designs that resonate and endure.
          </p>
          <p className="mt-4 text-muted-foreground font-body leading-relaxed">
            My approach combines bold aesthetics with strategic thinking. Every project begins with understanding the story behind the brand.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-primary text-xs tracking-[0.3em] uppercase font-body mb-6">Expertise</p>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 rounded-full border border-border text-sm font-body text-foreground hover:border-primary hover:text-primary transition-colors cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>

          <div className="mt-12 grid grid-cols-3 gap-6">
            {[
              { num: "8+", label: "Years" },
              { num: "120+", label: "Projects" },
              { num: "45+", label: "Clients" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-3xl md:text-4xl font-bold text-primary">{stat.num}</p>
                <p className="text-muted-foreground text-sm font-body mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
