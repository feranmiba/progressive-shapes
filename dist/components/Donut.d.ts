import React from "react";
export interface DonutProps {
    currentStep: number;
    totalSteps: number;
    size?: number;
    backgroundColor?: string;
    progressColor?: string;
    className?: string;
}
declare const Donut: React.FC<DonutProps>;
export default Donut;
