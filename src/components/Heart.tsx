import React from "react";

export interface HeartProps {
    currentStep: number;
    totalSteps: number;
    size?: number;
    backgroundColor?: string;
    progressColor?: string;
    className?: string;
}


const Heart:  React.FC<HeartProps> = ({
    currentStep,
    totalSteps,
    size = 50,
    backgroundColor = '#D9D9D9',
    progressColor = '#FF0000',
    className = ''

}) => {

    const percentage = (currentStep / totalSteps) * 100;
    const clipId = React.useId();


    return (
        <div className={`relative inline-block ${className}`} style={{ width: size, height: size }}>
            <svg
                viewBox="0 0 100 100"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full"
            >
                <defs>
                <clipPath id={clipId}>
                        <path d="M50,90 C50,90 10,65 10,40 C10,25 20,15 30,15 C40,15 45,20 50,30 C55,20 60,15 70,15 C80,15 90,25 90,40 C90,65 50,90 50,90 Z" />
                    </clipPath>
                </defs>
                <rect
                    width="100"
                    height="100"
                    fill={backgroundColor}
                    clipPath={`url(#${clipId})`}
                />
                <rect
                    y={100 - percentage}
                    width="100"
                    height={percentage}
                    fill={progressColor}
                    clipPath={`url(#${clipId})`}
                />
            </svg>
        </div>
    )

}

export default Heart;