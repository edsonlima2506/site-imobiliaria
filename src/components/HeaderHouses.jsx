import React from 'react';
import Filter from './Filter';
import '../styles/header.css';

export default function HeaderHouses() {
    return (
        <header className="headerHouses">
            <div className="containerHeader">
                <h1 className="title">A casa perfeita, a um <br /> clique de distância!</h1>
                <div className="horizontalRow" />
                <button className="exploreButton">Explorar</button>
            </div>
            <Filter />
        </header>
    )
}