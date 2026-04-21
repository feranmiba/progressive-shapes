import React from "react";

export interface CloudProps {
    currentStep: number;
    totalSteps: number;
    size?: number;
    backgroundColor?: string;
    progressColor?: string;
    className?: string;
}

const Cloud: React.FC<CloudProps> = ({
    currentStep,
    totalSteps,
    size = 50,
    backgroundColor = '#D9D9D9',
    progressColor = '#3498DB',
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
                        <path d="M25,60 C25,45 35,35 50,35 C55,20 75,20 80,35 C95,35 95,55 85,65 C95,75 85,90 70,85 C65,95 45,95 40,85 C25,90 10,75 25,60 Z" />
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

export default Cloud;
