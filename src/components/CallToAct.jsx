import React from 'react';
import '../styles/callToAct.css';
import keys from '../images/keys.jpg';
import house from '../icons/house2.png';
import handkey from '../icons/handkey.png';
import findHouse from '../icons/house3.png';

export default class CallToAct extends React.Component {
    render() {
        return (
            <div>
                <div className="callToAct1">
                    <img src={ keys } alt="Molho de chaves" className="keys" />
                    <section>
                        <h1>
                            Está na hora de<br></br>
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
                <div className="callToAct2">
                    <section className="benefit">
                        <img src={ house } alt="" className="benefit-icon" />
                        <h3>
                            Casas <br></br>
                            reformadas
                        </h3>
                    </section>
                    <section className="benefit">
                        <img src={ handkey } alt="" className="benefit-icon" />
                        <h3>
                            Chave em suas<br></br>
                            mão na hora!
                        </h3>
                    </section>
                    <section className="benefit">
                        <img src={ findHouse } alt="" className="benefit-icon" />
                        <h3>
                            Pesquise fácil as<br></br>
                            melhores opções
                        </h3>
                    </section>
                </div>
            </div>
        );
    }
}