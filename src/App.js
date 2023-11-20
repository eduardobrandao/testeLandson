import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ConsultaProjetos from './componentes/ConsultaProjeto';
import AdicionarPessoa from './componentes/AdicionarPessoa';
import AdicionarProjeto from './componentes/AdicionarProjeto';

function App() {
  return (
    <Router>
      <div className='App'>
        {/* Definindo as rotas */}
        <Routes>
          <Route path='/' exact component={ConsultaProjetos} />
          <Route path='/adicionar-pessoa' component={AdicionarPessoa} />
          <Route path='/adicionar-projeto' component={AdicionarProjeto} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
