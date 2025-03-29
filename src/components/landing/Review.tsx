import { motion } from "motion/react";
import * as variants from "@/motionVariants";
import { reviewData } from "@/constants";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Quote } from "lucide-react";

export const Review = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="section-head">
          <motion.p
            className="section-subtitle"
            initial="start"
            whileInView={"end"}
            viewport={{ once: true }}
            variants={variants.fadeInUp}
          >
            {reviewData.sectionSubtitle}
          </motion.p>
          <motion.h2
            initial="start"
            whileInView={"end"}
            viewport={{ once: true }}
            variants={variants.fadeInUp}
            className="section-title"
          >
            {reviewData.sectionTitle}
          </motion.h2>
        </div>
        <motion.div
          initial="start"
          whileInView={"end"}
          viewport={{ once: true }}
          variants={variants.staggerContainer}
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {reviewData.reviewCard.map(({ title, text, reviewAuthor, date }) => (
            <motion.div key={reviewAuthor} variants={variants.fadeInUp}>
              <Card className="relative">
                <CardHeader>
                  <CardTitle className="text-lg">{title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground line-clamp-3">
                    {text}
                  </p>
                </CardContent>
                <CardFooter className="block">
                  <p>{reviewAuthor}</p>
                  <p className="text-xs text-muted-foreground">{date}</p>
                </CardFooter>
                <div className="absolute bottom-0 right-3 opacity-[0.02]">
                  <Quote size={80} />
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
