import React from 'react';
import { highlightsHouses } from '../data/houses';
import { Link } from 'react-router-dom';
import Card from './Card';
import '../styles/inicialHouses.css';

export default function InicialHouses() {
    return (
        <div className="inicialHouses">
            <span className="headerInicial">
                <h1 className="inicialTitle">Apartamentos</h1>
            </span>
            <div className="cards">
                { highlightsHouses.map( (house) => (
                    <Card
                        key={ house.id }
                        thumb={ house.thumb }
                        name={ house.name }
                        type={ house.type }
                        bedrooms={ house.bedrooms }
                        vacancies={ house.vacancies }
                        price={ house.price }
                        cardTestId="highlightsHouses"
                    />
                ) ) }
             </div>
        </div>
    );
}