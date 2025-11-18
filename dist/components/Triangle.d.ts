import React from "react";
export interface TriangleProps {
    currentStep: number;
    totalSteps: number;
    size?: number;
    backgroundColor?: string;
    progressColor?: string;
    className?: string;
}
declare const Triangle: React.FC<TriangleProps>;
export default Triangle;
