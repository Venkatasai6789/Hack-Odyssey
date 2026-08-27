import { useGSAP } from "@gsap/react";
import gsap from "gsap/all";
import { useMediaQuery } from "react-responsive";
import { welcomeLinesLG, welcomeLinesSM } from "../../constants/welcome";
import w1 from "../../assets/welcome-1.jpg";
import w2 from "../../assets/welcome-2.jpg";

const Welcome = () => {
    const isMobile = useMediaQuery({ maxWidth: 768 });
    const welcomeLines = isMobile ? welcomeLinesSM : welcomeLinesLG;

    useGSAP(() => {
        const lines = gsap.utils.toArray(".clip-text-welcome");
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".welcome-section",
                start: "top 70%",
                end: "bottom 80%",
                scrub: 1,
            },
        });

        tl.to(lines, {
            clipPath: "inset(0% 0% 0% 0%)",
            ease: "none",
            stagger: 0.25,
        });

        tl.from(".welcome-image-card", {
            y: 30,
            opacity: 0.8,
            scale: 0.97,
            stagger: 0.15,
            ease: "power2.out",
            duration: 0.8,
        }, "-=0.3");

        tl.from(".welcome-statement", {
            y: 20,
            opacity: 0.7,
            ease: "power2.out",
            duration: 0.8,
        }, "<");
    });

    return (
        <div className="welcome-section w-full min-h-[110vh] text-[#2A2725] md:px-10 px-6 pt-10 pb-20">
            {/* Eyebrow Label */}
            <div className="mb-4 md:mb-6">
                <p className="text-xs md:text-sm font-semibold tracking-[0.25em] text-[#b1a696] uppercase">
                    THE ODYSSEY
                </p>
            </div>

            {/* Editorial Statement with Interactive Scroll Reveal */}
            <div className="flex flex-col gap-2 tracking-[-4] leading-2">
                <div className="w-full md:w-[92%] lg:w-[86%] md:text-[60px] lg:text-[64px] text-[32px] welcome-line">
                    <div className="w-full welcome-text flex flex-col justify-center items-start">
                        {welcomeLines.map((text, index) => (
                            <span key={index} className="relative block text-darkBrown md:tracking-[-0.010em] tracking-[0.015em]">
                                {text}
                                <span className="clip-text-welcome md:tracking-[-0.010em] tracking-[0.015em]">{text}</span>
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            {/* Second Part: Two Organic Visuals + Statement */}
            <div className="flex md:flex-row flex-col justify-between items-center md:p-4 md:mt-24 mt-14 gap-8">
                {/* Organic Hackathon Visuals */}
                <div className="flex flex-row justify-center items-center gap-3 welcome-image-card">
                    <div className="overflow-hidden md:rounded-[8rem] rounded-[9rem] md:w-60 w-44 aspect-[4/3] shadow-lg border border-white/5">
                        <img
                            src={w1}
                            alt="Students collaborating at Hack Odyssey"
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                        />
                    </div>
                    <div className="overflow-hidden md:rounded-[8rem] rounded-[9rem] md:w-60 w-44 aspect-[4/3] shadow-lg border border-white/5">
                        <img
                            src={w2}
                            alt="Hackathon coding environment"
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                        />
                    </div>
                </div>

                {/* Right Statement Block */}
                <div className="md:w-1/2 w-full md:mt-0 mt-8 welcome-statement flex flex-col justify-center">
                    <p className="md:text-[2rem] text-[1.35rem] text-[#b1a696] md:leading-[1.25] md:pr-16 font-normal leading-[30px] tracking-[-0.2px]">
                        <span className="text-[#f4efe7] font-medium">One room.</span><br />
                        <span className="text-[#f4efe7] font-medium">Hundreds of ideas.</span><br />
                        <span className="text-[#b1a696]">Twenty-four hours to build them.</span>
                    </p>
                    <span className="text-xs md:text-sm tracking-[0.22em] font-semibold text-[#8e8579] uppercase mt-6 block">
                        KARE &middot; ACM STUDENT CHAPTER
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Welcome;