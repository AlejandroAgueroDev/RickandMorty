import React from 'react';
import Form from '../components/Form/Form'; 

function Landing({ onLogin }) {
    return (
      <div>
        {/* <h1>Bienvenido a la página de inicio</h1> */}
        <Form onLogin={onLogin} />
      </div>
    );
  }
  
  export default Landing;