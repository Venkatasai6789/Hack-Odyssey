import gsap from "gsap/all";
import smoke from "../../assets/smoke_final.mp4";
import heroBg from "../../assets/hero_section.png";
import mobileHeroBg from "../../assets/hero_section_mobile.png";
import { useGSAP } from "@gsap/react";
import { useMediaQuery } from "react-responsive";
import { MdArrowOutward } from "react-icons/md";
import AnimateBtn from "../Buttons/AnimateBtn";

const Hero = () => {
    const isMobHero = useMediaQuery({
        query: "(max-width:768px)",
    });

    useGSAP(() => {
        if (!isMobHero) {
            gsap.to(".hero-section .hero-img", {
                yPercent: "-5",
                stagger: 0.02,
                scale: 1.2,
                ease: "power1.inOut",
                scrollTrigger: {
                    trigger: ".hero-section",
                    start: "top top",
                    end: "bottom top",
                    scrub: 1.5,
                }
            });
        }
    }, [isMobHero]);

    return (
        <section className="hero-section w-dvw md:h-dvh h-[100vh] md:p-2 p-2.5 mb-20">
            <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden bg-[#0a0714]">
                {/* Desktop background layer */}
                <div
                    className="hero-img absolute inset-0 bg-no-repeat bg-cover bg-center z-0 md:block hidden"
                    style={{ backgroundImage: `url(${heroBg})` }}
                />

                {/* Mobile background layer */}
                <div
                    className="hero-img absolute inset-0 bg-no-repeat bg-cover bg-center z-0 md:hidden block"
                    style={{ backgroundImage: `url(${mobileHeroBg})` }}
                />

                {/* Smoke video (atmospheric ambient layer) */}
                <video
                    src={smoke}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 md:w-full md:h-full object-cover z-10 pointer-events-none object-center opacity-30 mix-blend-screen md:top-0 top-[5%] h-[90%] rounded-[2rem] md:px-0"
                />

                {/* Bottom transition blend to seamlessly connect with next section */}
                <div className="absolute inset-x-0 bottom-0 h-36 sm:h-48 md:h-64 bg-gradient-to-t from-[#181717] via-[#181717]/60 to-transparent z-15 pointer-events-none" />

                {/* Center Aligned Content Overlay */}
                <div className="relative z-20 w-full h-full flex flex-col items-center justify-start pt-10 sm:pt-14 md:pt-16 lg:pt-18 px-4 text-center select-none">
                    {/* Eyebrow Label */}
                    <p className="text-[#cbd5e1] text-[0.7rem] sm:text-xs md:text-sm font-semibold tracking-[0.25em] uppercase mb-1.5 md:mb-2">
                        24 HOURS &middot; HACKATHON
                    </p>

                    {/* Main Heading */}
                    <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-wider leading-tight uppercase">
                        HACK ODYSSEY
                    </h1>

                    {/* Subtitle / Edition */}
                    <h2 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-wider leading-tight mt-1 mb-1.5 md:mb-2">
                        2K26
                    </h2>

                    {/* Tagline */}
                    <p className="text-[#cbd5e1] text-xs sm:text-sm font-medium tracking-wide max-w-md mx-auto mb-4 md:mb-5">
                        24-hour student hackathon
                    </p>

                    {/* Center CTA Button - Website Signature Component */}
                    <a
                        href="#register"
                        className="w-fit bg-[#f4efe7] hover:bg-[#ffffff] px-4 py-1.5 flex items-center justify-center rounded-4xl gap-2.5 shadow-md hover:shadow-lg transition-all duration-300 group cursor-pointer"
                    >
                        <div className="text-[#2a2725] font-medium text-[12px] md:text-[13px] tracking-tight">
                            <AnimateBtn btnName="Register Now" />
                        </div>
                        <div className="bg-[#2a2725] rounded-full p-1.5 flex items-center justify-center">
                            <MdArrowOutward className="text-[#f4efe7] w-3 h-3 md:w-3.5 md:h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </div>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
