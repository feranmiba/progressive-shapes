import React from "react";
export interface MoonProps {
    currentStep: number;
    totalSteps: number;
    size?: number;
    backgroundColor?: string;
    progressColor?: string;
    className?: string;
}
declare const Moon: React.FC<MoonProps>;
export default Moon;
