/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react';

const AdicionarProjeto = ({ onAdicionarProjeto }) => {
    const [nome, setNome] = useState('');
    const [dataInicio, setdataInicio] = useState('');
    const [dataPrevisaoFim, setdataPrevisaoFim] = useState('');
    const [dataFim, setdataFim] = useState('');
    const [descriao, setdescriao] = useState('');
    const [status, setstatus] = useState('');
    const [orcamento, setorcamento] = useState('');
    const [risco, setrisco] = useState('');
    const [idGerente, setidGerente] = useState('');


    const handleAdicionarClick = () => {
        // Verifica se o nome e a idade estão preenchidos
        if (nome && dataInicio && dataPrevisaoFim && dataFim && descriao && status && orcamento && risco && idGerente) {
            const novoProjeto = { nome, dataInicio, dataPrevisaoFim, dataFim, descriao, status, orcamento, risco, idGerente };
            onAdicionarProjeto(novoProjeto);
            setNome('');
            setdataInicio('');
            setdataPrevisaoFim('');
            setdataFim('')
            setdescriao('')
            setstatus('')
            setorcamento('')
            setrisco('')
            setidGerente('')

        } else {
            alert('Preencha todas as informações antes de finalizar');
        }
    };

    return (
        <div className="adicionar-projeto-container"> {/* Adicione a classe do container */}
            <h2>Adicionar Projeto</h2>
            <div className="input-group"> {/* Container para os inputs */}
                <label>Nome:</label>
                <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
            </div>
            <div className="input-group">
                <label>Data Inicio:</label>
                <input type="text" value={dataInicio} onChange={(e) => setdataInicio(e.target.value)} />
            </div>
            <div className="input-group">
                <label>Data Previsão Fim:</label>
                <input type="text" value={dataPrevisaoFim} onChange={(e) => setdataPrevisaoFim(e.target.value)} />
            </div>
            <div className="input-group">
                <label>Data Fim:</label>
                <input type="text" value={dataFim} onChange={(e) => setdataFim(e.target.value)} />
            </div>
            <div className="input-group">
                <label>Descrição:</label>
                <input type="text" value={descriao} onChange={(e) => setdescriao(e.target.value)} />
            </div>
            <div className="input-group">
                <label>Status Projeto:</label>
                <input type="text" value={status} onChange={(e) => setstatus(e.target.value)} />
            </div>
            <div className="input-group">
                <label>Orçamento Projeto:</label>
                <input type="text" value={orcamento} onChange={(e) => setorcamento(e.target.value)} />
            </div>
            <div className="input-group">
                <label>Risco Atribuido ao Projeto:</label>
                <input type="text" value={risco} onChange={(e) => setrisco(e.target.value)} />
            </div>
            <div className="input-group">
                <label>Identificação Gerente:</label>
                <input type="text" value={idGerente} onChange={(e) => setidGerente(e.target.value)} />
            </div>
            <button onClick={handleAdicionarClick}>Adicionar</button>
        </div>
    );
};

export default AdicionarProjeto;
