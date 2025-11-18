import React from "react";
export interface StarProps {
    currentStep: number;
    totalSteps: number;
    size?: number;
    backgroundColor?: string;
    progressColor?: string;
    className?: string;
}
declare const Star: React.FC<StarProps>;
export default Star;
