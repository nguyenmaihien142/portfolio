import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';
import { motion } from 'framer-motion';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    isVisible && (
      <motion.button
        onClick={scrollToTop}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0 }}
        className="fixed bottom-8 right-8 bg-primary-600 hover:bg-primary-700 text-white rounded-full p-3 shadow-lg z-40 transition-all duration-300"
        aria-label="Back to top"
      >
        <ChevronUp size={24} />
      </motion.button>
    )
  );
};

export default BackToTop;
