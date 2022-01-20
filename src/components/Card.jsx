import React from 'react';
import '../styles/card.css';

export default class Card extends React.Component {
    render() {
        const { thumb, name, type, bedrooms, vacancies, price, cardTestId } = this.props
        return (
            <div className="card" data-testid={ cardTestId }>
                <img src={ thumb } alt="" className="cardThumb" />
                <h1 className="cardName">{ name }</h1>
                <h3 className="cardType">{ type }</h3>
                <h3 className="cardBedrooms">{ bedrooms }</h3>
                <h3 className="cardVacancies">{ vacancies }</h3>
                <h3 className="cardPrice">{ `R$${ price }` }</h3>
            </div>
        );
    }
}