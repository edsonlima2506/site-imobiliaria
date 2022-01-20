import React from 'react';
import { render, screen } from '@testing-library/react';
import Filter from '../components/Filter';

beforeEach(() => {
    render(<Filter />);
  });

describe('Testa componente Filter', () => {
    test('Deve haver uma seção de filtro de tipo de imóvel', () => {
        // Testa se o input está na tela
        const inputType = screen.getByTestId('input-type');
        expect(inputType).toBeInTheDocument();
        
        // Testa se o ícone e o texto estão na tela
        const titleType = screen.getByText(/tipo/i);
        expect(titleType).toBeInTheDocument();
        const iconType = screen.getByAltText(/icone de casa/i);
        expect(iconType).toBeInTheDocument();
    });

    test('Deve haver uma seção de filtro de número de quartos', () => {
        // Testa se o input está na tela
        const inputBedrooms = screen.getByTestId('input-bedrooms');
        expect(inputBedrooms).toBeInTheDocument();
        
        // Testa se o ícone e o texto estão na tela
        const titleBedrooms = screen.getByText(/quartos/i);
        expect(titleBedrooms).toBeInTheDocument();
        const iconBedroom = screen.getByAltText(/icone de cama/i);
        expect(iconBedroom).toBeInTheDocument();
    });

    test('Deve haver uma seção de filtro de número de vagas', () => {
        // Testa se o input está na tela
        const inputGarages = screen.getByTestId('input-garages');
        expect(inputGarages).toBeInTheDocument();
        
        // Testa se o ícone e o texto estão na tela
        const titleGarages = screen.getByText(/quartos/i);
        expect(titleGarages).toBeInTheDocument();
        const iconCar = screen.getByAltText(/icone de cama/i);
        expect(iconCar).toBeInTheDocument();
    });

    test('Deve haver uma seção de filtro por preço', () => {
        // Testa se o input está na tela
        const inputMaxPrice = screen.getByTestId('input-max-price');
        expect(inputMaxPrice).toBeInTheDocument();
        
        // Testa se o ícone e o texto estão na tela
        const titleMaxPrice = screen.getByText(/quartos/i);
        expect(titleMaxPrice).toBeInTheDocument();
        const iconWallet = screen.getByAltText(/icone de cama/i);
        expect(iconWaller).toBeInTheDocument();
    });
});