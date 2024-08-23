import ArrowUpRight from "@/assets/icons/arrow-up-right.svg?react";
import { motion } from 'framer-motion';
import React, { ReactNode } from "react";
import './_card.scss'

interface CardProps {
  icon: ReactNode,
  variant: string,
  title: string,
  description: string,
}

export const Card = ({ icon, variant, title, description }: CardProps) => {

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
      className={`${variant} font-pptelegraph_r transition-colors card`}
      initial="rest"
      whileHover="hovered"
    >
      <div className="content">
        <div className='flex-row-between'>
          <div className='title'>
            {icon}
            <p className='font-pptelegraph_ul'>{title}</p>
          </div>
          <motion.div variants={arrowVariants}>
            <ArrowUpRight />
          </motion.div>
        </div>
        <p className='description'>{description}</p>
      </div>
    </motion.div>
  );
};

