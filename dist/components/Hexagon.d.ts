import React from "react";
export interface HexagonProps {
    currentStep: number;
    totalSteps: number;
    size?: number;
    backgroundColor?: string;
    progressColor?: string;
    className?: string;
}
declare const Hexagon: React.FC<HexagonProps>;
export default Hexagon;
