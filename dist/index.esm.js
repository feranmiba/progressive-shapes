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

const HorizontalProgress = ({ currentStep, totalSteps, height = 8, backgroundColor = '#D9D9D9', progressColor = '#6CBB2D', className = '' }) => {
    const percentage = (currentStep / totalSteps) * 100;
    return (React.createElement("div", { className: `w-full rounded-full overflow-hidden ${className}`, style: { height } },
        React.createElement("div", { className: "h-full w-full", style: { backgroundColor } },
            React.createElement("div", { className: "h-full transition-all duration-300", style: {
                    width: `${percentage}%`,
                    backgroundColor: progressColor,
                } }))));
};

const VerticalProgress = ({ currentStep, totalSteps, width = 8, backgroundColor = '#D9D9D9', progressColor = '#6CBB2D', className = '' }) => {
    const percentage = (currentStep / totalSteps) * 100;
    return (React.createElement("div", { className: `flex flex-col justify-end rounded-full overflow-hidden ${className}`, style: { width, height: '100%', minHeight: 120 } },
        React.createElement("div", { className: "w-full h-full flex flex-col-reverse", style: { backgroundColor } },
            React.createElement("div", { className: "w-full transition-all duration-300", style: {
                    height: `${percentage}%`,
                    backgroundColor: progressColor,
                } }))));
};

const Star = ({ currentStep, totalSteps, size = 50, backgroundColor = '#D9D9D9', progressColor = '#FFD700', className = '' }) => {
    const percentage = (currentStep / totalSteps) * 100;
    const clipId = React.useId();
    return (React.createElement("div", { className: `relative inline-block ${className}`, style: { width: size, height: size } },
        React.createElement("svg", { viewBox: "0 0 100 100", xmlns: "http://www.w3.org/2000/svg", className: "w-full h-full" },
            React.createElement("defs", null,
                React.createElement("clipPath", { id: clipId },
                    React.createElement("polygon", { points: "50,5 61,39 98,39 67,59 79,91 50,70 21,91 33,59 2,39 39,39" }))),
            React.createElement("rect", { width: "100", height: "100", fill: backgroundColor, clipPath: `url(#${clipId})` }),
            React.createElement("rect", { y: 100 - percentage, width: "100", height: percentage, fill: progressColor, clipPath: `url(#${clipId})`, style: { transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)' } }))));
};

const Heart = ({ currentStep, totalSteps, size = 50, backgroundColor = '#D9D9D9', progressColor = '#FF0000', className = '' }) => {
    const percentage = (currentStep / totalSteps) * 100;
    const clipId = React.useId();
    return (React.createElement("div", { className: `relative inline-block ${className}`, style: { width: size, height: size } },
        React.createElement("svg", { viewBox: "0 0 100 100", xmlns: "http://www.w3.org/2000/svg", className: "w-full h-full" },
            React.createElement("defs", null,
                React.createElement("clipPath", { id: clipId },
                    React.createElement("path", { d: "M50,90 C50,90 10,65 10,40 C10,25 20,15 30,15 C40,15 45,20 50,30 C55,20 60,15 70,15 C80,15 90,25 90,40 C90,65 50,90 50,90 Z" }))),
            React.createElement("rect", { width: "100", height: "100", fill: backgroundColor, clipPath: `url(#${clipId})` }),
            React.createElement("rect", { y: 100 - percentage, width: "100", height: percentage, fill: progressColor, clipPath: `url(#${clipId})`, style: { transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)' } }))));
};

const Diamond = ({ currentStep, totalSteps, size = 50, backgroundColor = '#D9D9D9', progressColor = '#4A90E2', className = '' }) => {
    const percentage = (currentStep / totalSteps) * 100;
    const clipId = React.useId();
    return (React.createElement("div", { className: `relative inline-block ${className}`, style: { width: size, height: size } },
        React.createElement("svg", { viewBox: "0 0 100 100", xmlns: "http://www.w3.org/2000/svg", className: "w-full h-full" },
            React.createElement("defs", null,
                React.createElement("clipPath", { id: clipId },
                    React.createElement("polygon", { points: "50,0 100,50 50,100 0,50" }))),
            React.createElement("rect", { width: "100", height: "100", fill: backgroundColor, clipPath: `url(#${clipId})` }),
            React.createElement("rect", { y: 100 - percentage, width: "100", height: percentage, fill: progressColor, clipPath: `url(#${clipId})`, style: { transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)' } }))));
};

const Triangle = ({ currentStep, totalSteps, size = 50, backgroundColor = '#D9D9D9', progressColor = '#00FF00', className = '' }) => {
    const percentage = (currentStep / totalSteps) * 100;
    const clipId = React.useId();
    return (React.createElement("div", { className: `relative inline-block ${className}`, style: { width: size, height: size } },
        React.createElement("svg", { viewBox: "0 0 100 100", xmlns: "http://www.w3.org/2000/svg", className: "w-full h-full" },
            React.createElement("defs", null,
                React.createElement("clipPath", { id: clipId },
                    React.createElement("polygon", { points: "50,0 100,100 0,100" }))),
            React.createElement("rect", { width: "100", height: "100", fill: backgroundColor, clipPath: `url(#${clipId})` }),
            React.createElement("rect", { y: 100 - percentage, width: "100", height: percentage, fill: progressColor, clipPath: `url(#${clipId})`, style: { transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)' } }))));
};

const Donut = ({ currentStep, totalSteps, size = 50, backgroundColor = '#D9D9D9', progressColor = '#FFA500', className = '' }) => {
    const percentage = (currentStep / totalSteps) * 100;
    const clipId = React.useId();
    return (React.createElement("div", { className: `relative inline-block ${className}`, style: { width: size, height: size } },
        React.createElement("svg", { viewBox: "0 0 100 100", xmlns: "http://www.w3.org/2000/svg", className: "w-full h-full" },
            React.createElement("defs", null,
                React.createElement("clipPath", { id: clipId },
                    React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M 50,50 m -40,0 a 40,40 0 1,0 80,0 a 40,40 0 1,0 -80,0 M 50,50 m -20,0 a 20,20 0 1,1 40,0 a 20,20 0 1,1 -40,0" }))),
            React.createElement("rect", { width: "100", height: "100", fill: backgroundColor, clipPath: `url(#${clipId})` }),
            React.createElement("rect", { y: 100 - percentage, width: "100", height: percentage, fill: progressColor, clipPath: `url(#${clipId})`, style: { transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)' } }))));
};

const Hexagon = ({ currentStep, totalSteps, size = 50, backgroundColor = '#D9D9D9', progressColor = '#8E44AD', className = '' }) => {
    const percentage = (currentStep / totalSteps) * 100;
    const clipId = React.useId();
    return (React.createElement("div", { className: `relative inline-block ${className}`, style: { width: size, height: size } },
        React.createElement("svg", { viewBox: "0 0 100 100", xmlns: "http://www.w3.org/2000/svg", className: "w-full h-full" },
            React.createElement("defs", null,
                React.createElement("clipPath", { id: clipId },
                    React.createElement("polygon", { points: "25,5 75,5 100,50 75,95 25,95 0,50" }))),
            React.createElement("rect", { width: "100", height: "100", fill: backgroundColor, clipPath: `url(#${clipId})` }),
            React.createElement("rect", { y: 100 - percentage, width: "100", height: percentage, fill: progressColor, clipPath: `url(#${clipId})`, style: { transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)' } }))));
};

const Pentagon = ({ currentStep, totalSteps, size = 50, backgroundColor = '#D9D9D9', progressColor = '#E67E22', className = '' }) => {
    const percentage = (currentStep / totalSteps) * 100;
    const clipId = React.useId();
    return (React.createElement("div", { className: `relative inline-block ${className}`, style: { width: size, height: size } },
        React.createElement("svg", { viewBox: "0 0 100 100", xmlns: "http://www.w3.org/2000/svg", className: "w-full h-full" },
            React.createElement("defs", null,
                React.createElement("clipPath", { id: clipId },
                    React.createElement("polygon", { points: "50,5 100,38 81,95 19,95 0,38" }))),
            React.createElement("rect", { width: "100", height: "100", fill: backgroundColor, clipPath: `url(#${clipId})` }),
            React.createElement("rect", { y: 100 - percentage, width: "100", height: percentage, fill: progressColor, clipPath: `url(#${clipId})`, style: { transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)' } }))));
};

const Cloud = ({ currentStep, totalSteps, size = 50, backgroundColor = '#D9D9D9', progressColor = '#3498DB', className = '' }) => {
    const percentage = (currentStep / totalSteps) * 100;
    const clipId = React.useId();
    return (React.createElement("div", { className: `relative inline-block ${className}`, style: { width: size, height: size } },
        React.createElement("svg", { viewBox: "0 0 100 100", xmlns: "http://www.w3.org/2000/svg", className: "w-full h-full" },
            React.createElement("defs", null,
                React.createElement("clipPath", { id: clipId },
                    React.createElement("path", { d: "M25,60 C25,45 35,35 50,35 C55,20 75,20 80,35 C95,35 95,55 85,65 C95,75 85,90 70,85 C65,95 45,95 40,85 C25,90 10,75 25,60 Z" }))),
            React.createElement("rect", { width: "100", height: "100", fill: backgroundColor, clipPath: `url(#${clipId})` }),
            React.createElement("rect", { y: 100 - percentage, width: "100", height: percentage, fill: progressColor, clipPath: `url(#${clipId})`, style: { transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)' } }))));
};

const Moon = ({ currentStep, totalSteps, size = 50, backgroundColor = '#D9D9D9', progressColor = '#F1C40F', className = '' }) => {
    const percentage = (currentStep / totalSteps) * 100;
    const clipId = React.useId();
    return (React.createElement("div", { className: `relative inline-block ${className}`, style: { width: size, height: size } },
        React.createElement("svg", { viewBox: "0 0 100 100", xmlns: "http://www.w3.org/2000/svg", className: "w-full h-full" },
            React.createElement("defs", null,
                React.createElement("clipPath", { id: clipId },
                    React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M80,50 C80,33.4 66.6,20 50,20 C33.4,20 20,33.4 20,50 C20,66.6 33.4,80 50,80 C66.6,80 80,66.6 80,50 Z M65,50 C65,58.3 58.3,65 50,65 C41.7,65 35,58.3 35,50 C35,41.7 41.7,35 50,35 C58.3,35 65,41.7 65,50 Z", transform: "rotate(-30 50 50)" }),
                    React.createElement("path", { d: "M50,10 A40,40 0 1,0 50,90 A30,30 0 1,1 50,10 Z" })),
                React.createElement("clipPath", { id: `${clipId}-better` },
                    React.createElement("path", { d: "M70,20 C50,20 30,35 30,55 C30,75 50,90 70,90 C60,80 55,70 55,55 C55,40 60,30 70,20 Z" }))),
            React.createElement("rect", { width: "100", height: "100", fill: backgroundColor, clipPath: `url(#${clipId}-better)` }),
            React.createElement("rect", { y: 100 - percentage, width: "100", height: percentage, fill: progressColor, clipPath: `url(#${clipId}-better)`, style: { transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)' } }))));
};

export { CircularProgress, Cloud, Diamond, Donut, Heart, Hexagon, HorizontalProgress, Moon, Pentagon, Star, Triangle, VerticalProgress };
//# sourceMappingURL=index.esm.js.map
