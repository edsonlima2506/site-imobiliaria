import React from 'react';
import HeaderApes from '../components/HeaderApes';
import { apartments } from '../data/apartments';
import Card from '../components/Card';

export default function Apartments() {
    return (
        <div>
            <HeaderApes />
            <div className="housesContainer">
                { apartments.map((ape) => (
                    <Card
                        key={ ape.id }
                        thumb={ ape.thumb }
                        name={ ape.name }
                        type={ ape.type }
                        bedrooms={ ape.bedrooms }
                        vacancies={ ape.vacancies }
                        price={ ape.price }
                    />
                ))
                }
            </div>
        </div>
    )
}