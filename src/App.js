import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import html2canvas from 'html2canvas';

function App() {

  const [linea1, setLinea1] = useState('');
  const [linea2, setLinea2] = useState('');
  const [imagen, setImagen] = useState('fire');

  const onChangeLineaUno = function(event){
    setLinea1(event.target.value);
  }

  const onChangeLineaDos = function(event){
    setLinea2(event.target.value);
  }

  const onChangeSelect = function(event){
    setImagen(event.target.value);
  }

  // utilizamos la librería html2canvas para
  // completar el proceso de exportación

  const onClickExportar = function(event){
    html2canvas(document.querySelector("#meme")).then(canvas => {
      
      const url = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.download = 'meme.png';
      link.href = url;
      link.click();
    });
  }

  return (
    <div className="App">

      <div className="form">
        <select 
          onChange={onChangeSelect}
          name="" 
          id=""
        >
          <option value="fire">Casa en llamas</option>
          <option value="futurama">Futurama</option>
          <option value="history">History</option>
          <option value="matrix">Matrix</option>
          <option value="philosoraptor">Raptor</option>
          <option value="smart">Smart guy</option>

        </select>

        <input 
          onChange={onChangeLineaUno}
          type="text" 
          placeholder="texto superior" 
        />
      

        <input 
          onChange={onChangeLineaDos}
          type="text" 
          placeholder="texto inferior" 

        />

        <button onClick={onClickExportar}>Exportar</button>
        
      </div>

      <div className="meme" id="meme">
        <span className="text-top">{linea1}</span>
        <span className="text-bottom">{linea2}</span>
        <img src={`/img/${imagen}.jpg`} />
      </div>

    </div>
  );
}

export default App;
