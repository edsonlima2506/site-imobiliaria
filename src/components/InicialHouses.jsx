import React from 'react';
import { highlightsHouses } from '../data/houses';
import Card from '../components/Card';

export default function InicialHouses() {
    return (
        <div className="inicialHouses">
            <h1>Casas</h1>
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