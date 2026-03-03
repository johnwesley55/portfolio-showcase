import { motion } from "framer-motion";

const skills = ["Brand Identity", "Typography", "UI/UX Design", "Print Design", "Packaging", "Motion Graphics"];

const AboutSection = () => {
  return (
    <section id="about" className="py-32 px-6 md:px-16 noise-bg">
      <div className="max-w-7xl mx-auto">
        {/* Big statement */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <h2 className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-foreground leading-[1.05]">
            I don't just design.
            <br />
            <span className="text-gradient">I solve visually.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-12 gap-12 md:gap-8">
          {/* Left col */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-5"
          >
            <div className="border-l-2 border-primary pl-6">
              <p className="text-foreground font-body leading-relaxed text-base md:text-lg">
                I'm Alex — a freelance graphic designer with 8+ years of experience. I work closely with startups, agencies, and established brands to create designs that resonate and endure.
              </p>
              <p className="mt-4 text-muted-foreground font-body leading-relaxed">
                My approach blends bold aesthetics with strategic thinking. Every pixel has a purpose. Every project starts with understanding the story behind the brand.
              </p>
            </div>
          </motion.div>

          {/* Right col — stats + skills */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="md:col-span-7 md:pl-12"
          >
            {/* Stats row */}
            <div className="grid grid-cols-3 gap-8 mb-12">
              {[
                { num: "8+", label: "Years of Craft" },
                { num: "120+", label: "Projects Done" },
                { num: "45+", label: "Happy Clients" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                >
                  <p className="font-display text-4xl md:text-6xl font-extrabold text-primary leading-none">{stat.num}</p>
                  <p className="text-muted-foreground text-xs md:text-sm font-body mt-2 tracking-wide uppercase">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            {/* Skills */}
            <p className="text-primary text-xs tracking-[0.3em] uppercase font-body mb-4">Expertise</p>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, i) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + i * 0.05 }}
                  data-hover
                  className="px-5 py-2.5 rounded-full border border-border text-sm font-body text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
