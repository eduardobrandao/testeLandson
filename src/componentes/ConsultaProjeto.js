import React, { useState, useEffect } from 'react';
import "../App.css"
import AdicionarPessoa from './AdicionarPessoa';


const ConsultaProjetos = () => {
    const [projetos, setProjetos] = useState([]);
    const [pessoas, setPessoas] = useState([]);

    useEffect(() => {
        async function fetchProjetos() {
            try {
            } catch (error) {
                console.error('Erro ao buscar os projetos:', error);
            }
        }
        fetchProjetos();
    }, []);

    useEffect(() => {
        async function fetchPessoas() {
            try {
            } catch (error) {
                console.error('Erro ao adicionar funcionario:', error);
            }
        }
        fetchPessoas();
    }, []);

    const handleAdicionarProjeto = () => {
        // Lógica para adicionar um novo projeto
        // Esta função será executada quando o botão for clicado
        // Por exemplo, você pode abrir um modal de criação de projeto ou redirecionar para uma página de criação
        console.log('Botão de Adicionar Projeto clicado!');
    };
    const adicionarPessoa = (novaPessoa) => {
        // Lógica para adicionar pessoa 
        return (
            <div>
                <h1>Lista de Pessoas</h1>
                <AdicionarPessoa onAdicionarPessoa={adicionarPessoa} />
                <ul>
                    {pessoas.map((pessoa, index) => (
                        <li key={index}>
                            Nome: {pessoa.nome}, Idade: {pessoa.idade}
                        </li>
                    ))}
                </ul>
            </div>
        );
        console.log('Botão de Adicionar Pessoa clicado!');
    };
    return (
        <div>
            <h1>Consulta de Projetos</h1>
            <div>
                <button className='botaoAdicionarPessoa' onClick={adicionarPessoa}>Add Funcionario</button>
                <button className='botaoAdicionar' onClick={handleAdicionarProjeto}>New Project</button>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Data de Início</th>
                        <th>Gerente</th>
                        {/* Adicione outras colunas aqui conforme necessário */}
                    </tr>
                </thead>
                <tbody>
                    {projetos.map((projeto) => (
                        <tr key={projeto.id}>
                            <td>{projeto.nome}</td>
                            <td>{projeto.dataInicio}</td>
                            <td>{projeto.gerente}</td>
                            {/* Adicione mais células de acordo com as informações */}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ConsultaProjetos;
