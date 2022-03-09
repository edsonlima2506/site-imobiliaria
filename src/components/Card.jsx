import React from 'react';
import '../styles/card.css';

export default class Card extends React.Component {
    render() {
        const { thumb, name, type, bedrooms, vacancies, price } = this.props
        return (
           <div class="card">
           <img src={ thumb } class="card-img-top" alt="..." />
           <div class="card-body">
             <h5 class="card-title">{ name }</h5>
             <p class="card-text">{type} com { bedrooms } quarto(s), { vacancies } vagas.<br />Preço: { price }Mil</p>
             <a href="/casas" class="btn btn-primary">Ver mais</a>
           </div>
         </div>
        );
    }
}