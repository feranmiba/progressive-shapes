import React from 'react';
export interface VerticalProgressProps {
    currentStep: number;
    totalSteps: number;
    width?: number;
    backgroundColor?: string;
    progressColor?: string;
    className?: string;
}
declare const VerticalProgress: React.FC<VerticalProgressProps>;
export default VerticalProgress;
