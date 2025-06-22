// src/components/AnimatedBox.tsx

import React from 'react';
import { Box, BoxProps } from '@mui/material';

type AnimationType = 
  | 'slideInFromLeft' 
  | 'slideInFromRight' 
  | 'fadeInUp' 
  | 'fadeInDown' 
  | 'bounce' 
  | 'pulse' 
  | 'shake';

interface AnimatedBoxProps extends BoxProps {
  animation?: AnimationType;
  delay?: number;
  duration?: number;
}

const AnimatedBox: React.FC<AnimatedBoxProps> = ({ 
  children, 
  animation = 'fadeInUp', 
  delay = 0, 
  duration = 0.8,
  sx,
  ...props 
}) => {
  const getKeyframes = (animationType: AnimationType) => {
    const keyframes = {
      slideInFromLeft: {
        '@keyframes slideInFromLeft': {
          from: { transform: 'translateX(-100%)', opacity: 0 },
          to: { transform: 'translateX(0)', opacity: 1 }
        }
      },
      slideInFromRight: {
        '@keyframes slideInFromRight': {
          from: { transform: 'translateX(100%)', opacity: 0 },
          to: { transform: 'translateX(0)', opacity: 1 }
        }
      },
      fadeInUp: {
        '@keyframes fadeInUp': {
          from: { transform: 'translateY(50px)', opacity: 0 },
          to: { transform: 'translateY(0)', opacity: 1 }
        }
      },
      fadeInDown: {
        '@keyframes fadeInDown': {
          from: { transform: 'translateY(-50px)', opacity: 0 },
          to: { transform: 'translateY(0)', opacity: 1 }
        }
      },
      bounce: {
        '@keyframes bounce': {
          '0%, 20%, 53%, 80%, 100%': { transform: 'translate3d(0,0,0)' },
          '40%, 43%': { transform: 'translate3d(0, -30px, 0)' },
          '70%': { transform: 'translate3d(0, -15px, 0)' },
          '90%': { transform: 'translate3d(0, -4px, 0)' }
        }
      },
      pulse: {
        '@keyframes pulse': {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
          '100%': { transform: 'scale(1)' }
        }
      },
      shake: {
        '@keyframes shake': {
          '0%, 100%': { transform: 'translateX(0)' },
          '10%, 30%, 50%, 70%, 90%': { transform: 'translateX(-10px)' },
          '20%, 40%, 60%, 80%': { transform: 'translateX(10px)' }
        }
      }
    };
    return keyframes[animationType];
  };

  return (
    <Box
      sx={{
        animation: `${animation} ${duration}s ease-out ${delay}s both`,
        ...getKeyframes(animation),
        ...sx
      }}
      {...props}
    >
      {children}
    </Box>
  );
};

export default AnimatedBox;