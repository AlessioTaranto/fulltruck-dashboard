import { styled } from '@mui/system';
import React from 'react';

const GradientLineFooter = styled('div')`
  height: 4px;
  background: linear-gradient(90deg, #ff5722, #ff9800, #ff5722);
  background-size: 200% 200%;
  animation: gradientAnimation 6s ease infinite;

  @keyframes gradientAnimation {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
`;

const GradientLineHeader = styled('div')`
  height: 4px;
  background: linear-gradient(90deg, #00bfff, #1e90ff, #00bfff);
  background-size: 200% 200%;
  animation: gradientAnimation 6s ease infinite;

  @keyframes gradientAnimation {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
`;

/**
 * Renders a gradient line bar based on the provided position.
 *
 * @param {Object} props - The properties object.
 * @param {string} props.position - The position of the gradient line bar ('header' or 'footer').
 * @return {JSX.Element} The rendered gradient line bar.
 */
const GradientLineBar: React.FC<{ position: 'header' | 'footer' }> = ({ position }) => {
  return position === 'header' ? <GradientLineHeader /> : <GradientLineFooter />;
};

export default GradientLineBar;
