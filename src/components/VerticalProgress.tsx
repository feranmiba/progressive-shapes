import React from 'react';

export interface VerticalProgressProps {
  currentStep: number;
  totalSteps: number;
  width?: number;
  backgroundColor?: string;
  progressColor?: string;
  className?: string;
}

const VerticalProgress: React.FC<VerticalProgressProps> = ({
  currentStep,
  totalSteps,
  width = 8,
  backgroundColor = '#D9D9D9',
  progressColor = '#6CBB2D',
  className = ''
}) => {
  const percentage = (currentStep / totalSteps) * 100;

  return (
    <div
      className={`h-full flex flex-col justify-end rounded-full overflow-hidden ${className}`}
      style={{ width }}
    >
      <div className="w-full h-full" style={{ backgroundColor }}>
        <div
          className="w-full transition-all duration-300"
          style={{
            height: `${percentage}%`,
            backgroundColor: progressColor,
          }}
        />
      </div>
    </div>
  );
};

export default VerticalProgress;
