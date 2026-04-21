import React from "react";

export interface DonutProps {
    currentStep: number;
    totalSteps: number;
    size?: number;
    backgroundColor?: string;
    progressColor?: string;
    className?: string;
}


const Donut: React.FC<DonutProps> = ({
    currentStep,
    totalSteps,
    size = 50,
    backgroundColor = '#D9D9D9',
    progressColor = '#FFA500',
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
                        <path 
                            fillRule="evenodd" 
                            clipRule="evenodd" 
                            d="M 50,50 m -40,0 a 40,40 0 1,0 80,0 a 40,40 0 1,0 -80,0 M 50,50 m -20,0 a 20,20 0 1,1 40,0 a 20,20 0 1,1 -40,0" 
                        />
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
                    style={{ transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)' }}
                />
            </svg>
        </div>
    );
}
export default Donut;