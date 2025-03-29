import { motion } from 'motion/react';
import * as variants from '@/motionVariants';
import { overviewData } from '@/constants';
import { overviewBanner } from '@/assets';
import { Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import ReactPlayer from 'react-player/youtube';
import { AspectRatio } from '@/components/ui/aspect-ratio';

export const Overview = () => {
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
            {overviewData.sectionSubtitle}
          </motion.p>
          <motion.h2
            initial='start'
            whileInView={'end'}
            viewport={{ once: true }}
            variants={variants.fadeInUp}
            className='section-title'
          >
            {overviewData.sectionTitle}
          </motion.h2>
          <motion.p
            initial='start'
            whileInView={'end'}
            viewport={{ once: true }}
            variants={variants.fadeInUp}
            className='section-text'
          >
            {overviewData.sectionText}
          </motion.p>
        </div>
        <div>
          <motion.div
            initial='start'
            whileInView={'end'}
            viewport={{ once: true }}
            variants={variants.fadeInScale}
            className='relative max-w-4xl mx-auto shadow-xl'
          >
            <figure>
              <img
                src={overviewBanner}
                width={900}
                height={601}
                alt=''
                className=''
              />
            </figure>

            <Dialog>
              <DialogTrigger asChild>
                <Button
                  variant={'secondary'}
                  size={'icon'}
                  className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-150'
                >
                  <div className='sr-only'>Play Video</div>
                  <Play
                    fill={'#fff'}
                    size={50}
                  />
                </Button>
              </DialogTrigger>
              <DialogContent className='p-0 overflow-hidden max-w-[640px] xl:max-w-[1000px]'>
                <AspectRatio ratio={16 / 9}>
                  <ReactPlayer
                    playing
                    url='https://youtu.be/dQw4w9WgXcQ?si=Vl-DDHQC7OG6D2tu'
                    style={{
                      minWidth: '100%',
                      minHeight: '100%',
                      maxWidth: '100%',
                      maxHeight: '100%',
                    }}
                  />
                </AspectRatio>
              </DialogContent>
            </Dialog>
          </motion.div>
          <div className='max-w-4xl mx-auto grid grid-cols-1 gap-5 mt-8 md:mt-16 xl:grid-cols-[3fr_2.5fr] xl:items-center'>
            <motion.p
              initial='start'
              whileInView={'end'}
              viewport={{ once: true }}
              variants={variants.fadeInRight}
              className='section-title text-center lg:max-w-[30ch] lg:mx-auto xl:text-left'
            >
              {overviewData.listTitle}
            </motion.p>
            <motion.div
              initial='start'
              whileInView={'end'}
              viewport={{ once: true }}
              variants={variants.staggerContainer}
              className='flex flex-wrap justify-center gap-5 md:gap-10 xl:gap-8'
            >
              {overviewData.list.map(({ title, text }) => (
                <motion.div
                  variants={variants.fadeInLeft}
                  key={title}
                  className='text-center '
                >
                  <h3 className='text-3xl '>{title}</h3>
                  <p className='text-muted-foreground'>{text}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
