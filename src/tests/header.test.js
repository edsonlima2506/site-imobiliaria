
import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '../components/Header';

beforeEach(() => {
    render(<Header />);
  });

describe('Testa componente Header', () => {
    test('O header deve possuir um titulo H1', () => {
        expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
    });

    test('O header deve possuir a logo da empresa', () => {
        expect(screen.getByAltText('logo')).toBeInTheDocument();
    });

    test('O header deve possuir uma barra de navegação', () => {
        expect(screen.getByRole('navigation')).toBeInTheDocument();
        expect(screen.getAllByRole('listitem')).toHaveLength(3);
    });

    test('O header deve possuir uma área de filtro', () => {
        expect(screen.getByTestId('filter-section')).toBeInTheDocument();
    });

    test('O header deve possuir as logos para das redes sociais', () => {
        expect(screen.getAllByAltText('social-icon')).toHaveLength(3);
    });
});