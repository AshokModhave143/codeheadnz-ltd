'use client';
import { Button, ButtonProps } from '@nextui-org/react';
import { FaAngleDown } from 'react-icons/fa';
import { motion } from 'framer-motion';

export interface AnchorJumpButtonProps extends ButtonProps {}
export const AnchorJumpButton = (props: AnchorJumpButtonProps) => {
  return (
    <div className="w-full text-center py-8">
      <motion.div
        animate={{
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 0, 180, 180, 0],
          borderRadius: ['0%', '0%', '50%', '50%', '0%'],
        }}
        transition={{
          duration: 2,
          ease: 'easeInOut',
          times: [0, 0.2, 0.5, 0.8, 1],
          repeat: Infinity,
          repeatDelay: 1,
        }}
      >
        <Button
          as="a"
          size="lg"
          variant="flat"
          color="primary"
          className="rounded-full bg-primary hover:bg-primary/80 h-24 w-12"
          {...props}
        >
          <FaAngleDown color="white" className="h-12 w-8" />
        </Button>
      </motion.div>
    </div>
  );
};
