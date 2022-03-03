import React from 'react';
import Header from '../components/Header';
import InicialHouses from '../components/InicialHouses';
import InicialApes from '../components/InicialApes';
import CallToAct from '../components/CallToAct';
import Footer from '../components/Footer';

export default function Index() {
    return (
        <div>
            <Header />
            <InicialHouses />
            <InicialApes />
            <CallToAct />
            <Footer />
        </div>
    )
}