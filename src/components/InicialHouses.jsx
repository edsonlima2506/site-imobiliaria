import React from 'react';
import { highlightsHouses } from '../data/houses';
import Card from '../components/Card';
import '../styles/inicialHouses.css';

export default function InicialHouses() {
    return (
        <div className="inicialHouses" id="houses">
            <span className="headerInicial">
                <h1 className="inicialTitle">Casas</h1>
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