"use client";
import styles from "../../styles";
import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "../../utils/motion";
import { TitleText, TypingText } from "../../components";

const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      className={`${styles.innerWidth} mx-auto flex flex-col`}
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
    >
      <TypingText title="| People on the World" textStyles="text-center" />
      <TitleText
        title={
          <>
            Track friends around you and invite them to play together in the
            same world
          </>
        }
        textStyles="text-center"
      />
      <motion.div
        className="relative mt-[68px] flex w-full h-[550px]"
        variants={fadeIn("up", "tween", 0.3, 1)}
      >
        <img
          src="/map.png"
          alt="map"
          className="w-full h-full object-contain"
        />
        <div className="absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <img src="/people-01.png" alt="people" className="w-full h-full" />
        </div>
        <div className="absolute top-10 left-32 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <img src="/people-02.png" alt="people" className="w-full h-full" />
        </div>
        <div className="absolute top-10 right-36 w-[170px] h-[100px] p-[6px] rounded-xl bg-[#5d6680]">
          <img src="/card-01.png" alt="people" className="w-full h-full" />
          <div className="gradient-01 z-0" />
        </div>
        <div className="absolute top-1/2 left-[20%] w-[170px] h-[100px] p-[6px] rounded-xl bg-[#5d6680]">
          <div className="gradient-01 z-0" />
          <img src="/card-02.png" alt="people" className="w-full h-full" />
        </div>
        <div className="absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <img src="/people-03.png" alt="people" className="w-full h-full" />
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default World;
