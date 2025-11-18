import React from "react";

export interface StarProps {
    currentStep: number;
    totalSteps: number;
    size?: number;
    backgroundColor?: string;
    progressColor?: string;
    className?: string;
}


const Star: React.FC<StarProps> = ({
    currentStep,
    totalSteps,
    size = 50,
    backgroundColor = '#D9D9D9',
    progressColor = '#FFD700',
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
                      <polygon points="50,5 61,39 98,39 67,59 79,91 50,70 21,91 33,59 2,39 39,39" />
                    </clipPath>
                </defs>
                <rect
                    width="100"
                    height="100"
                    fill={backgroundColor}
                    clipPath={`url(#${clipId})`}
               />
                <rect
                    width={`${percentage}%`}
                    height="100"
                    fill={progressColor}
                    clipPath={`url(#${clipId})`}
                 />
            </svg>
        </div>
    );
}


export default Star;