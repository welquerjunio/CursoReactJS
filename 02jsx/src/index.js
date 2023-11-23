// Importar modulos
import React from 'react';
import ReactDOM from 'react-dom';

// sem jsx
const elemento = React.createElement('h1', {}, 'Sem JSX');
ReactDOM.render(elemento, document.getElementById('root'));


// com jsx
ReactDOM.render(<h1>Com JSX</h1>, document.getElementById('root'));

