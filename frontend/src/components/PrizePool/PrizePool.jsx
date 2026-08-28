import React, { useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { 
    LuSparkles, 
    LuTrophy, 
    LuCrown, 
    LuMedal, 
    LuGift, 
    LuFlame, 
    LuZap, 
    LuShieldCheck, 
    LuStar,
    LuArrowUpRight
} from 'react-icons/lu';
import { FaCrown } from 'react-icons/fa6';
import section2Bg from '../../assets/section_2.png';
import './prizepool.css';

gsap.registerPlugin(ScrollTrigger);

const PrizePool = () => {
    const sectionRef = useRef(null);
    const badgeRef = useRef(null);
    const countRefs = useRef([]);

    // 3D Card Hover Tilt and dynamic cursor lighting handler
    const handleMouseMove = (e, cardIndex) => {
        const card = e.currentTarget;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        // Set CSS custom properties for radial spotlight glow
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);

        // Calculate normalized tilt (-1 to 1)
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * -8;
        const rotateY = ((x - centerX) / centerX) * 8;

        gsap.to(card, {
            rotateX: rotateX,
            rotateY: rotateY,
            transformPerspective: 1000,
            duration: 0.4,
            ease: 'power2.out',
        });
    };

    const handleMouseLeave = (e) => {
        const card = e.currentTarget;
        gsap.to(card, {
            rotateX: 0,
            rotateY: 0,
            duration: 0.6,
            ease: 'power2.out',
        });
    };

    useGSAP(() => {
        if (!sectionRef.current) return;

        // 1. Eyebrow Scroll Reveal
        gsap.from('.prizepool-eyebrow', {
            x: -25,
            opacity: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: '#prizepool',
                start: 'top 78%',
            }
        });

        // 2. Main Title Character-by-Character Mask Reveal
        const titleChars = sectionRef.current.querySelectorAll('.prize-title-char');
        gsap.from(titleChars, {
            yPercent: 120,
            rotateZ: 4,
            opacity: 0,
            stagger: 0.045,
            duration: 1.0,
            ease: 'power4.out',
            scrollTrigger: {
                trigger: '#prizepool',
                start: 'top 74%',
            }
        });

        // 3. Section Underline Expansion from Left
        gsap.fromTo('#prizepool-underline',
            { scaleX: 0, transformOrigin: 'left center', opacity: 0 },
            {
                scaleX: 1,
                opacity: 1,
                duration: 1.2,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: '#prizepool',
                    start: 'top 70%',
                }
            }
        );

        // 4. Kinetic Background Ghost Typography Parallax Scrub
        gsap.to('.ghost-text-1', {
            xPercent: -12,
            ease: 'none',
            scrollTrigger: {
                trigger: '.kinetic-text-wrap',
                start: 'top bottom',
                end: 'bottom top',
                scrub: 1.5,
            }
        });

        gsap.to('.ghost-text-2', {
            xPercent: 12,
            ease: 'none',
            scrollTrigger: {
                trigger: '.kinetic-text-wrap',
                start: 'top bottom',
                end: 'bottom top',
                scrub: 1.5,
            }
        });

        // 5. Statement Word Revelation
        const statementLines = sectionRef.current.querySelectorAll('.statement-word');
        gsap.from(statementLines, {
            yPercent: 100,
            opacity: 0,
            stagger: 0.03,
            duration: 0.9,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: '.kinetic-text-wrap',
                start: 'top 75%',
            }
        });

        // 6. Angled Center Badge Entrance & Perpetual Levitation
        if (badgeRef.current) {
            gsap.from(badgeRef.current, {
                scale: 0.5,
                rotate: 15,
                opacity: 0,
                duration: 1.2,
                ease: 'back.out(1.8)',
                scrollTrigger: {
                    trigger: '.angled-badge-container',
                    start: 'top 82%',
                }
            });

            // Perpetual organic float
            gsap.to(badgeRef.current, {
                y: -10,
                rotate: -1.5,
                yoyo: true,
                repeat: -1,
                duration: 2.8,
                ease: 'sine.inOut',
                delay: 1.2,
            });
        }

        // 7. Staggered Prize Cards Entrance
        const cards = sectionRef.current.querySelectorAll('.prize-card');
        gsap.from(cards, {
            y: 80,
            opacity: 0,
            scale: 0.93,
            stagger: 0.16,
            duration: 1.0,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: '.prize-cards-grid',
                start: 'top 80%',
            }
        });

        // 8. Dynamic Odometer Count-Up Animation for Amounts
        const prizeValues = [30000, 50000, 20000];
        countRefs.current.forEach((el, index) => {
            if (!el) return;
            const targetVal = prizeValues[index];
            const obj = { val: 0 };

            ScrollTrigger.create({
                trigger: el,
                start: 'top 85%',
                once: true,
                onEnter: () => {
                    gsap.to(obj, {
                        val: targetVal,
                        duration: 2.0,
                        ease: 'power2.out',
                        onUpdate: () => {
                            if (el) {
                                el.innerText = `₹${Math.floor(obj.val).toLocaleString('en-IN')}`;
                            }
                        }
                    });
                }
            });
        });

        // 9. Special Categories Bounties Strip Stagger
        const bonusPills = sectionRef.current.querySelectorAll('.bonus-pill');
        gsap.from(bonusPills, {
            y: 40,
            opacity: 0,
            stagger: 0.1,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: '.bonus-tracks-container',
                start: 'top 86%',
            }
        });

    }, { scope: sectionRef });

    return (
        <section id="prizepool" ref={sectionRef} className="prizepool-section">
            {/* Cinematic Background Layer matching Odyssey / Team section */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-80 pointer-events-none z-0 scale-105"
                style={{ backgroundImage: `url(${section2Bg})` }}
            />

            {/* Ambient Nebula Radial Gradients */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#a855f7]/10 rounded-full blur-[140px] pointer-events-none z-0" />
            <div className="absolute top-2/3 right-10 w-[500px] h-[400px] bg-[#f59e0b]/10 rounded-full blur-[130px] pointer-events-none z-0" />

            {/* Seamless Top Blend with Coordinators Section */}
            <div className="absolute inset-x-0 top-0 h-40 md:h-64 bg-gradient-to-b from-[#030206] via-[#030206]/85 to-transparent pointer-events-none z-1" />

            {/* Seamless Bottom Blend with Next Section */}
            <div className="absolute inset-x-0 bottom-0 h-40 md:h-64 bg-gradient-to-t from-[#030206] via-[#030206]/85 to-transparent pointer-events-none z-1" />

            {/* Eyebrow with Purple Accent Line */}
            <div className="prizepool-eyebrow w-[70%] ml-[30%] max-md:w-[88%] max-md:ml-[12%] flex items-center gap-2.5 mb-3 sm:mb-4 relative z-10">
                <span className="w-6 md:w-8 h-[1.5px] bg-[#a855f7] inline-block rounded-full shadow-[0_0_8px_#a855f7]"></span>
                <p className="text-[11px] sm:text-xs font-semibold tracking-[0.22em] text-[#8e859f] uppercase">
                    PRIZE POOL & REWARDS
                </p>
            </div>

            {/* Main Section Heading with Sequential Character Reveal */}
            <h1 className="prizepool-title relative z-10 select-none overflow-hidden flex flex-wrap items-baseline" aria-label="PRIZE POOL">
                {"PRIZE POOL".split(" ").map((word, wordIndex) => (
                    <span key={wordIndex} className="inline-flex overflow-hidden mr-[0.25em] last:mr-0">
                        {word.split("").map((char, charIndex) => (
                            <span
                                key={charIndex}
                                className="prize-title-char inline-block will-change-transform"
                            >
                                {char}
                            </span>
                        ))}
                    </span>
                ))}
            </h1>

            {/* Elegant Section Underline */}
            <div id="prizepool-underline" className="relative z-10"></div>

            {/* Kinetic Typography Layer (Inspired by Reference UI) */}
            <div className="kinetic-text-wrap relative z-10">
                {/* Background Ghost Text Track 1 */}
                <div className="ghost-text-track ghost-text-1">
                    STIR UP INNOVATION · REWARDING EXCELLENCE · HACKODYSSEY 2026 · STIR UP INNOVATION ·
                </div>

                {/* Layered Foreground Statement */}
                <div className="max-w-6xl mx-auto px-6 sm:px-12 my-6 md:my-10 text-center">
                    <div className="text-[26px] sm:text-[34px] md:text-[46px] lg:text-[54px] font-normal leading-[1.18] tracking-[-0.02em]">
                        <div className="overflow-hidden inline-block mr-2">
                            <span className="statement-word inline-block text-[#8e859f]">STIR UP YOUR</span>
                        </div>
                        <div className="overflow-hidden inline-block mr-2">
                            <span className="statement-word inline-block text-white font-bold font-plain-reg">FEARLESS IDEAS</span>
                        </div>
                        <div className="overflow-hidden inline-block mr-2">
                            <span className="statement-word inline-block font-silk-serif text-[#d8b4fe] italic">and fuel</span>
                        </div>
                        <br className="hidden md:inline" />
                        <div className="overflow-hidden inline-block mr-2">
                            <span className="statement-word inline-block text-white">THE FUTURE WITH</span>
                        </div>
                        <div className="overflow-hidden inline-block mr-2">
                            <span className="statement-word inline-block font-bold text-white font-plain-reg">EXTRAORDINARY CODE</span>
                        </div>
                    </div>
                </div>

                {/* Background Ghost Text Track 2 */}
                <div className="ghost-text-track ghost-text-2 -mt-4 opacity-50">
                    ONE LAKH RUPEES BOUNTY · TOP 3 PODIUM · KARE ACM CHAPTER · CLAIM THE CROWN ·
                </div>
            </div>

            {/* Center Angled Badge (Direct reference inspiration from 'FUEL UP' badge) */}
            <div className="angled-badge-container">
                <div ref={badgeRef} className="angled-badge">
                    <div className="flex items-center justify-center gap-2 mb-0.5">
                        <LuSparkles className="w-5 h-5 md:w-6 md:h-6 text-[#181717]" />
                        <span className="angled-badge-title">₹1,00,000 TOTAL POOL</span>
                        <LuSparkles className="w-5 h-5 md:w-6 md:h-6 text-[#181717]" />
                    </div>
                    <p className="angled-badge-sub">1 LAKH RUPEES · TOP 3 TEAMS PRIZE DIVISION</p>
                </div>
            </div>

            {/* The 3 Champions Podium Grid */}
            <div className="prize-cards-grid">
                
                {/* 🥈 CARD 2: 1ST RUNNER UP (2ND PRIZE) */}
                <div 
                    className="prize-card prize-card-second group"
                    onMouseMove={(e) => handleMouseMove(e, 0)}
                    onMouseLeave={handleMouseLeave}
                >
                    <div className="card-spotlight"></div>

                    {/* Card Header & Rank Badge */}
                    <div>
                        <div className="flex items-center justify-between mb-6">
                            <span className="px-3.5 py-1 rounded-full text-xs font-mono tracking-widest uppercase bg-slate-400/10 text-slate-300 border border-slate-400/25 flex items-center gap-1.5">
                                <LuMedal className="w-3.5 h-3.5 text-slate-300" />
                                02 / 1ST RUNNER UP
                            </span>
                            <span className="text-xs font-semibold tracking-wider text-[#8e859f] uppercase font-mono">
                                SILVER TIER
                            </span>
                        </div>

                        {/* Title & Tier */}
                        <h3 className="text-xl md:text-2xl font-bold uppercase tracking-tight text-white font-plain-reg">
                            Second Prize
                        </h3>
                        <p className="text-xs text-[#a199b0] mt-1">First Runner-Up Champion</p>

                        {/* Cash Amount */}
                        <div className="my-7">
                            <span 
                                ref={(el) => (countRefs.current[0] = el)}
                                className="prize-amount silver-shimmer"
                            >
                                ₹30,000
                            </span>
                            <p className="text-xs text-[#8e859f] mt-1 font-mono tracking-wider">
                                THIRTY THOUSAND RUPEES
                            </p>
                        </div>
                    </div>

                    {/* Perks List */}
                    <div className="border-t border-white/10 pt-6 mt-4">
                        <p className="text-[11px] font-semibold tracking-widest text-[#a199b0] uppercase mb-4">
                            Included Perks & Benefits
                        </p>
                        <ul className="space-y-3 text-sm text-[#e2dbe8]">
                            <li className="flex items-start gap-2.5">
                                <LuShieldCheck className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                                <span>Official Silver Trophy & ACM Citation</span>
                            </li>
                            <li className="flex items-start gap-2.5">
                                <LuShieldCheck className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                                <span>Certificate of Exceptional Merit</span>
                            </li>
                            <li className="flex items-start gap-2.5">
                                <LuShieldCheck className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                                <span>Premium Swag Hamper & Tech Goodies</span>
                            </li>
                            <li className="flex items-start gap-2.5">
                                <LuShieldCheck className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                                <span>Direct Mentorship from Industry Experts</span>
                            </li>
                        </ul>
                    </div>

                    {/* Bottom Indicator */}
                    <div className="mt-8 flex items-center justify-between text-xs text-[#8e859f] font-mono border-t border-white/5 pt-4">
                        <span>HACKODYSSEY 2026</span>
                        <span className="text-slate-300 font-semibold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                            PODIUM RANK 2 <LuArrowUpRight />
                        </span>
                    </div>
                </div>

                {/* 🥇 CARD 1: GRAND WINNER (1ST PRIZE) - ELEVATED CENTER */}
                <div 
                    className="prize-card prize-card-first group"
                    onMouseMove={(e) => handleMouseMove(e, 1)}
                    onMouseLeave={handleMouseLeave}
                >
                    <div className="card-spotlight"></div>

                    {/* Grand Crown Badge */}
                    <div>
                        <div className="flex items-center justify-between mb-6">
                            <span className="px-4 py-1.5 rounded-full text-xs font-mono font-bold tracking-widest uppercase bg-amber-400/20 text-amber-300 border border-amber-400/40 flex items-center gap-2 shadow-[0_0_15px_rgba(251,191,36,0.25)]">
                                <FaCrown className="w-3.5 h-3.5 text-amber-300 animate-pulse" />
                                01 / GRAND CHAMPION
                            </span>
                            <span className="text-xs font-bold tracking-wider text-amber-400 uppercase font-mono flex items-center gap-1">
                                <LuStar className="w-3.5 h-3.5 fill-amber-400" />
                                GOLD TIER
                            </span>
                        </div>

                        {/* Title & Tier */}
                        <div className="flex items-baseline gap-2">
                            <h3 className="text-2xl md:text-3xl font-bold uppercase tracking-tight text-white font-plain-reg">
                                First Prize
                            </h3>
                            <span className="font-silk-serif text-amber-300 italic text-sm">(Winner)</span>
                        </div>
                        <p className="text-xs text-amber-200/80 mt-1">HackOdyssey Overall Champion</p>

                        {/* Cash Amount */}
                        <div className="my-7">
                            <span 
                                ref={(el) => (countRefs.current[1] = el)}
                                className="prize-amount gold-shimmer text-4xl md:text-5xl"
                            >
                                ₹50,000
                            </span>
                            <p className="text-xs text-amber-400/90 mt-1 font-mono font-semibold tracking-wider">
                                FIFTY THOUSAND RUPEES CASH
                            </p>
                        </div>
                    </div>

                    {/* Perks List */}
                    <div className="border-t border-amber-400/20 pt-6 mt-4">
                        <p className="text-[11px] font-bold tracking-widest text-amber-300 uppercase mb-4 flex items-center gap-1.5">
                            <LuSparkles className="w-3.5 h-3.5" />
                            Grand Champion Perks
                        </p>
                        <ul className="space-y-3.5 text-sm text-[#fef3c7]">
                            <li className="flex items-start gap-2.5">
                                <LuCrown className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                                <span className="font-medium text-white">Grand Championship Trophy & Winner Memento</span>
                            </li>
                            <li className="flex items-start gap-2.5">
                                <LuZap className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                                <span>Certificate of Grand Excellence</span>
                            </li>
                            <li className="flex items-start gap-2.5">
                                <LuGift className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                                <span>Exclusive ACM Elite Champion Swag Box</span>
                            </li>
                            <li className="flex items-start gap-2.5">
                                <LuFlame className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                                <span>Incubation & Direct Investor/Startup Pitch Access</span>
                            </li>
                            <li className="flex items-start gap-2.5">
                                <LuTrophy className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                                <span>Fast-Track Internship & Mentorship Opportunities</span>
                            </li>
                        </ul>
                    </div>

                    {/* Bottom Indicator */}
                    <div className="mt-8 flex items-center justify-between text-xs text-amber-300/80 font-mono border-t border-amber-400/20 pt-4">
                        <span>HACKODYSSEY 2026</span>
                        <span className="text-amber-300 font-bold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                            PODIUM RANK 1 <LuArrowUpRight />
                        </span>
                    </div>
                </div>

                {/* 🥉 CARD 3: 2ND RUNNER UP (3RD PRIZE) */}
                <div 
                    className="prize-card prize-card-third group"
                    onMouseMove={(e) => handleMouseMove(e, 2)}
                    onMouseLeave={handleMouseLeave}
                >
                    <div className="card-spotlight"></div>

                    {/* Card Header & Rank Badge */}
                    <div>
                        <div className="flex items-center justify-between mb-6">
                            <span className="px-3.5 py-1 rounded-full text-xs font-mono tracking-widest uppercase bg-orange-500/10 text-orange-300 border border-orange-500/25 flex items-center gap-1.5">
                                <LuMedal className="w-3.5 h-3.5 text-orange-400" />
                                03 / 2ND RUNNER UP
                            </span>
                            <span className="text-xs font-semibold tracking-wider text-[#8e859f] uppercase font-mono">
                                BRONZE TIER
                            </span>
                        </div>

                        {/* Title & Tier */}
                        <h3 className="text-xl md:text-2xl font-bold uppercase tracking-tight text-white font-plain-reg">
                            Third Prize
                        </h3>
                        <p className="text-xs text-[#a199b0] mt-1">Second Runner-Up Champion</p>

                        {/* Cash Amount */}
                        <div className="my-7">
                            <span 
                                ref={(el) => (countRefs.current[2] = el)}
                                className="prize-amount bronze-shimmer"
                            >
                                ₹20,000
                            </span>
                            <p className="text-xs text-[#8e859f] mt-1 font-mono tracking-wider">
                                TWENTY THOUSAND RUPEES
                            </p>
                        </div>
                    </div>

                    {/* Perks List */}
                    <div className="border-t border-white/10 pt-6 mt-4">
                        <p className="text-[11px] font-semibold tracking-widest text-[#a199b0] uppercase mb-4">
                            Included Perks & Benefits
                        </p>
                        <ul className="space-y-3 text-sm text-[#e2dbe8]">
                            <li className="flex items-start gap-2.5">
                                <LuShieldCheck className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                                <span>Official Bronze Trophy & ACM Citation</span>
                            </li>
                            <li className="flex items-start gap-2.5">
                                <LuShieldCheck className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                                <span>Certificate of Recognition</span>
                            </li>
                            <li className="flex items-start gap-2.5">
                                <LuShieldCheck className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                                <span>Custom HackOdyssey Goodies & Stickers</span>
                            </li>
                            <li className="flex items-start gap-2.5">
                                <LuShieldCheck className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                                <span>1-on-1 Code Review by Tech Mentors</span>
                            </li>
                        </ul>
                    </div>

                    {/* Bottom Indicator */}
                    <div className="mt-8 flex items-center justify-between text-xs text-[#8e859f] font-mono border-t border-white/5 pt-4">
                        <span>HACKODYSSEY 2026</span>
                        <span className="text-orange-300 font-semibold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                            PODIUM RANK 3 <LuArrowUpRight />
                        </span>
                    </div>
                </div>

            </div>

            {/* Special Track Bounties & Category Awards Strip */}
            <div className="bonus-tracks-container">
                <div className="text-center mb-8">
                    <p className="text-xs font-semibold tracking-[0.25em] text-[#a855f7] uppercase font-mono">
                        ADDITIONAL TRACK BOUNTIES & AWARDS
                    </p>
                    <h4 className="text-xl md:text-2xl font-bold uppercase tracking-tight text-white font-plain-reg mt-1">
                        Empowering Every Innovator
                    </h4>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {/* Bounty 1 */}
                    <div className="bonus-pill flex items-start gap-4">
                        <div className="p-3 rounded-2xl bg-purple-500/10 border border-purple-500/20 text-purple-400 shrink-0">
                            <LuSparkles className="w-6 h-6" />
                        </div>
                        <div>
                            <span className="text-[10px] font-mono font-semibold tracking-wider text-purple-400 uppercase">
                                SPECIAL CATEGORY
                            </span>
                            <h5 className="text-base font-bold text-white uppercase font-plain-reg mt-0.5">
                                Best All-Women Team
                            </h5>
                            <p className="text-xs text-[#a199b0] mt-1 leading-relaxed">
                                Special cash bounty + ACM Women in Tech citation & exclusive mentorship.
                            </p>
                        </div>
                    </div>

                    {/* Bounty 2 */}
                    <div className="bonus-pill flex items-start gap-4">
                        <div className="p-3 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-400 shrink-0">
                            <LuZap className="w-6 h-6" />
                        </div>
                        <div>
                            <span className="text-[10px] font-mono font-semibold tracking-wider text-amber-400 uppercase">
                                RISING TALENT
                            </span>
                            <h5 className="text-base font-bold text-white uppercase font-plain-reg mt-0.5">
                                Best Freshers Innovation
                            </h5>
                            <p className="text-xs text-[#a199b0] mt-1 leading-relaxed">
                                Special recognition award + starter incubation kit for exceptional 1st-year builds.
                            </p>
                        </div>
                    </div>

                    {/* Bounty 3 */}
                    <div className="bonus-pill flex items-start gap-4">
                        <div className="p-3 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-blue-400 shrink-0">
                            <LuGift className="w-6 h-6" />
                        </div>
                        <div>
                            <span className="text-[10px] font-mono font-semibold tracking-wider text-blue-400 uppercase">
                                SPONSOR PERKS
                            </span>
                            <h5 className="text-base font-bold text-white uppercase font-plain-reg mt-0.5">
                                Wolfram & Cloud Credits
                            </h5>
                            <p className="text-xs text-[#a199b0] mt-1 leading-relaxed">
                                Free Wolfram|One access, cloud compute vouchers & premium developer licenses.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PrizePool;
