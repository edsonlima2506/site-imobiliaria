import React from 'react';
import logo from '../images/logo.jpeg';
import facebook from '../icons/facebook.png';
import whatsapp from '../icons/whatsapp.png';
import instagram from '../icons/instagram.png';
import Filter from './Filter';
import '../styles/header.css';

export default function Header() {
    return (
        <header>
            <div className="superiorMenu">
                <img src={ logo } alt="logo" className="logo" />
                <nav>
                    <ul className="superiorList">
                        <li name="inicio">Início</li>
                        <li name="casas"><a href="#houses">Casas</a></li>
                        <li name="apartamentos"><a href="#apes">Apartamentos</a></li>
                    </ul>
                </nav>
                <div className="socialMediaLinks">
                    <a href="">
                        <img src={ facebook } alt="social-icon" className="socialMediaIcon" />
                    </a>
                    <a href="">
                        <img src={ whatsapp } alt="social-icon" className="socialMediaIcon" />
                    </a>
                    <a href="">
                        <img src={ instagram } alt="social-icon" className="socialMediaIcon" />
                    </a>
                </div>
            </div>
            <div className="containerHeader">
                <h1 className="title">Encontre aqui,o seu novo lar!</h1>
                <div className="horizontalRow" />
                <button className="exploreButton">Explorar</button>
            </div>
            <Filter />
        </header>
    )
}