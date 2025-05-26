import React from 'react';
export interface HorizontalProgressProps {
    currentStep: number;
    totalSteps: number;
    height?: number;
    backgroundColor?: string;
    progressColor?: string;
    className?: string;
}
declare const HorizontalProgress: React.FC<HorizontalProgressProps>;
export default HorizontalProgress;
