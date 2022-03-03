import React from 'react';
import house from '../icons/house.png';
import '../styles/card.css';

export default class Card extends React.Component {
    render() {
        const { thumb, name, type, bedrooms, vacancies, price, cardTestId } = this.props
        return (
           <div class="card">
           <img src={ thumb } class="card-img-top" alt="..." />
           <div class="card-body">
             <h5 class="card-title">{ name }</h5>
             <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
             <a href="#" class="btn btn-primary">Go somewhere</a>
           </div>
         </div>
        );
    }
}