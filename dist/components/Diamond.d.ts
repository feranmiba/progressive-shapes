import React from "react";
export interface DiamondProps {
    currentStep: number;
    totalSteps: number;
    size?: number;
    backgroundColor?: string;
    progressColor?: string;
    className?: string;
}
declare const Diamond: React.FC<DiamondProps>;
export default Diamond;
