import { castArray } from 'lodash';
import React from 'react';
import ReactDOM from 'react-dom';

import PlacarContainer from './PlacarContainer';
const dados = {
    partida: {
        estadio: "11 De Novembro/AO",
        data: "10/06/2016",
        horario: "19h",
    },

    casa: {
        nome:"Petro",
    },

    visitante: {
        nome: "1º De Agosto",
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
                            <PlacarContainer partida={dados.partida}
                                            casa={dados.casa}
                                            visitante ={dados.visitante}
                            />
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
