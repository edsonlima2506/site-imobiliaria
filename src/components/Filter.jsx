import React from 'react';
import house from '../icons/house.png';
import bad from '../icons/bed.png';
import car from '../icons/car.png';
import wallet from '../icons/wallet.png';
import search from '../icons/search.png';
import '../styles/filter.css';

export default class Filter extends React.Component {
    render() {
        const filterComponents = () => {
            return (
                <div className="filterComponents">
                    <div className="divBedrooms divisionFilter">
                        <span>
                            <img src={ house } alt="icone de casa" className="icon" />
                            <h2 className="titleFilter">Tipo</h2>
                        </span>
                        <select name="type" id="typeSelect" data-testid="input-type">
                            <option value="casa">Casa</option>
                            <option value="apartamento">Apartamento</option>
                        </select>
                    </div>
                    <div className="divBedrooms divisionFilter">
                        <span>
                            <img src={ bad } alt="icone de cama" className="icon" />
                            <h2 className="titleFilter">Quartos</h2>
                        </span>
                        <select name="bedrooms" id="bedroomsSelect" data-testid="input-bedrooms">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4+</option>
                        </select>
                    </div>
                    <div className="divGarages divisionFilter">
                        <span>
                            <img src={ car } alt="icone de carro" className="icon" />
                            <h2 className="titleFilter">Vagas</h2>
                        </span>
                        <select name="garage" id="garageSelect" data-testid="input-garages">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3+</option>
                        </select>
                    </div>
                    <div className="divPrice divisionFilter">
                        <span>
                            <img src={ wallet } alt="icone de carteira" className="icon" />
                            <h2 className="titleFilter">Preço Max.</h2>
                        </span>
                        <select name="price" id="priceSelect" data-testid="input-max-price">
                            <option value="150.000">Até 150.000</option>
                            <option value="250.000">Até 250.000</option>
                            <option value="500.000">Até 500.000</option>
                        </select>
                    </div>
                    <button className="buttonSearch">
                        <img src={ search } alt="" />
                    </button>
                </div>
            );
        }
        return (
            <div className="filter" data-testid="filter-section">
                { filterComponents() }
            </div>
        );
    }
}