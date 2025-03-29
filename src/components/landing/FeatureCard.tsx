import type { JSX } from 'react';
import { useState, useCallback, useRef, type MouseEvent } from 'react';
import { motion, useMotionValue, frame } from 'motion/react';
import * as variants from '@/motionVariants';
type FeatureCardProps = {
  classes?: string;
  children: JSX.Element;
};

export const FeatureCard = ({ classes, children }: FeatureCardProps) => {
  const glowRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const [showGlow, setShowGlow] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const handleMouseMove = useCallback(
    (event: MouseEvent<HTMLDivElement>) => {
      const rect = cardRef.current?.getBoundingClientRect();
      frame.read(() => {
        x.set(event.clientX - Number(rect?.left));
        y.set(event.clientY - Number(rect?.top));
      });
    },
    [x, y]
  );

  return (
    <motion.div
      variants={variants.staggerContainer}
      initial='start'
      whileInView={'end'}
      viewport={{ once: true }}
      className={`relative overflow-hidden p-[1px] ring ring-inset ring-zinc-800/50 rounded-[14px] ${classes} `}
    >
      <div
        ref={cardRef}
        onMouseOver={() => {
          setShowGlow(true);
        }}
        onFocus={() => {
          setShowGlow(true);
        }}
        onMouseOut={() => {
          setShowGlow(false);
        }}
        onBlur={() => {
          setShowGlow(false);
        }}
        onMouseMove={handleMouseMove}
        className='relative isolate bg-card backdrop-blur-md rounded-xl overflow-hidden'
      >
        {children}
      </div>
      {/* Border effect */}
      <motion.div
        ref={glowRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: Number(showGlow) }}
        style={{ x, y }}
        className='absolute -top-[150px] -left-[150px] rounded-full -z-10 w-[300px] h-[300px] bg-foreground blur-[50px]'
      />
    </motion.div>
  );
};
