import { Outlet } from "react-router-dom";
import gsap from "gsap";
import { ScrollSmoother } from "gsap/all";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "../components/Navbar/Navbar";
import { useEffect } from "react";
import { initLenis } from "../lib/lenis";
import Preloader from "../components/Preloader/Preloader";
import HackOdysseyPreloader from "../components/Preloader/HackOdysseyPreloader";
import ReserveBtn from "../components/Buttons/ReserveBtn";
import Logo from "../components/Buttons/Logo";
import Footer from "../components/Footer/Footer";
import CustomCursor from "../components/Cursor/CustomCursor";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const MainLayout = () => {

    useGSAP(() => {
        ScrollSmoother.create({
            wrapper: "#smooth-wrapper",
            content: "#smooth-content",
            smooth: 1.5,
            effects: true,
        });
    });

    return (
        <>
            <CustomCursor />
            <HackOdysseyPreloader />
            <Navbar />
            <div id="smooth-wrapper">
                <div id="smooth-content">
                    <main>
                        <Outlet /> {/* Hero, About, Contact, etc. */}
                        <Footer />
                    </main>
                </div>
            </div>
        </>
    );
};

export default MainLayout;