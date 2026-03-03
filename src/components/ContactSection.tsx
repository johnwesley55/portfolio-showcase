import { motion } from "framer-motion";
import { Mail, ArrowUpRight } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-32 px-6 md:px-16 relative overflow-hidden">
      {/* Giant background text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span className="font-display text-[20rem] md:text-[30rem] font-extrabold text-foreground/[0.02] leading-none tracking-tighter">
          HI
        </span>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-primary text-xs tracking-[0.4em] uppercase font-body mb-6">Let's Collaborate</p>

          <h2 className="font-display text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-extrabold text-foreground leading-[0.9]">
            Got a project
            <br />
            <span className="text-outline-primary">in mind?</span>
          </h2>

          <p className="mt-8 text-muted-foreground font-body text-base md:text-lg max-w-md mx-auto">
            I'd love to hear about it. Let's turn your vision into something unforgettable.
          </p>

          <motion.a
            href="mailto:hello@alexstudio.com"
            data-hover
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="mt-12 inline-flex items-center gap-3 bg-primary text-primary-foreground px-10 py-5 rounded-full font-display font-bold text-lg transition-shadow hover:shadow-[0_0_40px_hsl(var(--primary)/0.4)]"
          >
            <Mail size={20} />
            Say Hello
            <ArrowUpRight size={18} />
          </motion.a>

          {/* Social links */}
          <div className="mt-20 flex justify-center gap-10">
            {["Dribbble", "Behance", "Instagram", "LinkedIn"].map((platform) => (
              <a
                key={platform}
                href="#"
                data-hover
                className="text-muted-foreground hover:text-primary transition-colors text-xs font-body tracking-[0.2em] uppercase"
              >
                {platform}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
