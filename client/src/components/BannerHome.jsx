import { motion } from "framer-motion";
import { BannerUpperTitleVariants, BannerTitleVariants, BannerSubtitleVariants } from "../animation/Variants"
import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"

const BannerHome = () => {
  return (
    <motion.div
      className="w-full h-[20rem] lg:h-auto relative"
      initial="hidden"
      animate="visible"
    >
      <motion.div
        className="absolute h-full w-[20rem] flex flex-col justify-center gap-4 pl-5"
      >
        <motion.div
          className="text-3xl font-serif text-[#e8b941] lg:text-6xl"
          variants={BannerUpperTitleVariants}
          initial="hidden"
          animate= "visible"
        >Donating</motion.div>
        <motion.div
          className="text-5xl lg:text-8xl"
          variants={BannerTitleVariants}
          initial="hidden"
          animate="visible"
        >FOOD TOGETHER</motion.div>
        <motion.div
          className="font-light"
          variants={BannerSubtitleVariants}
          initial="hidden"
          animate="visible"
        >Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet blanditiis</motion.div>
      </motion.div>

      <motion.img
        src="/src/assets/Images/Banner/SharePlateBannerImage.png"
        alt=""
        className="hidden lg:block lg:w-full"
      //variants={BannerImageVariants}
      />
    </motion.div>
  )
}
export default BannerHome