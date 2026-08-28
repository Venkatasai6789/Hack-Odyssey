import React from 'react'
import Hero from '../../components/Hero/Hero'
import Welcome from '../../components/Welcome/Welcome'
import Coordinators from '../../components/Coordinators/Coordinators'
import PrizePool from '../../components/PrizePool/PrizePool'
import StickyCols from '../../components/StickyCols/StickyCols'
import Gallery from '../../components/Gallery/Gallery'
import BenefitVideo from '../../components/BenefitVideo/BenefitVideo'
import MarqueeText from '../../components/Marquee/MarqueeText'
import MarqueeSticky from '../../components/Layouts/MarqueeSticky'
import MapLink from '../../components/MapLink/MapLink'
import Activities from '../../components/Activities/Activities'
import Showcase from '../../components/Showcase/Showcase'
import Feedback from '../../components/Feedback/Feedback'
import FooterBanner from '../../components/FooterBanner/FooterBanner'

const Home = () => {
    return (
        <div className="overflow-x-hidden">
            <Hero />
            <Welcome />
            <Coordinators />
            <PrizePool />
            <Gallery />
            <BenefitVideo />
            <div className="relative z-20 bg-[#181717] shadow-[0_-20px_50px_rgba(0,0,0,0.8)]">
                <MapLink />
                <MarqueeSticky />
                <StickyCols />
                <Activities />
                <Showcase />
                <Feedback />
                <FooterBanner />
            </div>
        </div >
    )
}

export default Home