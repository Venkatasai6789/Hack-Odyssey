import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap/all";
import { useMediaQuery } from "react-responsive";
import pinVideo from "../../assets/pin-video.mp4";
import { FaPlay, FaPause } from "react-icons/fa";

const VideoPin = () => {
    const isMobile = useMediaQuery({
        query: "(max-width: 768px)",
    });

    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(true);

    useGSAP(() => {
        if (!isMobile) {
            const vpTl = gsap.timeline({
                scrollTrigger: {
                    trigger: ".video-wrapper",
                    start: "top top",
                    end: "+=2200px",
                    scrub: 1.2,
                    pin: true,
                }
            });

            vpTl.fromTo(
                ".video-box",
                { clipPath: "circle(100px at 50% 50%)" },
                {
                    clipPath: "circle(120% at 50% 50%)",
                    ease: "power1.inOut",
                }
            );
        } else {
            const vpMobTl = gsap.timeline({
                scrollTrigger: {
                    trigger: ".vd-pin",
                    start: "top top",
                    end: "+=120%",
                    scrub: 1.2,
                    pin: true,
                }
            });

            vpMobTl.fromTo(
                ".video-box",
                { clipPath: "circle(80px at 50% 50%)" },
                {
                    clipPath: "circle(120% at 50% 50%)",
                    ease: "power1.inOut",
                }
            );
        }
    }, [isMobile]);

    const handleTogglePlay = (e) => {
        if (e) e.stopPropagation();
        if (!videoRef.current) return;
        if (videoRef.current.paused) {
            videoRef.current.play();
            setIsPlaying(true);
        } else {
            videoRef.current.pause();
            setIsPlaying(false);
        }
    };

    return (
        <div className="h-screen w-full overflow-hidden relative bg-[#030206] flex items-center justify-center">
            {/* Ambient Violet Nebula Glow matching Hack Odyssey */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#7C3CFF]/15 rounded-full blur-[160px] pointer-events-none z-0" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[350px] bg-[#25104A]/30 rounded-full blur-[140px] pointer-events-none z-0" />

            {/* Expanding Video Container with Circular Clip-Path */}
            <div className="relative w-full h-full video-box overflow-hidden z-10">
                <video
                    ref={videoRef}
                    src={pinVideo}
                    playsInline
                    muted
                    loop
                    autoPlay
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full w-auto h-full object-cover"
                />
                
                {/* Cinematic Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#030206]/60 via-transparent to-[#030206]/80 pointer-events-none" />
            </div>

            {/* Concentric Play Controller HUD (Concentric SVG Text Ring + Glassmorphism Play Button) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 pointer-events-none flex items-center justify-center">
                {/* Concentric Rotating SVG Circular Text Ring */}
                <div className="spin-circle-container w-[230px] h-[230px] sm:w-[270px] sm:h-[270px] md:w-[310px] md:h-[310px] pointer-events-none select-none flex items-center justify-center">
                    <svg viewBox="0 0 300 300" className="w-full h-full overflow-visible">
                        <defs>
                            <path
                                id="circlePathOdyssey"
                                d="M 150, 150 m -110, 0 a 110,110 0 1,1 220,0 a 110,110 0 1,1 -220,0"
                                fill="none"
                            />
                        </defs>
                        <text className="text-[13.5px] sm:text-[14.5px] font-mono font-bold uppercase tracking-[0.24em] fill-[#d8b4fe] drop-shadow-[0_0_8px_rgba(168,85,247,0.7)]">
                            <textPath href="#circlePathOdyssey" startOffset="0%">
                                • HACK ODYSSEY 3.0 • WATCH AFTERMOVIE • PLAY HIGHLIGHTS •
                            </textPath>
                        </text>
                    </svg>
                </div>

                {/* Central Glassmorphism Interactive Play / Pause Button */}
                <button
                    type="button"
                    onClick={handleTogglePlay}
                    className="pointer-events-auto absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full bg-black/50 hover:bg-black/70 backdrop-blur-2xl border border-purple-400/40 hover:border-purple-400 shadow-[0_0_35px_rgba(168,85,247,0.45)] flex items-center justify-center cursor-pointer transition-all duration-300 transform hover:scale-110 group focus:outline-none focus:ring-2 focus:ring-purple-400/50"
                    title={isPlaying ? "Pause Aftermovie" : "Play Aftermovie"}
                    aria-label={isPlaying ? "Pause Aftermovie" : "Play Aftermovie"}
                >
                    {isPlaying ? (
                        <FaPause className="w-5 h-5 sm:w-6 sm:h-6 text-[#d8b4fe] group-hover:text-white transition-colors" />
                    ) : (
                        <FaPlay className="w-5 h-5 sm:w-6 sm:h-6 ml-1 text-[#d8b4fe] group-hover:text-white transition-colors" />
                    )}
                </button>
            </div>
        </div>
    );
};

export default VideoPin;
