import React from 'react';

export interface HorizontalProgressProps {
  currentStep: number;
  totalSteps: number;
  height?: number;
  backgroundColor?: string;
  progressColor?: string;
  className?: string;
}

const HorizontalProgress: React.FC<HorizontalProgressProps> = ({
  currentStep,
  totalSteps,
  height = 8,
  backgroundColor = '#D9D9D9',
  progressColor = '#6CBB2D',
  className = ''
}) => {
  const percentage = (currentStep / totalSteps) * 100;

  return (
    <div
      className={`w-full rounded-full overflow-hidden ${className}`}
      style={{ height }}
    >
      <div
        className="h-full w-full"
        style={{ backgroundColor }}
      >
        <div
          className="h-full transition-all duration-300"
          style={{
            width: `${percentage}%`,
            backgroundColor: progressColor,
          }}
        />
      </div>
    </div>
  );
};

export default HorizontalProgress;


