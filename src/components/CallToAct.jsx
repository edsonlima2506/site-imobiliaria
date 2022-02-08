import React from 'react';
import '../styles/callToAct.css';
import keys from '../images/keys.jpg';

export default class CallToAct extends React.Component {
    render() {
        return (
            <div className="callToAct">
                <img src={ keys } alt="Molho de chaves" className="keys" />
                <section>
                    <h1>
                        Está na hora de <br></br>
                        realiazar o seu sonho!
                    </h1>
                    <h2>
                        Encontre o lar idal para você e sua família!
                    </h2>
                    <button>
                        Entrar em contato
                    </button>
                </section>
            </div>
        );
    }
}