"use client";
import styles from "../../styles";
import { motion } from "framer-motion";
import { staggerContainer, fadeIn, planetVariants } from "../../utils/motion";
import { StartSteps, TitleText, TypingText } from "../../components";
import { startingFeatures } from "../../constants";
const GetStarted = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
    >
      <motion.div
        variants={planetVariants("left")}
        className={`flex-1 ${styles.flexCenter}`}
      >
        <img
          src="/get-started.png"
          alt="get-started"
          className="w-[90%] h-[90%] object-contain"
        />
      </motion.div>
      <motion.div
        className="flex-[0.75] justify-center flex-col"
        variants={fadeIn("left", "tween", 0.2, 1)}
      >
        <TypingText title="| How Metaversus Works" />
        <TitleText title={<>Get started with just a few clicks</>} />
        <div className="mt-[31px] flex flex-col max-w-[370px] gap-[24px]">
{
  startingFeatures.map((feature, index)=>(
    <StartSteps key={feature} number={index + 1} text={feature} />
  ))
}
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default GetStarted;
