import React from "react";
export interface HeartProps {
    currentStep: number;
    totalSteps: number;
    size?: number;
    backgroundColor?: string;
    progressColor?: string;
    className?: string;
}
declare const Heart: React.FC<HeartProps>;
export default Heart;
