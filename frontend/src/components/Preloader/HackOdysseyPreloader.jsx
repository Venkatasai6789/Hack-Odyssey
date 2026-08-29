import React, { useRef, useState, useEffect, useCallback } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import handTopLeft from "../../assets/preloader/hand-top-left.png";
import handBottomRight from "../../assets/preloader/hand-bottom-right.png.png";
import acmLogo from "../../assets/preloader/acm_logo.png";
import "./HackOdysseyPreloader.css";

gsap.registerPlugin(MotionPathPlugin);

/**
 * HackOdyssey 4.0 Preloader — Complete Master Cinematic Sequence (Phases 1 → 7)
 *
 * Phase 1: 0.00s → 0.70s (The Opening Shot in Darkness)
 * Phase 2: 0.70s → 2.20s ("The Hands Discover Each Other" — Curved Entry)
 * Phase 3: 2.20s → 2.80s ("The Hands Slow Down / Anticipation" — Deceleration to 3–5px)
 * Phase 4: 2.80s → 3.20s ("Fingertip Contact / Energy Ignition" — Exact Touch, Flash, Pulse, Core)
 * Phase 5: 3.20s → 3.85s ("KARE ACM Identity Formation" — Seeded Radial Reveal, Light Sweep, Stable)
 * Phase 6: 3.85s → 4.55s ("KARE ACM Presents HackOdyssey 4.0" — ACM Anchor, Eyebrow & Word Reveal + Circled 4.0)
 * Phase 7: 4.55s → 5.30s ("Cinematic Outro" — Text Dissolves, Logo Glides to Navbar, Hero Section Revealed)
 *
 * Enhanced: Refined alignment, richer animations, polished transitions
 */
export default function HackOdysseyPreloader() {
  const [isComplete, setIsComplete] = useState(false);
  const [isSkipped, setIsSkipped] = useState(false);

  const containerRef = useRef(null);
  const atmosphereRef = useRef(null);
  const anticipationGlowRef = useRef(null);
  const contactFlashRef = useRef(null);
  const energyPulseRef = useRef(null);
  const centralCoreRef = useRef(null);

  // Central Identity Group Refs (Phases 5, 6 & 7)
  const identityGroupRef = useRef(null);
  const logoContainerRef = useRef(null);
  const logoHaloRef = useRef(null);
  const logoSweepRef = useRef(null);
  const convergeParticlesRef = useRef([]);

  // Presentation Text Refs
  const eventTextGroupRef = useRef(null);
  const presentsRef = useRef(null);
  const titleWrapRef = useRef(null);
  const wordHackRef = useRef(null);
  const wordOdysseyRef = useRef(null);
  const versionRef = useRef(null);

  const skipBtnRef = useRef(null);

  const ambientParticlesRef = useRef([]);
  const contactParticlesRef = useRef([]);

  const handAnchorARef = useRef(null);
  const handWrapperARef = useRef(null);
  const topLeftLightRef = useRef(null);

  const handAnchorBRef = useRef(null);
  const handWrapperBRef = useRef(null);
  const bottomRightLightRef = useRef(null);

  // Smooth dismiss handler to reveal the underlying website / Hero section
  const handleSkip = useCallback(() => {
    if (containerRef.current) {
      gsap.to(containerRef.current, {
        opacity: 0,
        scale: 1.03,
        duration: 0.45,
        ease: "power2.inOut",
        onComplete: () => {
          setIsSkipped(true);
          setIsComplete(true);
        },
      });
    } else {
      setIsSkipped(true);
      setIsComplete(true);
    }
  }, []);

  // Keyboard shortcut: Escape to skip
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        handleSkip();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleSkip]);

  useGSAP(
    () => {
      if (isSkipped || isComplete) return;

      const prefersReduced =
        typeof window !== "undefined" &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      const width = window.innerWidth;
      const height = window.innerHeight;
      const isMobile = width < 768;

      // Phase 2 intermediate convergence gap (~60-70px diagonal)
      const p2GapX = isMobile ? 18 : 30;
      const p2GapY = isMobile ? 10 : 17;

      // Phase 3 anticipation gap (~3-5px diagonal)
      const finalGapX = isMobile ? 1.4 : 2.2;
      const finalGapY = isMobile ? 0.8 : 1.2;

      const cx = width * 0.5;
      const cy = height * 0.5;

      const startAX = width * 0.12;
      const startAY = height * 0.18;
      const startBX = width * 0.88;
      const startBY = height * 0.82;

      const p2TargetAX = cx - p2GapX;
      const p2TargetAY = cy - p2GapY;
      const p2TargetBX = cx + p2GapX;
      const p2TargetBY = cy + p2GapY;

      const finalTargetAX = cx - finalGapX;
      const finalTargetAY = cy - finalGapY;
      const finalTargetBX = cx + finalGapX;
      const finalTargetBY = cy + finalGapY;

      // Calculate exact resting coordinates & scale for KARE ACM Logo in the Navbar
      const navLogoEl =
        document.querySelector(".nav-logo img") ||
        document.querySelector(".nav-logo");

      let targetScreenX = isMobile ? 44 : 76;
      let targetScreenY = isMobile ? 36 : 46;
      let targetScale = isMobile ? 0.28 : 0.24;

      if (navLogoEl) {
        const rect = navLogoEl.getBoundingClientRect();
        targetScreenX = rect.left + rect.width / 2;
        targetScreenY = rect.top + rect.height / 2;
        if (logoContainerRef.current) {
          const currentWidth = logoContainerRef.current.offsetWidth || 160;
          targetScale = rect.width / currentWidth;
        }
      }

      // Delta translation from screen center (cx, cy) to navbar logo target
      const navDeltaX = targetScreenX - cx;
      const navDeltaY = targetScreenY - cy;

      // Subtle organic curved trajectories for Hand A & Hand B (Phase 2)
      const pathA = [
        { x: startAX, y: startAY },
        { x: width * 0.25, y: height * 0.29 },
        { x: width * 0.38, y: height * 0.40 },
        { x: p2TargetAX, y: p2TargetAY },
      ];

      const pathB = [
        { x: startBX, y: startBY },
        { x: width * 0.75, y: height * 0.71 },
        { x: width * 0.62, y: height * 0.60 },
        { x: p2TargetBX, y: p2TargetBY },
      ];

      // Single Master GSAP Timeline across all Phases 1 → 7
      const tl = gsap.timeline({
        defaults: { ease: "power2.out" },
        onComplete: () => {
          setIsComplete(true);
        },
      });

      if (prefersReduced) {
        // Instant accessible transition for reduced motion
        tl.to(containerRef.current, {
          opacity: 0,
          duration: 0.3,
          ease: "power1.out",
          delay: 0.1,
          onComplete: () => {
            setIsComplete(true);
          },
        });
        return;
      }

      // ============================================================
      // PHASE 1: 0.00s → 0.70s (The Opening Shot)
      // ============================================================

      // 0.00s — Initial deterministic state
      tl.set(
        [
          atmosphereRef.current,
          anticipationGlowRef.current,
          contactFlashRef.current,
          energyPulseRef.current,
          centralCoreRef.current,
          logoContainerRef.current,
          logoHaloRef.current,
          logoSweepRef.current,
          presentsRef.current,
          wordHackRef.current,
          wordOdysseyRef.current,
          versionRef.current,
          ambientParticlesRef.current,
          contactParticlesRef.current,
          convergeParticlesRef.current,
          topLeftLightRef.current,
          bottomRightLightRef.current,
          handWrapperARef.current,
          handWrapperBRef.current,
        ],
        { opacity: 0 }
      );
      tl.set(atmosphereRef.current, { scale: 0.92 });
      tl.set(anticipationGlowRef.current, { scale: 0.6 });
      tl.set(contactFlashRef.current, { scale: 0.4 });
      tl.set(energyPulseRef.current, { scale: 0.15 });
      tl.set(centralCoreRef.current, { scale: 0.2 });
      tl.set(identityGroupRef.current, { x: 0, y: 0 });
      tl.set(logoContainerRef.current, {
        scale: 0.88,
        y: 0,
        clipPath: "circle(0% at 50% 50%)",
        filter: "blur(10px)",
      });
      tl.set(logoHaloRef.current, { scale: 0.7 });
      tl.set(logoSweepRef.current, { x: "-140%" });
      tl.set(eventTextGroupRef.current, { opacity: 1, scale: 1.0, y: 0 });
      tl.set(presentsRef.current, { y: 28, opacity: 0 });
      tl.set([wordHackRef.current, wordOdysseyRef.current], {
        y: 60,
        opacity: 0,
      });
      tl.set(versionRef.current, {
        scale: 0.3,
        y: 12,
        opacity: 0,
        rotation: -15,
      });
      tl.set([topLeftLightRef.current, bottomRightLightRef.current], {
        scale: 0.6,
      });

      // Initial positions of fingertip anchors at distant coordinates
      tl.set(handAnchorARef.current, { x: startAX, y: startAY });
      tl.set(handAnchorBRef.current, { x: startBX, y: startBY });

      // Initial entry state of hand wrappers
      tl.set(handWrapperARef.current, {
        scale: 1.08,
        rotation: 1.5,
        filter: "blur(2px)",
      });
      tl.set(handWrapperBRef.current, {
        scale: 1.08,
        rotation: 8.5,
        filter: "blur(2px)",
      });

      // 0.10s — Ambient micro particles emerge faintly with staggered drift
      tl.to(
        ambientParticlesRef.current,
        {
          opacity: 0.12,
          duration: 0.20,
          ease: "power1.out",
          stagger: 0.04,
        },
        0.10
      );

      // 0.20s — Center dormant atmosphere develops with gentle breathing
      tl.to(
        atmosphereRef.current,
        {
          opacity: 0.18,
          scale: 1.0,
          duration: 0.40,
          ease: "sine.out",
        },
        0.20
      );

      // 0.25s — Top-left light emerges at Hand A index fingertip location
      tl.to(
        topLeftLightRef.current,
        {
          opacity: 0.65,
          scale: 1.0,
          duration: 0.25,
          ease: "power2.out",
        },
        0.25
      );

      // 0.40s — Bottom-right light emerges at Hand B index fingertip location
      tl.to(
        bottomRightLightRef.current,
        {
          opacity: 0.65,
          scale: 1.0,
          duration: 0.25,
          ease: "power2.out",
        },
        0.40
      );

      // ============================================================
      // PHASE 2: 0.70s → 2.20s ("The Hands Discover Each Other")
      // ============================================================

      // Hand A (Top-Left) Motion Path across curved arc (0.70s → 2.20s)
      tl.to(
        handAnchorARef.current,
        {
          motionPath: {
            path: pathA,
            curviness: 1.15,
            autoRotate: false,
          },
          duration: 1.50,
          ease: "power2.inOut",
        },
        0.70
      );

      // Hand A Entrance, Opacity, Depth Scale, Rotation, and Softness Transition
      tl.to(
        handWrapperARef.current,
        {
          opacity: 0.75,
          scale: 1.04,
          rotation: 0.8,
          duration: 0.30,
          ease: "power2.out",
        },
        0.70
      );
      tl.to(
        handWrapperARef.current,
        {
          opacity: 1.0,
          scale: 1.01,
          rotation: 0.2,
          duration: 0.45,
          ease: "power1.out",
        },
        1.00
      );
      tl.to(
        handWrapperARef.current,
        {
          filter: "blur(0px)",
          duration: 0.55,
          ease: "power1.out",
        },
        1.00
      );
      tl.to(
        handWrapperARef.current,
        {
          scale: 1.00,
          rotation: 0,
          duration: 0.75,
          ease: "power2.out",
        },
        1.45
      );

      // Hand B (Bottom-Right) Motion Path with organic 50ms timing offset (0.75s → 2.20s)
      tl.to(
        handAnchorBRef.current,
        {
          motionPath: {
            path: pathB,
            curviness: 1.15,
            autoRotate: false,
          },
          duration: 1.45,
          ease: "power2.inOut",
        },
        0.75
      );

      // Hand B Entrance, Opacity, Depth Scale, Rotation, and Softness Transition
      tl.to(
        handWrapperBRef.current,
        {
          opacity: 0.75,
          scale: 1.04,
          rotation: 9.0,
          duration: 0.30,
          ease: "power2.out",
        },
        0.75
      );
      tl.to(
        handWrapperBRef.current,
        {
          opacity: 1.0,
          scale: 1.01,
          rotation: 9.6,
          duration: 0.45,
          ease: "power1.out",
        },
        1.05
      );
      tl.to(
        handWrapperBRef.current,
        {
          filter: "blur(0px)",
          duration: 0.55,
          ease: "power1.out",
        },
        1.05
      );
      tl.to(
        handWrapperBRef.current,
        {
          scale: 1.00,
          rotation: 10.0,
          duration: 0.70,
          ease: "power2.out",
        },
        1.50
      );

      // Refine fingertip lights during Phase 2 convergence
      tl.to(
        [topLeftLightRef.current, bottomRightLightRef.current],
        {
          scale: 0.85,
          opacity: 0.50,
          duration: 0.75,
          ease: "power2.out",
        },
        1.45
      );

      // ============================================================
      // PHASE 3: 2.20s → 2.80s ("The Hands Slow Down / Anticipation")
      // ============================================================

      // Hand A Deceleration into ~3–5px separation
      tl.to(
        handAnchorARef.current,
        {
          x: finalTargetAX,
          y: finalTargetAY,
          duration: 0.60,
          ease: "power3.out",
        },
        2.20
      );

      // Hand B Deceleration into ~3–5px separation
      tl.to(
        handAnchorBRef.current,
        {
          x: finalTargetBX,
          y: finalTargetBY,
          duration: 0.60,
          ease: "power3.out",
        },
        2.20
      );

      // Anticipation Glow — Enhanced pulsing tension between closing fingertips
      tl.to(
        anticipationGlowRef.current,
        {
          opacity: 0.22,
          scale: 1.25,
          duration: 0.60,
          ease: "power2.out",
        },
        2.20
      );

      // Subtle Center Atmosphere breath as tension peaks
      tl.to(
        atmosphereRef.current,
        {
          opacity: 0.22,
          scale: 1.02,
          duration: 0.60,
          ease: "sine.out",
        },
        2.20
      );

      // Fingertip lights steady glow at the closing gap — brighter for tension
      tl.to(
        [topLeftLightRef.current, bottomRightLightRef.current],
        {
          scale: 1.0,
          opacity: 0.75,
          duration: 0.60,
          ease: "power2.out",
        },
        2.20
      );

      // Microscopic depth stabilization
      tl.to(
        [handWrapperARef.current, handWrapperBRef.current],
        {
          scale: 0.995,
          duration: 0.60,
          ease: "power2.out",
        },
        2.20
      );

      // ============================================================
      // PHASE 4: 2.80s → 3.20s ("Fingertip Contact / Energy Ignition")
      // ============================================================

      // 2.80s → 2.86s: Final micro movement (3–5px → 0px) to exact contact point (cx, cy)
      tl.to(
        handAnchorARef.current,
        {
          x: cx,
          y: cy,
          duration: 0.06,
          ease: "power4.out",
        },
        2.80
      );

      tl.to(
        handAnchorBRef.current,
        {
          x: cx,
          y: cy,
          duration: 0.06,
          ease: "power4.out",
        },
        2.80
      );

      // 2.86s: Fade anticipation glow at contact
      tl.to(
        anticipationGlowRef.current,
        {
          opacity: 0,
          scale: 1.6,
          duration: 0.04,
          ease: "power1.out",
        },
        2.86
      );

      // 2.86s → 2.92s: Micro White Contact Flash (60ms) — Enhanced with larger bloom
      tl.to(
        contactFlashRef.current,
        {
          opacity: 1,
          scale: 1.2,
          duration: 0.04,
          ease: "power2.out",
        },
        2.86
      );
      tl.to(
        contactFlashRef.current,
        {
          opacity: 0,
          scale: 0.6,
          duration: 0.04,
          ease: "power2.in",
        },
        2.90
      );

      // 2.86s → 2.94s: Microscopic tactile hand response (consequence of contact)
      tl.to(
        [handWrapperARef.current, handWrapperBRef.current],
        {
          scale: 1.008,
          duration: 0.05,
          ease: "power2.out",
        },
        2.86
      );
      tl.to(
        [handWrapperARef.current, handWrapperBRef.current],
        {
          scale: 1.000,
          duration: 0.05,
          ease: "power2.in",
        },
        2.91
      );

      // 2.86s → 3.04s: Fingertip lights flare to near-white and settle into violet glow
      tl.to(
        [topLeftLightRef.current, bottomRightLightRef.current],
        {
          opacity: 1.0,
          scale: 1.5,
          duration: 0.05,
          ease: "power2.out",
        },
        2.86
      );
      tl.to(
        [topLeftLightRef.current, bottomRightLightRef.current],
        {
          opacity: 0.70,
          scale: 1.00,
          duration: 0.14,
          ease: "power2.out",
        },
        2.91
      );

      // 2.86s → 3.04s: Center atmosphere brief expansion — Enhanced pulse
      tl.to(
        atmosphereRef.current,
        {
          opacity: 0.32,
          scale: 1.06,
          duration: 0.10,
          ease: "sine.out",
        },
        2.86
      );
      tl.to(
        atmosphereRef.current,
        {
          opacity: 0.18,
          scale: 1.0,
          duration: 0.20,
          ease: "sine.inOut",
        },
        2.96
      );

      // 2.88s → 3.06s: Controlled Radial Energy Pulse Expansion — Enhanced scale
      tl.to(
        energyPulseRef.current,
        {
          opacity: 0.50,
          scale: 0.90,
          duration: 0.12,
          ease: "power2.out",
        },
        2.88
      );
      tl.to(
        energyPulseRef.current,
        {
          opacity: 0.40,
          scale: 1.05,
          duration: 0.10,
          ease: "power1.out",
        },
        3.00
      );

      // 2.92s → 3.12s: 18 Localized Energy Particles Dispersion — Enhanced radius & trails
      contactParticlesRef.current.forEach((particle, idx) => {
        if (!particle) return;
        const angle = (idx / 18) * Math.PI * 2 + (idx % 3) * 0.2;
        const dist = 28 + (idx % 5) * 6;
        const tx = Math.cos(angle) * dist;
        const ty = Math.sin(angle) * dist;
        tl.fromTo(
          particle,
          { x: 0, y: 0, opacity: 0.85, scale: 0.9 },
          {
            x: tx,
            y: ty,
            opacity: 0,
            scale: 1.4,
            duration: 0.24,
            ease: "power2.out",
          },
          2.92 + (idx % 4) * 0.012
        );
      });

      // 3.06s → 3.16s: Energy Pulse Inward Contraction
      tl.to(
        energyPulseRef.current,
        {
          scale: 0.15,
          opacity: 0,
          duration: 0.10,
          ease: "power2.in",
        },
        3.06
      );

      // 3.15s → 3.20s: Tiny Central Energy Core (✦) Condenses and Stabilizes — Enhanced brightness
      tl.to(
        centralCoreRef.current,
        {
          opacity: 1.0,
          scale: 1.0,
          duration: 0.05,
          ease: "power2.out",
        },
        3.15
      );

      // ============================================================
      // PHASE 5: 3.20s → 3.85s ("KARE ACM Identity Formation")
      // ============================================================

      // 3.20s → 3.32s: Central Energy Core blossoms to seed the logo — Enhanced expansion
      tl.to(
        centralCoreRef.current,
        {
          scale: 2.2,
          opacity: 0.6,
          duration: 0.14,
          ease: "power2.out",
        },
        3.20
      );

      // 3.20s → 3.34s: 14 Particles Converge Inward toward Center Core — Enhanced luminosity
      convergeParticlesRef.current.forEach((particle, idx) => {
        if (!particle) return;
        const angle = (idx / 14) * Math.PI * 2 + (idx % 4) * 0.3;
        const dist = 56 + (idx % 4) * 14;
        const startX = Math.cos(angle) * dist;
        const startY = Math.sin(angle) * dist;
        tl.fromTo(
          particle,
          { x: startX, y: startY, opacity: 0, scale: 0.7 },
          {
            x: 0,
            y: 0,
            opacity: 0.9,
            scale: 1.2,
            duration: 0.16,
            ease: "power2.in",
            onComplete: () => {
              gsap.set(particle, { opacity: 0 });
            },
          },
          3.20 + (idx % 3) * 0.01
        );
      });

      // 3.28s → 3.72s: KARE ACM Logo Materializes from Central Spark — Enhanced radial clip reveal
      tl.to(
        logoContainerRef.current,
        {
          opacity: 1.0,
          scale: 1.0,
          clipPath: "circle(100% at 50% 50%)",
          filter: "blur(0px)",
          duration: 0.44,
          ease: "power3.out",
        },
        3.28
      );

      // 3.32s → 3.76s: Subtle Ambient Halo blooms behind the Logo — Enhanced visibility
      tl.to(
        logoHaloRef.current,
        {
          opacity: 0.28,
          scale: 1.05,
          duration: 0.44,
          ease: "power2.out",
        },
        3.32
      );

      // 3.55s → 3.78s: Hands gently dissolve into surrounding darkness
      tl.to(
        [
          handWrapperARef.current,
          handWrapperBRef.current,
          topLeftLightRef.current,
          bottomRightLightRef.current,
        ],
        {
          opacity: 0,
          duration: 0.25,
          ease: "power2.out",
        },
        3.55
      );

      // 3.55s → 3.78s: Energy Core softens into background halo behind logo
      tl.to(
        centralCoreRef.current,
        {
          scale: 0.4,
          opacity: 0.06,
          duration: 0.25,
          ease: "power3.inOut",
        },
        3.55
      );

      // 3.68s → 3.84s: Single Delicate Light Sweep passes across Logo — Enhanced sweep
      tl.fromTo(
        logoSweepRef.current,
        { x: "-140%", opacity: 0.55 },
        {
          x: "140%",
          opacity: 0,
          duration: 0.20,
          ease: "power2.inOut",
        },
        3.68
      );

      // 3.85s — KARE ACM Logo becomes stable at center

      // ============================================================
      // PHASE 6: 3.85s → 4.55s ("ACM Logo → Presents HackOdyssey 4.0")
      // ============================================================

      const logoOffsetY = isMobile ? -18 : -26;

      // 3.90s → 4.18s: KARE ACM Logo shifts upward & scales slightly (anchor on top)
      tl.to(
        logoContainerRef.current,
        {
          scale: 0.88,
          y: logoOffsetY,
          duration: 0.30,
          ease: "power3.inOut",
        },
        3.90
      );

      tl.to(
        logoHaloRef.current,
        {
          scale: 0.75,
          opacity: 0.16,
          duration: 0.30,
          ease: "power3.inOut",
        },
        3.90
      );

      // 3.95s → 4.23s: "PRESENTS" Eyebrow begins appearing via masked reveal — Enhanced slide
      tl.to(
        presentsRef.current,
        {
          y: 0,
          opacity: 1.0,
          duration: 0.32,
          ease: "power3.out",
        },
        3.95
      );

      // 4.08s → 4.50s: "HACK" word-level masked upward reveal — Enhanced timing
      tl.to(
        wordHackRef.current,
        {
          y: 0,
          opacity: 1.0,
          duration: 0.44,
          ease: "power3.out",
        },
        4.06
      );

      // 4.12s → 4.54s: "ODYSSEY" word-level masked upward reveal
      tl.to(
        wordOdysseyRef.current,
        {
          y: 0,
          opacity: 1.0,
          duration: 0.44,
          ease: "power3.out",
        },
        4.12
      );

      // 4.26s → 4.58s: Circled "4.0" Exponent Badge pops into place — Enhanced bounce & rotation
      tl.to(
        versionRef.current,
        {
          scale: 1.0,
          y: 0,
          rotation: 0,
          opacity: 1.0,
          duration: 0.34,
          ease: "back.out(2.0)",
        },
        4.26
      );

      // 4.48s → 4.58s: Badge settle micro-bounce for polish
      tl.to(
        versionRef.current,
        {
          scale: 1.05,
          duration: 0.06,
          ease: "power1.out",
        },
        4.48
      );
      tl.to(
        versionRef.current,
        {
          scale: 1.0,
          duration: 0.08,
          ease: "power2.inOut",
        },
        4.54
      );

      // 4.45s → 4.65s: Complete identity holds calmly: [KARE ACM LOGO] / PRESENTS / HACK ODYSSEY ⁴˙⁰

      // ============================================================
      // PHASE 7: 4.65s → 5.30s ("Cinematic Outro — Logo to Navbar")
      // ============================================================

      // 4.65s → 4.85s: Event presentation text gently dissolves downward — Enhanced with blur
      tl.to(
        eventTextGroupRef.current,
        {
          opacity: 0,
          y: 20,
          scale: 0.94,
          filter: "blur(4px)",
          duration: 0.22,
          ease: "power2.in",
        },
        4.65
      );

      // 4.65s: Fade out temporary skip button
      if (skipBtnRef.current) {
        tl.to(
          skipBtnRef.current,
          {
            opacity: 0,
            duration: 0.15,
            ease: "power2.in",
          },
          4.65
        );
      }

      // 4.70s → 5.25s: KARE ACM Logo glides smoothly from center to Navbar Logo position
      tl.to(
        identityGroupRef.current,
        {
          x: navDeltaX,
          y: navDeltaY,
          duration: 0.55,
          ease: "power3.inOut",
        },
        4.70
      );

      tl.to(
        logoContainerRef.current,
        {
          scale: targetScale,
          y: 0,
          duration: 0.55,
          ease: "power3.inOut",
        },
        4.70
      );

      // Halo behind logo fades away during flight
      tl.to(
        logoHaloRef.current,
        {
          opacity: 0,
          scale: 0.25,
          duration: 0.35,
          ease: "power2.in",
        },
        4.70
      );

      // 4.80s → 5.25s: Preloader dark overlay smoothly dissolves away to reveal the Hero section
      tl.to(
        containerRef.current,
        {
          opacity: 0,
          duration: 0.45,
          ease: "power2.inOut",
        },
        4.80
      );

      // 5.30s — Preloader unmounts completely, website is 100% interactive.
    },
    { scope: containerRef, dependencies: [isSkipped, isComplete] }
  );

  if (isComplete || isSkipped) return null;

  const addAmbientParticleRef = (el) => {
    if (el && !ambientParticlesRef.current.includes(el)) {
      ambientParticlesRef.current.push(el);
    }
  };

  const addContactParticleRef = (el) => {
    if (el && !contactParticlesRef.current.includes(el)) {
      contactParticlesRef.current.push(el);
    }
  };

  const addConvergeParticleRef = (el) => {
    if (el && !convergeParticlesRef.current.includes(el)) {
      convergeParticlesRef.current.push(el);
    }
  };

  return (
    <div
      ref={containerRef}
      className="hackodyssey-preloader"
      role="presentation"
      aria-hidden="true"
    >
      {/* 1. Preloader Background */}
      <div className="hop-background" />

      {/* 2. Center Atmosphere */}
      <div ref={atmosphereRef} className="hop-atmosphere" />

      {/* 3. Anticipation Glow between Fingertips (Phase 3) */}
      <div ref={anticipationGlowRef} className="hop-anticipation-glow" />

      {/* 4. Contact Flash & Energy Pulse (Phase 4) */}
      <div ref={contactFlashRef} className="hop-contact-flash" />
      <div ref={energyPulseRef} className="hop-energy-pulse" />
      <div ref={centralCoreRef} className="hop-central-core" />

      {/* 5. Inward Converging Energy Particles (Phase 5 — 14 Particles) */}
      <div className="hop-converge-particles-container">
        {Array.from({ length: 14 }).map((_, i) => (
          <div
            key={i}
            ref={addConvergeParticleRef}
            className="hop-converge-particle"
          />
        ))}
      </div>

      {/* 6. Central Identity Group (Phases 5, 6 & 7 — ACM Logo + PRESENTS + Title + Circled 4.0) */}
      <div ref={identityGroupRef} className="hop-identity-group">
        {/* KARE ACM Logo Halo & Container (Primary Visual Anchor) */}
        <div ref={logoHaloRef} className="hop-logo-halo" />
        <div ref={logoContainerRef} className="hop-logo-container">
          <img
            src={acmLogo}
            alt="KARE ACM"
            className="hop-logo-img"
            draggable="false"
            loading="eager"
            decoding="sync"
          />
          <div ref={logoSweepRef} className="hop-logo-sweep" />
        </div>

        {/* Event Presentation Layer (PRESENTS + HACK ODYSSEY ⁴˙⁰) */}
        <div ref={eventTextGroupRef} className="hop-event-text-group">
          {/* "PRESENTS" Eyebrow */}
          <div className="hop-presents-mask">
            <span ref={presentsRef} className="hop-presents-text">
              PRESENTS
            </span>
          </div>

          {/* HackOdyssey 4.0 Typography with Circled Exponent Badge */}
          <div ref={titleWrapRef} className="hop-title-wrap">
            <div className="hop-title-mask">
              <span ref={wordHackRef} className="hop-title-word hop-title-hack">
                HACK
              </span>
            </div>

            {/* ODYSSEY + Circled 4.0 Badge */}
            <div className="hop-odyssey-group">
              <div className="hop-title-mask">
                <span ref={wordOdysseyRef} className="hop-title-word hop-title-odyssey">
                  ODYSSEY
                </span>
              </div>

              {/* Exponential Circled 4.0 Badge (Matching Website Hero Section) */}
              <div className="hop-badge-wrap">
                <span
                  ref={versionRef}
                  className="hop-badge-exponent"
                  title="Version 4.0"
                >
                  4.0
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 7. Localized Contact Particles (Phase 4 — 18 Particles) */}
      <div className="hop-contact-particles-container">
        {Array.from({ length: 18 }).map((_, i) => (
          <div
            key={i}
            ref={addContactParticleRef}
            className="hop-contact-particle"
          />
        ))}
      </div>

      {/* 8. Ambient Microscopic Particles (Phase 1) */}
      <div className="hop-particles-container">
        <div ref={addAmbientParticleRef} className="hop-particle hop-particle-a" />
        <div ref={addAmbientParticleRef} className="hop-particle hop-particle-b" />
        <div ref={addAmbientParticleRef} className="hop-particle hop-particle-c" />
        <div ref={addAmbientParticleRef} className="hop-particle hop-particle-d" />
      </div>

      {/* 9. Hand A (Top-Left) with Fingertip Anchor and Light */}
      <div ref={handAnchorARef} className="hop-hand-anchor hop-hand-anchor-a">
        <div ref={handWrapperARef} className="hop-hand-wrapper">
          <div className="hop-hand-offset hop-hand-offset-a">
            <img
              src={handTopLeft}
              alt="Hand A"
              className="hop-hand-img"
              draggable="false"
              loading="eager"
              decoding="sync"
            />
          </div>
        </div>
        <div ref={topLeftLightRef} className="hop-light hop-light-top-left">
          <div className="hop-light-bloom" />
          <div className="hop-light-halo" />
          <div className="hop-light-core" />
        </div>
      </div>

      {/* 10. Hand B (Bottom-Right) with Fingertip Anchor and Light */}
      <div ref={handAnchorBRef} className="hop-hand-anchor hop-hand-anchor-b">
        <div ref={handWrapperBRef} className="hop-hand-wrapper">
          <div className="hop-hand-offset hop-hand-offset-b">
            <img
              src={handBottomRight}
              alt="Hand B"
              className="hop-hand-img"
              draggable="false"
              loading="eager"
              decoding="sync"
            />
          </div>
        </div>
        <div ref={bottomRightLightRef} className="hop-light hop-light-bottom-right">
          <div className="hop-light-bloom" />
          <div className="hop-light-halo" />
          <div className="hop-light-core" />
        </div>
      </div>

      {/* 11. Temporary Skip Control */}
      <button
        ref={skipBtnRef}
        type="button"
        onClick={handleSkip}
        className="hop-skip-btn"
        aria-label="Skip Intro"
      >
        <span>SKIP</span>
        <span className="hop-skip-key">ESC</span>
      </button>
    </div>
  );
}
