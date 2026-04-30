import React from "react";
export interface CloudProps {
    currentStep: number;
    totalSteps: number;
    size?: number;
    backgroundColor?: string;
    progressColor?: string;
    className?: string;
}
declare const Cloud: React.FC<CloudProps>;
export default Cloud;
