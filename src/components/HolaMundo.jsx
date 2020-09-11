import React from 'react'

const HolaMundo = () => {
  const Hello = 'Hola Mundo!';
  const isTrue = true;
  return(
    <div className="HolaMundo">
      <h1>{Hello}</h1>
      <h2>Curso esencial de React</h2>
      <img src="https://i.picsum.photos/id/1066/500/400.jpg?hmac=0OdiHUxN1itZ3fdD9TT7KUnHviDN7tCvQcFjzad9eDM" alt="Image"/>
      { isTrue ? <h4>Esto es true</h4> : <h5>Esto es falso</h5> }
      { isTrue && <h4>Soy verdadero</h4> }
    </div>
  );
};

export default HolaMundo;