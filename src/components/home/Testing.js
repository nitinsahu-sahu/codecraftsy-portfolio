import React, { useEffect } from 'react'

const ProgressCircle = ({ degree, color, label, percentage }) => {
    useEffect(() => {
        let progressElement = document.querySelector(`.circle[data-label="${label}"]`);
        let degree = 0;
        const interval = setInterval(() => {
            degree += 1;
            if (degree > percentage) {
                clearInterval(interval);
                return;
            }
            progressElement.style.background = `conic-gradient(${color} ${degree}%, #222 0%)`;
            progressElement.querySelector('.number').innerHTML = `${degree}<span>%</span>`;
            progressElement.querySelector('.number').style.color = color;
        }, 50);
        return () => clearInterval(interval);
    }, [percentage, color, label]);

    return (
        <div className="circle relative flex flex-col items-center justify-center w-40 h-40 rounded-full" data-degree={degree} data-color={color} data-label={label}>
            <div className="circle-bg absolute inset-1.5 rounded-full bg-gray-800 opacity-80"></div>
            <div className="circle-inner absolute w-30 h-30 bg-gray-900 border-4 border-gray-700 rounded-full shadow-inner"></div>
            <h2 className="number relative text-white z-10 text-2xl">{degree}<span className="text-xs font-medium">%</span></h2>
            <h4 className="relative text-white z-10 text-sm font-medium uppercase leading-tight mt-2">{label}</h4>
        </div>
    );
};
const Testing = () => {
    const progressCircles = [
        { degree: 86, color: "#04fc43", label: "HTML/CSS", percentage: 95 },
        { degree: 90, color: "#f1c40f", label: "LARAVEL", percentage: 85 },
        { degree: 80, color: "#e74c3c", label: "JavaScript", percentage: 80 },
        { degree: 70, color: "#3498db", label: "MERN", percentage: 75 },
        { degree: 60, color: "#9b59b6", label: "WORDPRESS", percentage: 70 },
    ];
    return (
        <div className="container flex justify-center mx-auto px-4 py-8">
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {progressCircles.map((circle, index) => (
                    <ProgressCircle key={index} {...circle} />
                ))}
            </div>
        </div>
    );
};
export default Testing