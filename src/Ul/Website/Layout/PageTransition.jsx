import React from "react";
import { AnimatePresence, motion } from "framer-motion";

const PageTransitionin = ({ children }) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.9 }}
      >
        {children}
      </motion.div>
    </AnimatePresence> 
  );
};

export default PageTransitionin;
