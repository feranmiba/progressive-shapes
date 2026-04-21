import React from "react";

export interface MoonProps {
    currentStep: number;
    totalSteps: number;
    size?: number;
    backgroundColor?: string;
    progressColor?: string;
    className?: string;
}

const Moon: React.FC<MoonProps> = ({
    currentStep,
    totalSteps,
    size = 50,
    backgroundColor = '#D9D9D9',
    progressColor = '#F1C40F',
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
                            d="M80,50 C80,33.4 66.6,20 50,20 C33.4,20 20,33.4 20,50 C20,66.6 33.4,80 50,80 C66.6,80 80,66.6 80,50 Z M65,50 C65,58.3 58.3,65 50,65 C41.7,65 35,58.3 35,50 C35,41.7 41.7,35 50,35 C58.3,35 65,41.7 65,50 Z" 
                            transform="rotate(-30 50 50)"
                        />
                        {/* Actually a real moon shape would be better */}
                        <path 
                             d="M50,10 A40,40 0 1,0 50,90 A30,30 0 1,1 50,10 Z"
                        />
                    </clipPath>
                    {/* Overriding with a better moon path */}
                    <clipPath id={`${clipId}-better`}>
                        <path d="M70,20 C50,20 30,35 30,55 C30,75 50,90 70,90 C60,80 55,70 55,55 C55,40 60,30 70,20 Z" />
                    </clipPath>
                </defs>
                <rect
                    width="100"
                    height="100"
                    fill={backgroundColor}
                    clipPath={`url(#${clipId}-better)`}
                />
                <rect
                    y={100 - percentage}
                    width="100"
                    height={percentage}
                    fill={progressColor}
                    clipPath={`url(#${clipId}-better)`}
                    style={{ transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)' }}
                />
            </svg>
        </div>
    );
}

export default Moon;
