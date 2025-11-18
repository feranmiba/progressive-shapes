'use strict';

var React = require('react');

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
        React.createElement("div", { className: "w-full h-full", style: { backgroundColor } },
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
            React.createElement("rect", { width: `${percentage}%`, height: "100", fill: progressColor, clipPath: `url(#${clipId})` }))));
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
            React.createElement("rect", { y: 100 - percentage, width: "100", height: percentage, fill: progressColor, clipPath: `url(#${clipId})` }))));
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
            React.createElement("rect", { y: 100 - percentage, width: "100", height: percentage, fill: progressColor, clipPath: `url(#${clipId})` }))));
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
            React.createElement("rect", { y: 100 - percentage, width: "100", height: percentage, fill: progressColor, clipPath: `url(#${clipId})` }))));
};

const Donut = ({ currentStep, totalSteps, size = 50, backgroundColor = '#D9D9D9', progressColor = '#FFA500', className = '' }) => {
    const percentage = (currentStep / totalSteps) * 100;
    const clipId = React.useId();
    return (React.createElement("div", { className: `relative inline-block ${className}`, style: { width: size, height: size } },
        React.createElement("svg", { viewBox: "0 0 100 100", xmlns: "http://www.w3.org/2000/svg", className: "w-full h-full" },
            React.createElement("defs", null,
                React.createElement("clipPath", { id: clipId },
                    React.createElement("circle", { cx: "50", cy: "50", r: "40" }),
                    React.createElement("circle", { cx: "50", cy: "50", r: "20", fill: "white" }))),
            React.createElement("rect", { width: "100", height: "100", fill: backgroundColor, clipPath: `url(#${clipId})` }),
            React.createElement("rect", { y: 100 - percentage, width: "100", height: percentage, fill: progressColor, clipPath: `url(#${clipId})` }))));
};

exports.CircularProgress = CircularProgress;
exports.Diamond = Diamond;
exports.Donut = Donut;
exports.Heart = Heart;
exports.HorizontalProgress = HorizontalProgress;
exports.Star = Star;
exports.Triangle = Triangle;
exports.VerticalProgress = VerticalProgress;
//# sourceMappingURL=index.js.map
