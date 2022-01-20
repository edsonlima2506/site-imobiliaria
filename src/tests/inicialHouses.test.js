import React from 'react';
import { render, screen } from '@testing-library/react';
import InicialHouses from '../components/InicialHouses';

beforeEach(() => {
    render(<InicialHouses />);
  });

describe('Testa componente casas da tela inicial', () => {
    test('Deve haver um titulo com texto "casas" na tela', () => {
        const titleEl = screen.getByRole('heading', { level: 1, name: /Casas/i });
        expect(titleEl).toBeInTheDocument();
    });

    test('Deve haver na tela três cards de casa', () => {
        const cardsEl = screen.getAllByTestId("highlightsHouses");
        expect(cardsEl).toHaveLength(3);
    })
});