import React from 'react';

const CircularProgress = ({ currentStep, totalSteps, radius = 23, stroke = 6, strokeBackgroundColor = '#D9D9D9', strokeProgressColor = '#6CBB2D', className = 'relative w-[48px] h-[48px]', textClassName = 'absolute right-[12px] top-4 flex items-center justify-center text-xs font-semibold text-[#344350]' }) => {
    const normalizedRadius = radius - stroke * 0.9;
    const circumference = normalizedRadius * 2 * Math.PI;
    const progress = (currentStep / totalSteps) * circumference;
    return (React.createElement("div", { className: className },
        React.createElement("svg", { height: radius * 2, width: radius * 2, role: "progressbar", "aria-valuenow": currentStep, "aria-valuemax": totalSteps },
            React.createElement("circle", { stroke: strokeBackgroundColor, fill: "transparent", strokeWidth: stroke, r: normalizedRadius, cx: radius, cy: radius }),
            React.createElement("circle", { stroke: strokeProgressColor, fill: "transparent", strokeWidth: stroke, strokeDasharray: circumference, strokeDashoffset: circumference - progress, strokeLinecap: "round", r: normalizedRadius, cx: radius, cy: radius, className: "transition-all duration-300" })),
        React.createElement("div", { className: textClassName },
            currentStep,
            "/",
            totalSteps)));
};

export { CircularProgress };
//# sourceMappingURL=index.esm.js.map
