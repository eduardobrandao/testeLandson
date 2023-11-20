import React, { useState } from 'react';

const AdicionarPessoa = ({ onAdicionarPessoa }) => {
    const [nome, setNome] = useState('');
    const [DataNascimento, setDataNascimento] = useState('');
    const [Cpf, setCpf] = useState('');
    const [Cargo, setCargo] = useState('');


    const handleAdicionarClick = () => {
        // Verifica se o nome e a idade estão preenchidos
        if (nome && DataNascimento && Cpf && Cargo) {
            const novaPessoa = { nome, DataNascimento, Cpf, Cargo };
            onAdicionarPessoa(novaPessoa);
            setNome('');
            setDataNascimento('');
            setCpf('');
            setCargo('')
        } else {
            alert('Preencha todos os campos');
        }
    };

    return (
        <div className="adicionar-pessoa-container"> {/* Adicione a classe do container */}
            <h2>Adicionar Pessoa</h2>
            <div className="input-group"> {/* Container para os inputs */}
                <label>Nome:</label>
                <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
            </div>
            <div className="input-group">
                <label>Data de Nascimento:</label>
                <input type="text" value={DataNascimento} onChange={(e) => setDataNascimento(e.target.value)} />
            </div>
            <div className="input-group">
                <label>CPF:</label>
                <input type="text" value={Cpf} onChange={(e) => setCpf(e.target.value)} />
            </div>
            <div className="input-group">
                <label>Cargo:</label>
                <input type="text" value={Cargo} onChange={(e) => setCargo(e.target.value)} />
            </div>
            <button onClick={handleAdicionarClick}>Adicionar</button>
        </div>
    );
};

export default AdicionarPessoa;
