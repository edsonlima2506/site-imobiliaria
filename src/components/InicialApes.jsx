import React from 'react';
import { highlightsApartments } from '../data/apartments';
import Card from './Card';
import '../styles/inicialHouses.css';

export default function InicialApartments() {
    return (
        <div className="inicialHouses" id="apes">
            <span className="headerInicial">
                <h1 className="inicialTitle">Apartamentos</h1>
            </span>
            <div className="cards">
                { highlightsApartments.map( (house) => (
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