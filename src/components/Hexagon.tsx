import React from "react";

export interface HexagonProps {
    currentStep: number;
    totalSteps: number;
    size?: number;
    backgroundColor?: string;
    progressColor?: string;
    className?: string;
}

const Hexagon: React.FC<HexagonProps> = ({
    currentStep,
    totalSteps,
    size = 50,
    backgroundColor = '#D9D9D9',
    progressColor = '#8E44AD',
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
                        <polygon points="25,5 75,5 100,50 75,95 25,95 0,50" />
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

export default Hexagon;
