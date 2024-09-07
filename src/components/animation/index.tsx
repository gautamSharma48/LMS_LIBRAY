import React from 'react';
import { motion } from 'framer-motion';

interface FadeInProps {
    children: React.ReactNode; // Type for the children prop
    delay?: number; // Optional delay prop with a default value of 0
    distance?: number; // Optional delay prop with a default value of 0
  }

export const FadeIn: React.FC<FadeInProps> = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5, delay }}
  >
    {children}
  </motion.div>
);

export const SlideInFromBottom: React.FC<FadeInProps>  = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
  >
    {children}
  </motion.div>
);

export const SlideInFromRight: React.FC<FadeInProps> = ({ children, delay = 0, distance = 50 }) => (
    <motion.div
      initial={{ opacity: 0, x: distance }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay, type: 'spring', stiffness: 100 }}
    >
      {children}
    </motion.div>
  );