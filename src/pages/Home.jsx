import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import MysteryArtist from '../components/MysteryArtist';
import Timeline from '../components/Timeline';
import Sponsors from '../components/Sponsors';
import Footer from '../components/Footer';

function Home(props) {
    return (
        <>
        <Header/>
        <Hero/>
        <MysteryArtist/>
        <Sponsors/>
        <Timeline/>
        <Footer/>
        </>
    );
}

export default Home;