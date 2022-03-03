import React from 'react';
import Filter from './Filter';
import '../styles/header.css';

export default function HeaderApes() {
    return (
        <header className="headerApes">
            <div className="containerHeader">
                <h1 className="title">Seu próximo apê,<br /> com certeza está aqui!</h1>
                <div className="horizontalRow" />
                <button className="exploreButton">Explorar</button>
            </div>
            <Filter />
        </header>
    )
}