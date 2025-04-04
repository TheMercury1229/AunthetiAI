import { motion } from 'motion/react';
import * as variants from '@/motionVariants';
import { blogData } from '@/constants';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

export const Blog = () => {
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
            {blogData.sectionSubtitle}
          </motion.p>
          <motion.h2
            initial='start'
            whileInView={'end'}
            viewport={{ once: true }}
            variants={variants.fadeInUp}
            className='section-title'
          >
            {blogData.sectionTitle}
          </motion.h2>
          <motion.p
            initial='start'
            whileInView={'end'}
            viewport={{ once: true }}
            variants={variants.fadeInUp}
            className='section-text'
          >
            {blogData.sectionText}
          </motion.p>
        </div>
        <motion.div
          initial='start'
          whileInView={'end'}
          viewport={{ once: true }}
          variants={variants.staggerContainer}
          className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'
        >
          {blogData.blogs.map(
            ({
              imgSrc,
              title,
              badge,
              author: { avatarSrc, authorName, publishDate, readingTime },
            }) => (
              <motion.div
                key={title}
                variants={variants.fadeInUp}
              >
                <Card className='group'>
                  <CardHeader>
                    <figure className='rounded-lg overflow-hidden'>
                      <img
                        src={imgSrc}
                        alt=''
                        className='img-cover group-hover:scale-105 transition-transform duration-500'
                      />
                    </figure>
                  </CardHeader>
                  <CardContent>
                    <Badge className='mb-3'>{badge}</Badge>
                    <CardTitle className='leading-normal '>
                      <a
                        href='/'
                        className='hover:text-primary transition-colors'
                      >
                        {title}
                      </a>
                    </CardTitle>
                  </CardContent>

                  <CardFooter className='gap-3'>
                    <Avatar>
                      <AvatarImage src={avatarSrc} />
                      <AvatarFallback>{authorName}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className='text-sm mb-0.5'>{authorName}</p>
                      <div className='flex items-center gap-1.5'>
                        <time
                          dateTime={publishDate}
                          className='text-xs text-muted-foreground'
                        >
                          {publishDate}
                        </time>
                        <span className='size-1 bg-muted-foreground/50 rounded-full' />
                        <p className='text-xs text-muted-foreground'>
                          {readingTime}
                        </p>
                      </div>
                    </div>
                  </CardFooter>
                </Card>
              </motion.div>
            )
          )}
        </motion.div>
      </div>
    </section>
  );
};
