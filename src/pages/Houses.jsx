import React from 'react';
import HeaderHouses from '../components/HeaderHouses';
import Card from '../components/Card';
import { houses } from '../data/houses';
import '../styles/houses.css';

export default function Houses() {
    return (
        <div>
            <HeaderHouses />
            <div className="housesContainer">
                {
                    houses.map((house) =>( 
                    <Card
                        key={ house.id }
                        thumb={ house.thumb }
                        name={ house.name }
                        type={ house.type }
                        bedrooms={ house.bedrooms }
                        vacancies={ house.vacancies }
                        price={ house.price }
                    />
                    ))
                }
            </div>
        </div>
    )
}