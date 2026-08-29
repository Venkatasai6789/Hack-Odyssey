import React from 'react'
import Hero from '../../components/Hero/Hero'
import Welcome from '../../components/Welcome/Welcome'
import Coordinators from '../../components/Coordinators/Coordinators'
import PrizePool from '../../components/PrizePool/PrizePool'
import Winners from '../../components/Winners/Winners'
import BenefitVideo from '../../components/BenefitVideo/BenefitVideo'
import Gallery from '../../components/Gallery/Gallery'
import MapLink from '../../components/MapLink/MapLink'
import MarqueeSticky from '../../components/Layouts/MarqueeSticky'
import StickyCols from '../../components/StickyCols/StickyCols'
import Activities from '../../components/Activities/Activities'
import Showcase from '../../components/Showcase/Showcase'
import Feedback from '../../components/Feedback/Feedback'

const Home = () => {
    return (
        <div className="overflow-x-hidden">
            <Hero />
            <Welcome />
            <Coordinators />
            <PrizePool />
            <Winners />
            <BenefitVideo />
            <Gallery />
            <div className="relative z-20 bg-[#181717] shadow-[0_-20px_50px_rgba(0,0,0,0.8)]">
                <MapLink />
                <MarqueeSticky />
                <StickyCols />
                <Activities />
                <Showcase />
                <Feedback />
            </div>
        </div>
    )
}

export default Home