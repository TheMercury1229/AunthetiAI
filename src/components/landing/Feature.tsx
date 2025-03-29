import { featureData } from "@/constants";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { FeatureCard } from "@/components/landing/FeatureCard";
import { ArrowRight } from "lucide-react";
import * as variants from "@/motionVariants";
export const Feature = () => {
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
            {featureData.sectionSubtitle}
          </motion.p>
          <motion.h2
            initial="start"
            whileInView={"end"}
            viewport={{ once: true }}
            variants={variants.fadeInUp}
            className="section-title"
          >
            {featureData.sectionTitle}
          </motion.h2>
          <motion.p
            initial="start"
            whileInView={"end"}
            viewport={{ once: true }}
            variants={variants.fadeInUp}
            className="section-text"
          >
            {featureData.sectionText}
          </motion.p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-6">
          {featureData.features.map(
            ({ icon: IconComponent, iconBoxColor, title, desc }, index) => (
              <FeatureCard
                key={title}
                classes={
                  index < 2
                    ? "md:col-span-2 lg:col-span-1 xl:col-span-3"
                    : "xl:col-span-2"
                }
              >
                <div className={"p-8"}>
                  <motion.div
                    variants={variants.fadeInUp}
                    className={`size-16 grid place-items-center rounded-full flex-shrink-0 ${iconBoxColor} `}
                  >
                    <IconComponent />
                  </motion.div>
                  <motion.h3
                    variants={variants.fadeInUp}
                    className="text-foreground text-xl font-medium mt-4 mb-3"
                  >
                    {title}
                  </motion.h3>
                  <motion.p
                    variants={variants.fadeInUp}
                    className="text-muted-foreground line-clamp-2"
                  >
                    {desc}
                  </motion.p>
                  <motion.div variants={variants.fadeInUp} className="">
                    <Button variant={"link"} className="p-0 h-auto mt-3">
                      Learn More <ArrowRight />
                    </Button>
                  </motion.div>
                </div>
              </FeatureCard>
            )
          )}
        </div>
      </div>
    </section>
  );
};
