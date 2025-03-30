import { heroData } from "@/constants";
import { useRef } from "react";
import {
  motion,
  type Variants,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import ReactPlayer from "react-player/youtube";
import { CirclePlay } from "lucide-react";
import { heroBanner } from "@/assets";

// Variants of framer-motion
const heroChildVariants: Variants = {
  start: {
    y: 30,
    opacity: 0,
    filter: "blur(5px)",
  },
  end: {
    y: 0,
    opacity: 1,
    filter: "blur(0)",
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};
const heroVariants: Variants = {
  start: {},
  end: {
    transition: {
      staggerChildren: 0.4,
    },
  },
};

export const Hero = () => {
  const heroBannerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroBannerRef,
    offset: ["start 1080px", "50% start"],
  });
  const scrollYTransform = useTransform(scrollYProgress, [0, 1], [0.76, 1.02]);
  const scale = useSpring(scrollYTransform, {
    stiffness: 300,
    damping: 20,
    restDelta: 0.001,
  });

  return (
    <section className="py-10 md:py-16">
      <motion.div
        variants={heroVariants}
        initial="start"
        animate="end"
        className="container text-center"
      >
        <div className="max-w-screen-md mx-auto mb-10">
          <motion.p
            variants={heroChildVariants}
            initial="start"
            animate="end"
            className="text-sm uppercase tracking-wider bg-foreground/20 dark:bg-secondary/50 text-secondary-foreground max-w-max mx-auto px-3 py-1 rounded-full border-t border-blue-500/10 backdrop-blur-3xl mb-6 md:mb-10"
          >
            {heroData.sectionSubtitle}
          </motion.p>

          <motion.h2
            variants={heroChildVariants}
            className="text-4xl font-semibold !leading-tight mb-4 md:text-5xl md:mb-5 lg:text-6xl"
          >
            {heroData.sectionTitle}
            <span className="relative isolate ms-4 inline-block">
              {heroData.decoTitle}
              <span
                className="absolute -z-10 top-2 -left-4 -right-2 bottom-0.5 bg-foreground/5 rounded-full px-6 ms-2 py-1  border-t border-foreground/20 shadow-[inset_0px_0px_30px_0px] shadow-foreground/20
      sm:top-3 sm:bottom-1 lg:bottom-2 lg:top-3"
              />
            </span>
          </motion.h2>

          <motion.p
            variants={heroChildVariants}
            className="text-muted-foreground md:text-xl"
          >
            {heroData.sectionText}
          </motion.p>

          <motion.div
            variants={heroChildVariants}
            className="flex justify-center gap-2 mt-6 md:mt-10 "
          >
            <Button>Get Started</Button>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant={"ghost"}>
                  <CirclePlay />
                  Watch Demo
                </Button>
              </DialogTrigger>
              <DialogContent className="p-0 overflow-hidden max-w-[640px] xl:max-w-[1000px]">
                <AspectRatio ratio={16 / 9}>
                  <ReactPlayer
                    url="https://youtu.be/LXb3EKWsInQ?si=eBi7nCoz95eLX9ST"
                    style={{
                      minWidth: "100%",
                      minHeight: "100%",
                      maxWidth: "100%",
                      maxHeight: "100%",
                    }}
                    playing
                  />
                </AspectRatio>
              </DialogContent>
            </Dialog>
          </motion.div>
        </div>

        <div className="relative container mt-12 max-w-screen-xl mx-auto md:mt-16 ">
          <motion.figure
            className="bg-background/60 border border-slate-800 backdrop-blur-3xl rounded-xl shadow-2xl"
            ref={heroBannerRef}
            style={{ scale }}
            initial={{
              y: 120,
              opacity: 0,
              filter: "blur(5px)",
            }}
            animate={{
              y: 0,
              opacity: 1,
              filter: "blur(0)",
            }}
            transition={{
              duration: 1.5,
              delay: 0.5,
              ease: "backInOut",
            }}
          >
            <img
              src={heroBanner}
              alt="Dashboard"
              width={1468}
              className="relative z-20"
              height={815}
            />
            {/* Blurry glow effect */}
            <motion.div
              className="absolute bg-primary inset-5 blur-[50px] -z-10"
              initial={{
                scale: 0.8,
                opacity: 0,
              }}
              animate={{
                scale: 1,
                opacity: 1,
              }}
              transition={{
                duration: 2,
                delay: 0.5,
                ease: "backInOut",
              }}
            />
            <motion.div
              className="absolute inset-0 bg-primary blur-[200px] scale-y-75 scale-x-125 rounded-full -z-10"
              initial={{
                scale: 0.4,
                opacity: 0,
              }}
              animate={{
                scale: 1,
                opacity: 1,
              }}
              transition={{
                duration: 2,
                delay: 1.5,
                ease: "backOut",
              }}
            />
          </motion.figure>
        </div>
      </motion.div>
    </section>
  );
};
