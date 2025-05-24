import React from 'react';

export interface CircularProgressProps {
  currentStep: number;
  totalSteps: number;
  radius?: number;                  // optional, default 23
  stroke?: number;                  // optional, default 6
  strokeBackgroundColor?: string;  // optional, default '#D9D9D9'
  strokeProgressColor?: string;    // optional, default '#6CBB2D'
  className?: string;               // optional, for outer div styling
  textClassName?: string;           // optional, for text styling
}

const CircularProgress: React.FC<CircularProgressProps> = ({
  currentStep,
  totalSteps,
  radius = 23,
  stroke = 6,
  strokeBackgroundColor = '#D9D9D9',
  strokeProgressColor = '#6CBB2D',
  className = 'relative w-[48px] h-[48px]',
  textClassName = 'absolute right-[12px] top-4 flex items-center justify-center text-xs font-semibold text-[#344350]'
}) => {
  const normalizedRadius = radius - stroke * 0.9;
  const circumference = normalizedRadius * 2 * Math.PI;
  const progress = (currentStep / totalSteps) * circumference;

  return (
    <div className={className}>
      <svg
        height={radius * 2}
        width={radius * 2}
        role="progressbar"
        aria-valuenow={currentStep}
        aria-valuemax={totalSteps}
      >
        <circle
          stroke={strokeBackgroundColor}
          fill="transparent"
          strokeWidth={stroke}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        <circle
          stroke={strokeProgressColor}
          fill="transparent"
          strokeWidth={stroke}
          strokeDasharray={circumference}
          strokeDashoffset={circumference - progress}
          strokeLinecap="round"
          r={normalizedRadius}
          cx={radius}
          cy={radius}
          className="transition-all duration-300"
        />
      </svg>
      <div className={textClassName}>
        {currentStep}/{totalSteps}
      </div>
    </div>
  );
};

export default CircularProgress;

