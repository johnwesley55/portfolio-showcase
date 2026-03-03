import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-6"
        >
          Freelance Graphic Designer
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold leading-[0.9] tracking-tight"
        >
          <span className="text-foreground">Crafting</span>
          <br />
          <span className="text-gradient">Visual Stories</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mt-8 text-muted-foreground font-body text-lg max-w-md mx-auto"
        >
          Brands, identities & digital experiences that leave a mark.
        </motion.p>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          onClick={() => document.getElementById("work")?.scrollIntoView({ behavior: "smooth" })}
          className="mt-16 inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm tracking-widest uppercase font-body"
        >
          View Work
          <ArrowDown size={16} className="animate-bounce" />
        </motion.button>
      </div>
    </section>
  );
};

export default HeroSection;
