import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import MysteryArtist from '../components/MysteryArtist';
import Timeline from '../components/Timeline';
import Sponsors from '../components/Sponsors';

function Home(props) {
    return (
        <>
        <Header/>
        <Hero/>
        <MysteryArtist/>
        <Timeline/>
        <Sponsors/>
        </>
    );
}

export default Home;