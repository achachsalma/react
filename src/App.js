
import './App.css';

import React from 'react';
//composant Pht
// fonction Pht()
const Pht=()=>{
return <div className='from-control'>
<label htmlFor='pht'> prix hors taxe</label>
<input type='number' id='pht' placeholder='saisir votre pht:'></input>
</div>;
}
//composant Tva
// fonction Tva()
const Tva=()=>{
  return <div className='from-control'>
  <label htmlFor='tva'> taux Tva</label>
  <input type='number' id='tva' placeholder='saisir votre tva:'></input>
  </div>;
  }
  //composant buttons
// fonction buttons()
const Buttons=()=>{
  return <div className='from-control'>
  <button>calculer</button>
  <button>initialiser</button>
  </div>
  };
  //composant res
// fonction res()
const Res=()=>{
  return <div className='from-control'>
  <label htmlFor='tva'> resultat :</label>
  <input type='number' id='tva' ></input>
  </div>;
  }
  const Calculpttc=()=>{
    return <fieldset>
      <legend>Calcul de pttc</legend>
      <Pht/>
<Tva/>
<Buttons/>
<Res/>
    </fieldset>
  }



function App() {
  return (
<div>
<Calculpttc/>
</div>
  );
}

export default App;
