import React from 'react';
import '../styles/footer.css';

export default function Footer() {
    return (
        <footer>
            <div className='containerNav'>
            <nav>
                <h1 class="navbar-brand">Sobre Nós</h1>
            </nav>
                <nav class="nav nav-pills flex-column">
                    <a class="nav-link" href="#item-1">Localização</a>
                    <a class="nav-link" href="#item-2">Telefone: (35) 98455-8944</a>
                    <a class="nav-link" href="#item-3">Creci: MG 39626</a>
                    <a class="nav-link" href="#item-3">CNAI: 35711</a>
                </nav>
            </div>
        </footer>
    );
}