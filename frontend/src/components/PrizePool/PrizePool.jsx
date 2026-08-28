import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import './prizepool.css';

gsap.registerPlugin(ScrollTrigger);

const PRIZES_DATA = [
    {
        rank: "01",
        numericValue: 50000,
        amount: "₹50,000",
        label: "WINNER",
        isGrand: true,
    },
    {
        rank: "02",
        numericValue: 30000,
        amount: "₹30,000",
        label: "RUNNER UP",
        isGrand: false,
    },
    {
        rank: "03",
        numericValue: 20000,
        amount: "₹20,000",
        label: "THIRD PLACE",
        isGrand: false,
    },
];

const FIRST_MESSAGE = "BUILD BOLD, STIR UP YOUR FEARLESS IDEAS AND";
const SECOND_MESSAGE = "THE FUTURE WITH EVERY LINE OF EXTRAORDINARY CODE";
const EDITORIAL_PARAGRAPH = "Rev up your hacker spirit and engineer the extraordinary at Hack Odyssey 4.0, where you're 24 hours away from breakthrough innovation and ultimate glory.";

const PrizePool = () => {
    const sectionRef = useRef(null);
    const boxRef = useRef(null);
    const countRefs = useRef([]);

    useGSAP(() => {
        if (!sectionRef.current) return;

        // Check if user prefers reduced motion
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReducedMotion) return;

        // 1. Kinetic Background Words Multi-Directional Parallax Scrub
        gsap.to('.bg-word-compete', {
            xPercent: 14,
            ease: 'none',
            scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top bottom',
                end: 'bottom top',
                scrub: 1.5,
            }
        });

        gsap.to('.bg-word-create', {
            xPercent: -12,
            ease: 'none',
            scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top bottom',
                end: 'bottom top',
                scrub: 1.5,
            }
        });

        gsap.to('.bg-word-conquer', {
            yPercent: -18,
            xPercent: 8,
            ease: 'none',
            scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top bottom',
                end: 'bottom top',
                scrub: 1.5,
            }
        });

        // 2. Eyebrow Scroll Entrance
        gsap.from('.prizepool-eyebrow-container', {
            opacity: 0,
            y: -15,
            duration: 0.9,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top 78%',
            }
        });

        // 3. SpyltMilk First Message Scroll-Scrubbed Color & Vertical Unveil
        const firstWords = sectionRef.current.querySelectorAll('.first-msg-word');
        gsap.to(firstWords, {
            color: '#F5F3FF',
            stagger: 0.08,
            ease: 'power1.inOut',
            scrollTrigger: {
                trigger: '.first-message',
                start: 'top 74%',
                end: 'bottom 45%',
                scrub: 0.8,
            }
        });

        gsap.from(firstWords, {
            yPercent: 120,
            opacity: 0,
            duration: 1.0,
            stagger: 0.04,
            ease: 'power4.out',
            scrollTrigger: {
                trigger: '.first-message',
                start: 'top 78%',
            }
        });

        // 4. Central Tilted ₹1,00,000 Accent Box Clip-Path Reveal (SpyltMilk Inspired)
        const revealTl = gsap.timeline({
            scrollTrigger: {
                trigger: '.hero-prize-scroll-container',
                start: 'top 72%',
            }
        });

        revealTl.fromTo('.hero-prize-box',
            {
                clipPath: 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)',
                opacity: 0,
                scale: 0.94,
            },
            {
                clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
                opacity: 1,
                scale: 1,
                duration: 1.1,
                ease: 'power3.inOut',
            }
        );

        // Vertical unveil for the ₹1,00,000 numbers
        revealTl.from('.hero-prize-amount-inner', {
            yPercent: 120,
            opacity: 0,
            duration: 0.9,
            ease: 'power4.out',
        }, '-=0.6');

        // Flares and beam expansion
        revealTl.from('.hero-prize-flare-left, .hero-prize-flare-right', {
            scaleX: 0,
            opacity: 0,
            duration: 0.8,
            ease: 'power3.out',
        }, '-=0.5');

        // Organic perpetual subtle floating on the tilted card
        gsap.to('.hero-prize-box', {
            y: -8,
            rotate: -2.2,
            yoyo: true,
            repeat: -1,
            duration: 3.2,
            ease: 'sine.inOut',
            delay: 1.2,
        });

        // 5. SpyltMilk Second Message Scroll-Scrubbed Color & Vertical Unveil
        const secondWords = sectionRef.current.querySelectorAll('.second-msg-word');
        gsap.to(secondWords, {
            color: '#F5F3FF',
            stagger: 0.08,
            ease: 'power1.inOut',
            scrollTrigger: {
                trigger: '.second-message',
                start: 'top 75%',
                end: 'bottom 48%',
                scrub: 0.8,
            }
        });

        gsap.from(secondWords, {
            yPercent: 120,
            opacity: 0,
            duration: 1.0,
            stagger: 0.04,
            ease: 'power4.out',
            scrollTrigger: {
                trigger: '.second-message',
                start: 'top 78%',
            }
        });

        // 6. Editorial Description Split Words Reveal (Matching SpyltMilk)
        const paraWords = sectionRef.current.querySelectorAll('.para-word');
        gsap.from(paraWords, {
            yPercent: 130,
            rotate: 2.5,
            opacity: 0,
            stagger: 0.012,
            duration: 0.9,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: '.prize-editorial-desc',
                start: 'top 82%',
            }
        });

        // Supporting Copy & Motif Reveal
        gsap.from('.prizepool-supporting-text', {
            opacity: 0,
            y: 15,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: '.prize-editorial-desc',
                start: 'top 80%',
            }
        });

        gsap.from('.prizepool-divider-line', {
            scaleX: 0,
            opacity: 0,
            duration: 0.7,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: '.prize-editorial-desc',
                start: 'top 80%',
            }
        });

        gsap.from('.prizepool-diamond', {
            scale: 0,
            rotate: -45,
            opacity: 0,
            duration: 0.5,
            ease: 'back.out(2)',
            scrollTrigger: {
                trigger: '.prize-editorial-desc',
                start: 'top 80%',
            }
        });

        // 7. Dedicated GSAP Animations for 1st, 2nd, and 3rd Prize Podiums
        const prizeColumns = sectionRef.current.querySelectorAll('.prize-column-item');
        const separators = sectionRef.current.querySelectorAll('.prize-column-separator');

        // Separators grow vertically from center
        gsap.fromTo(separators,
            { scaleY: 0, opacity: 0 },
            {
                scaleY: 1,
                opacity: 1,
                duration: 1.1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: '.prize-columns-container',
                    start: 'top 85%',
                }
            }
        );

        // Columns staggered elevation
        gsap.from(prizeColumns, {
            y: 60,
            opacity: 0,
            scale: 0.95,
            stagger: 0.16,
            duration: 1.1,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: '.prize-columns-container',
                start: 'top 85%',
            }
        });

        // Dynamic Odometer Count-Up for 1st, 2nd, and 3rd Prize Amounts
        countRefs.current.forEach((el, index) => {
            if (!el) return;
            const targetVal = PRIZES_DATA[index].numericValue;
            const counterObj = { val: 0 };

            ScrollTrigger.create({
                trigger: '.prize-columns-container',
                start: 'top 82%',
                once: true,
                onEnter: () => {
                    gsap.to(counterObj, {
                        val: targetVal,
                        duration: 2.0 + index * 0.25,
                        ease: 'power2.out',
                        onUpdate: () => {
                            if (el) {
                                el.innerText = `₹${Math.floor(counterObj.val).toLocaleString('en-IN')}`;
                            }
                        }
                    });
                }
            });
        });

    }, { scope: sectionRef });

    return (
        <section id="prizepool" ref={sectionRef} className="prizepool-section">
            {/* Atmospheric Background Kinetic Typography */}
            <div className="prizepool-bg-word bg-word-compete">COMPETE</div>
            <div className="prizepool-bg-word bg-word-create">CREATE</div>
            <div className="prizepool-bg-word bg-word-conquer">CONQUER</div>

            {/* Ambient Nebula Radial Violet Lighting */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[500px] bg-[#7C3CFF]/14 rounded-full blur-[150px] pointer-events-none z-0" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-[350px] bg-[#25104A]/30 rounded-full blur-[170px] pointer-events-none z-0" />

            {/* Top Eyebrow */}
            <div className="prizepool-eyebrow-container relative z-10 flex items-center justify-center gap-3 md:gap-4 mt-2 select-none">
                <span className="prizepool-eyebrow-line" />
                <p className="prizepool-eyebrow-text">WHAT'S AT STAKE</p>
                <span className="prizepool-eyebrow-line" />
            </div>

            {/* Center Main Composition */}
            <div className="relative z-10 flex flex-col items-center justify-center text-center my-auto w-full px-4 select-none">
                
                {/* 1. First Message: Above Tilted Badge (SpyltMilk Scrubbing Words) */}
                <h1 className="first-message prize-display-font text-center px-4">
                    {FIRST_MESSAGE.split(" ").map((word, i) => (
                        <span key={i} className="inline-block overflow-hidden mr-[0.25em] last:mr-0">
                            <span className="first-msg-word inline-block will-change-transform">
                                {word}
                            </span>
                        </span>
                    ))}
                </h1>

                {/* 2. Central Hero Tilted ₹1,00,000 Accent Box (SpyltMilk FUEL UP Concept) */}
                <div className="hero-prize-scroll-container">
                    {/* Left Light Flare Beam */}
                    <div className="hero-prize-flare-left">
                        <div className="hero-prize-flare-dot-left" />
                    </div>

                    {/* Glowing Tilted Accent Container with Clip-Path Reveal */}
                    <div ref={boxRef} className="hero-prize-box">
                        <div className="overflow-hidden">
                            <span className="hero-prize-amount hero-prize-amount-inner">
                                ₹1,00,000
                            </span>
                        </div>
                    </div>

                    {/* Right Light Flare Beam */}
                    <div className="hero-prize-flare-right">
                        <div className="hero-prize-flare-dot-right" />
                    </div>
                </div>

                {/* 3. Second Message: Below Tilted Badge (SpyltMilk Scrubbing Words) */}
                <h1 className="second-message prize-display-font text-center px-4 mt-1 sm:mt-2">
                    {SECOND_MESSAGE.split(" ").map((word, i) => (
                        <span key={i} className="inline-block overflow-hidden mr-[0.25em] last:mr-0">
                            <span className="second-msg-word inline-block will-change-transform">
                                {word}
                            </span>
                        </span>
                    ))}
                </h1>

                {/* 4. Editorial Description Paragraph (Matching SpyltMilk) */}
                <div className="prize-editorial-desc">
                    <p className="max-w-xl mx-auto">
                        {EDITORIAL_PARAGRAPH.split(" ").map((word, i) => (
                            <span key={i} className="inline-block overflow-hidden mr-[0.28em] last:mr-0">
                                <span className="para-word inline-block will-change-transform">
                                    {word}
                                </span>
                            </span>
                        ))}
                    </p>
                    <div className="mt-4 flex flex-col items-center">
                        <p className="prizepool-supporting-text">
                            3 WINNERS. ONE PRIZE POOL.
                        </p>
                        <div className="prizepool-divider-motif">
                            <span className="prizepool-divider-line" />
                            <span className="prizepool-diamond" />
                            <span className="prizepool-divider-line" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom 3-Column Editorial Grid with Dedicated GSAP Animations */}
            <div className="prize-columns-container select-none">
                {PRIZES_DATA.map((prize, idx) => (
                    <React.Fragment key={prize.rank}>
                        {idx > 0 && <div className="prize-column-separator" />}
                        <div className="prize-column-item group">
                            <span className="prize-rank-number">{prize.rank}</span>
                            <span className="prize-rank-underline" />
                            <span 
                                ref={(el) => (countRefs.current[idx] = el)}
                                className={`prize-col-amount ${prize.isGrand ? 'prize-col-amount-first' : ''}`}
                            >
                                {prize.amount}
                            </span>
                            <span className="prize-rank-label">{prize.label}</span>
                        </div>
                    </React.Fragment>
                ))}
            </div>
        </section>
    );
};

export default PrizePool;
