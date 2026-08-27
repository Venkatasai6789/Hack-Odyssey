import { useGSAP } from "@gsap/react";
import gsap from "gsap/all";
import { useMediaQuery } from "react-responsive";
import { welcomeLinesLG, welcomeLinesSM } from "../../constants/welcome";
import w1 from "../../assets/welcome-1.jpg";
import w2 from "../../assets/welcome-2.jpg";
import section2Bg from "../../assets/section_2.png";

const Welcome = () => {
    const isMobile = useMediaQuery({ maxWidth: 768 });
    const welcomeLines = isMobile ? welcomeLinesSM : welcomeLinesLG;

    useGSAP(() => {
        const lines = gsap.utils.toArray(".clip-text-welcome");
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".welcome-section",
                start: "top 75%",
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
        <section className="welcome-section w-full min-h-screen text-[#f4efe7] px-6 sm:px-10 md:px-14 lg:px-20 pt-24 md:pt-32 pb-28 relative overflow-hidden bg-[#07050e]">
            {/* Cinematic Background Layer */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-90 pointer-events-none z-0"
                style={{ backgroundImage: `url(${section2Bg})` }}
            />

            {/* Seamless Top Blend with Hero Section */}
            <div className="absolute inset-x-0 top-0 h-40 md:h-56 bg-gradient-to-b from-[#0a0714] via-[#0a0714]/70 to-transparent pointer-events-none z-1" />

            {/* Seamless Bottom Blend with Next Section */}
            <div className="absolute inset-x-0 bottom-0 h-40 md:h-56 bg-gradient-to-t from-[#181717] via-[#181717]/70 to-transparent pointer-events-none z-1" />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Eyebrow with Purple Accent Line */}
                <div className="flex items-center gap-3 mb-6 md:mb-8">
                    <span className="w-8 md:w-10 h-[2px] bg-[#a855f7] inline-block rounded-full shadow-[0_0_8px_#a855f7]"></span>
                    <p className="text-xs md:text-sm font-semibold tracking-[0.25em] text-[#a79bbd] uppercase">
                        THE ODYSSEY
                    </p>
                </div>

                {/* Editorial Statement with Progressive Scroll Reveal */}
                <div className="flex flex-col gap-2 mb-16 md:mb-24">
                    <div className="w-full md:w-[94%] lg:w-[88%] text-[28px] sm:text-[36px] md:text-[54px] lg:text-[62px] leading-[1.12] md:leading-[1.08] font-normal tracking-[-0.015em]">
                        <div className="w-full welcome-text flex flex-col justify-center items-start">
                            {welcomeLines.map((text, index) => (
                                <span key={index} className="relative block text-darkBrown">
                                    {text}
                                    <span className="clip-text-welcome">{text}</span>
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Second Part: Two Organic Visuals + Refined Statement */}
                <div className="flex md:flex-row flex-col justify-between items-start md:items-center gap-10 md:gap-14 pt-4">
                    {/* Left: Organic Hackathon Visuals */}
                    <div className="flex flex-row justify-start items-center gap-3 sm:gap-4 welcome-image-card">
                        <div className="overflow-hidden rounded-[2.5rem] sm:rounded-[3.5rem] md:rounded-[4rem] w-40 sm:w-52 md:w-60 lg:w-68 aspect-[15/11] border border-purple-500/25 shadow-[0_0_25px_rgba(168,85,247,0.15)] group">
                            <img
                                src={w1}
                                alt="Hackathon team collaborating"
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                        <div className="overflow-hidden rounded-[2.5rem] sm:rounded-[3.5rem] md:rounded-[4rem] w-40 sm:w-52 md:w-60 lg:w-68 aspect-[15/11] border border-purple-500/25 shadow-[0_0_25px_rgba(168,85,247,0.15)] group">
                            <img
                                src={w2}
                                alt="Developer coding at hackathon"
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                    </div>

                    {/* Right: Refined Statement Block Matching Reference */}
                    <div className="md:w-1/2 w-full welcome-statement flex flex-col justify-center">
                        <p className="text-xl sm:text-2xl md:text-[2rem] lg:text-[2.2rem] text-[#d1ccd8] leading-[1.28] md:leading-[1.24] font-normal tracking-[-0.2px]">
                            <span>One challenge.</span><br />
                            <span>One team.</span><br />
                            <span><strong className="font-bold text-white">One</strong> idea at a time.</span>
                        </p>
                        <div className="flex items-center gap-2 mt-6 md:mt-8">
                            <span className="w-4 h-[1.5px] bg-[#a855f7] inline-block"></span>
                            <span className="text-[10px] sm:text-xs md:text-[13px] tracking-[0.22em] font-semibold text-[#8b82a0] uppercase">
                                KARE &middot; ACM STUDENT CHAPTER
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Welcome;