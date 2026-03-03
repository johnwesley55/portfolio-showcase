import { motion } from "framer-motion";
import { Mail, ArrowUpRight } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-primary text-xs tracking-[0.3em] uppercase font-body mb-4">Get in touch</p>
          <h2 className="font-display text-4xl md:text-7xl font-bold text-foreground">
            Let's Create<br />
            <span className="text-gradient">Together</span>
          </h2>
          <p className="mt-6 text-muted-foreground font-body max-w-md mx-auto">
            Have a project in mind? I'd love to hear about it. Let's bring your vision to life.
          </p>

          <a
            href="mailto:hello@alexstudio.com"
            className="mt-10 inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded-full font-display font-semibold text-lg hover:opacity-90 transition-opacity"
          >
            <Mail size={20} />
            Say Hello
            <ArrowUpRight size={18} />
          </a>

          <div className="mt-16 flex justify-center gap-8">
            {["Dribbble", "Behance", "Instagram", "LinkedIn"].map((platform) => (
              <a
                key={platform}
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors text-sm font-body tracking-wide"
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
