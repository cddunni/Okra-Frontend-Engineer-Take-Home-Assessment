import React from 'react'
import ArrowUpRight from "@/assets/icons/arrow-up-right.svg?react";
import { motion } from 'framer-motion';

const Card = ({ icon, variant, title, description }) => {

  const arrowVariants = {
    rest: {
      x: 0,
      transition: {
        type: 'spring',
        mass: 1,
        stiffness: 400,
        damping: 30,
      },
    },
    hovered: {
      x: 4,
      transition: {
        type: 'spring',
        mass: 1,
        stiffness: 400,
        damping: 30,
      },
    },
  };

  return (
    <motion.div
      className={`${variant} p-6 min-h-[178px] rounded-3xl flex flex-col justify-between font-pptelegraph_r transition-colors duration-500 ease-in-out  shadow-cardShadow cursor-pointer`}
      initial="rest"
      whileHover="hovered"
    >
      <div className='flex justify-between'>
        <div className='flex space-x-2 items-center'>
          {icon}
          <p className='text-neutral_hover text-sm'>{title}</p>
        </div>
        <motion.div variants={arrowVariants}>
          <ArrowUpRight />
        </motion.div>
      </div>
      <p className='text-xl md:text-2xl text-neutral_hover'>{description}</p>
    </motion.div>
  );
};

export default Card;

