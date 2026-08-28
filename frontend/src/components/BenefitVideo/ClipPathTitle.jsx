import React from 'react';

const ClipPathTitle = ({
    title,
    color = "#faeade",
    bg = "#c88e64",
    className = "",
    borderColor = "#222123"
}) => {
    return (
        <div className="2xl:text-[8.5rem] lg:text-[7rem] md:text-8xl sm:text-6xl text-[34px] font-bold uppercase leading-[1.1] md:leading-[9vw] tracking-[-.35vw] select-none">
            <div
                style={{ 
                    clipPath: "polygon(50% 0%, 50% 0, 50% 100%, 50% 100%)", 
                    borderColor: borderColor 
                }}
                className={`${className} border-[3px] md:border-[.5vw] text-nowrap opacity-0 shadow-2xl transition-all duration-300`}
            >
                <div 
                    className="pb-3 md:pb-5 px-4 sm:px-8 md:px-14 pt-2 md:pt-0" 
                    style={{ backgroundColor: bg }}
                >
                    <h2 className="font-bold tracking-tight" style={{ color: color }}>
                        {title}
                    </h2>
                </div>
            </div>
        </div>
    );
};

export default ClipPathTitle;
