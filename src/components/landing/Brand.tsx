import { brands } from '@/assets';
import { motion } from 'motion/react';
import * as variants from '@/motionVariants';
export const Brand = () => {
  return (
    <section className='section'>
      <div className='container max-w-screen-lg'>
        <motion.p
          variants={variants.fadeInUp}
          initial='start'
          whileInView={'end'}
          viewport={{ once: true }}
          className='text-center mb-4 md:mb-6'
        >
          Powering data insights for today's startup and tommorow's leader.
        </motion.p>
        <motion.div
          variants={variants.staggerContainer}
          initial='start'
          whileInView={'end'}
          viewport={{ once: true }}
          className='flex justify-center flex-wrap gap-5'
        >
          {brands.map((brand) => (
            <motion.figure
              key={brand}
              variants={variants.fadeInUp}
            >
              <img
                src={brand}
                alt=''
                className='opacity-[0.6]'
              />
            </motion.figure>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
