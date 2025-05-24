import React from 'react';
export interface CircularProgressProps {
    currentStep: number;
    totalSteps: number;
    radius?: number;
    stroke?: number;
    strokeBackgroundColor?: string;
    strokeProgressColor?: string;
    className?: string;
    textClassName?: string;
}
declare const CircularProgress: React.FC<CircularProgressProps>;
export default CircularProgress;
