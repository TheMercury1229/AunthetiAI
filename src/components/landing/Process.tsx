import { motion } from 'motion/react';
import * as variants from '@/motionVariants';
import { processData } from '@/constants';
import { processBanner } from '@/assets';
export const Process = () => {
  return (
    <section className='section'>
      <div className='container'>
        <div className='section-head'>
          <motion.p
            className='section-subtitle'
            initial='start'
            whileInView={'end'}
            viewport={{ once: true }}
            variants={variants.fadeInUp}
          >
            {processData.sectionSubtitle}
          </motion.p>
          <motion.h2
            initial='start'
            whileInView={'end'}
            viewport={{ once: true }}
            variants={variants.fadeInUp}
            className='section-title'
          >
            {processData.sectionTitle}
          </motion.h2>
          <motion.p
            initial='start'
            whileInView={'end'}
            viewport={{ once: true }}
            variants={variants.fadeInUp}
            className='section-text'
          >
            {processData.sectionText}
          </motion.p>
        </div>
        <div className='grid gap-14 lg:grid-cols-2 lg:items-center'>
          <div className='grid gap-7 lg:gap-10'>
            {processData.list.map(({ icon: IconComponent, text, title }) => (
              <motion.div
                variants={variants.staggerContainer}
                initial='start'
                whileInView='end'
                viewport={{ once: true }}
                className='flex flex-col gap-4 md:flex-row lg:gap-7'
                key={title}
              >
                <motion.div
                  variants={variants.fadeInScale}
                  className='size-16 grid place-items-center rounded-full border border-foreground/5 shrink-0'
                >
                  <IconComponent />
                </motion.div>
                <div className='grid gap-2 md:gap-3'>
                  <motion.h3
                    variants={variants.fadeInLeft}
                    className='text-xl lg:text-2xl'
                  >
                    {title}
                  </motion.h3>
                  <motion.p
                    variants={variants.fadeInLeft}
                    className='text-sm text-muted-foreground md:text-base'
                  >
                    {text}
                  </motion.p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className='max-lg:-order-1'>
            <motion.figure
              initial='start'
              whileInView='end'
              viewport={{ once: true }}
              variants={variants.fadeInUp}
              className='mx-auto bg-primary rounded-3xl max-w-[580px] overflow-hidden p-8 lg:p-12 pb-0 lg:pb-0'
            >
              <img
                src={processBanner}
                width={500}
                height={528}
                alt=''
                className='w-full h-full object-contain object-bottom'
              />
            </motion.figure>
          </div>
        </div>
      </div>
    </section>
  );
};
