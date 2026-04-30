import React from "react";
export interface PentagonProps {
    currentStep: number;
    totalSteps: number;
    size?: number;
    backgroundColor?: string;
    progressColor?: string;
    className?: string;
}
declare const Pentagon: React.FC<PentagonProps>;
export default Pentagon;
