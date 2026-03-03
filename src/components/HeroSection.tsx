import { motion } from "framer-motion";

const Marquee = ({
  children,
  reverse = false,
  className = "",
}: {
  children: React.ReactNode;
  reverse?: boolean;
  className?: string;
}) => (
  <div className={`overflow-hidden whitespace-nowrap ${className}`}>
    <div className={reverse ? "animate-marquee-reverse" : "animate-marquee"} style={{ display: "inline-flex" }}>
      {children}
      {children}
    </div>
  </div>
);

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden noise-bg">
      {/* Floating badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute top-32 right-8 md:right-24 z-10"
      >
        <div className="w-28 h-28 md:w-36 md:h-36 rounded-full border border-primary/40 flex items-center justify-center animate-spin-slow">
          <svg viewBox="0 0 200 200" className="w-full h-full absolute">
            <defs>
              <path id="circlePath" d="M 100, 100 m -70, 0 a 70,70 0 1,1 140,0 a 70,70 0 1,1 -140,0" />
            </defs>
            <text className="fill-primary text-[13px] uppercase tracking-[0.35em]" style={{ fontFamily: "var(--font-body)" }}>
              <textPath href="#circlePath">AVAILABLE FOR WORK • FREELANCE • </textPath>
            </text>
          </svg>
          <span className="text-primary text-lg">✦</span>
        </div>
      </motion.div>

      {/* Main content */}
      <div className="relative z-10 pt-32">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-primary font-body text-xs md:text-sm tracking-[0.4em] uppercase px-6 md:px-16 mb-8"
        >
          Graphic Designer / Visual Storyteller
        </motion.p>

        {/* Marquee title */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <Marquee className="mb-2">
            <span className="font-display text-[6rem] sm:text-[8rem] md:text-[12rem] lg:text-[15rem] font-extrabold leading-none tracking-tighter text-foreground mr-8">
              CRAFTING
            </span>
            <span className="font-display text-[6rem] sm:text-[8rem] md:text-[12rem] lg:text-[15rem] font-extrabold leading-none tracking-tighter text-outline mr-8">
              VISUAL
            </span>
            <span className="font-display text-[6rem] sm:text-[8rem] md:text-[12rem] lg:text-[15rem] font-extrabold leading-none tracking-tighter text-primary mr-8">
              STORIES
            </span>
            <span className="font-display text-[6rem] sm:text-[8rem] md:text-[12rem] lg:text-[15rem] font-extrabold leading-none tracking-tighter text-foreground mr-8">
              CRAFTING
            </span>
            <span className="font-display text-[6rem] sm:text-[8rem] md:text-[12rem] lg:text-[15rem] font-extrabold leading-none tracking-tighter text-outline mr-8">
              VISUAL
            </span>
            <span className="font-display text-[6rem] sm:text-[8rem] md:text-[12rem] lg:text-[15rem] font-extrabold leading-none tracking-tighter text-primary mr-8">
              STORIES
            </span>
          </Marquee>
        </motion.div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="mt-12 md:mt-20 px-6 md:px-16 flex flex-col md:flex-row items-start md:items-end justify-between gap-8"
        >
          <p className="text-muted-foreground font-body text-sm md:text-base max-w-xs leading-relaxed">
            Turning ideas into bold visual identities that resonate, disrupt, and endure.
          </p>

          <button
            onClick={() => document.getElementById("work")?.scrollIntoView({ behavior: "smooth" })}
            data-hover
            className="flex items-center gap-4 group"
          >
            <span className="text-foreground font-body text-sm tracking-widest uppercase group-hover:text-primary transition-colors">
              Scroll to explore
            </span>
            <div className="w-12 h-12 rounded-full border border-foreground/30 flex items-center justify-center group-hover:border-primary transition-colors">
              <motion.svg
                width="16" height="16" viewBox="0 0 16 16" fill="none"
                animate={{ y: [0, 4, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                <path d="M8 2v12M2 8l6 6 6-6" stroke="currentColor" strokeWidth="1.5" className="text-foreground group-hover:text-primary transition-colors" />
              </motion.svg>
            </div>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
