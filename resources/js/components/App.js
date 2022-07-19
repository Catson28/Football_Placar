import { castArray } from 'lodash';
import React from 'react';
import ReactDOM from 'react-dom';

import PlacarContainer from './PlacarContainer';
const dados = {
    partida: {
        estadio: "Mucanca/AO",
        data: "10/06/2016",
        horario: "19h",
    },

    casa: {
        nome:"Benfica",
    },

    visitante: {
        nome: "R. Libolo",
    }
};

function App() {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">App Component</div>

                        <div className="card-body">
                            <PlacarContainer {...dados} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
