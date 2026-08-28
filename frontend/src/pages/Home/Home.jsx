import React from 'react'
import Hero from '../../components/Hero/Hero'
import Welcome from '../../components/Welcome/Welcome'
import Coordinators from '../../components/Coordinators/Coordinators'
import PrizePool from '../../components/PrizePool/PrizePool'
import StickyCols from '../../components/StickyCols/StickyCols'
import Gallery from '../../components/Gallery/Gallery'
import MarqueeText from '../../components/Marquee/MarqueeText'
import MarqueeSticky from '../../components/Layouts/MarqueeSticky'
import MapLink from '../../components/MapLink/MapLink'
import Activities from '../../components/Activities/Activities'
import Showcase from '../../components/Showcase/Showcase'
import Feedback from '../../components/Feedback/Feedback'
import FooterBanner from '../../components/FooterBanner/FooterBanner'

const Home = () => {
    return (
        <div>
            <Hero />
            <Welcome />
            <Coordinators />
            <PrizePool />
            <Gallery />
            <MapLink />
            <MarqueeSticky />
            <StickyCols />
            <Activities />
            <Showcase />
            <Feedback />
            <FooterBanner />
        </div >
    )
}

export default Home