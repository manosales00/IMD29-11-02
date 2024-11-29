import React, { Component } from 'react';

class ListaDeTarefas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titulo: '',
      status: 'No Prazo',
      tarefas: []
    };
  }

  handleTituloChange = (e) => {
    this.setState({ titulo: e.target.value });
  };

  handleStatusChange = (e) => {
    this.setState({ status: e.target.value });
  };

  adicionarTarefa = () => {
    const { titulo, status, tarefas } = this.state;

    if (titulo.trim() !== '') {
      const novaTarefa = { titulo, status };
      this.setState({
        tarefas: [...tarefas, novaTarefa],
        titulo: ''
      });
    } else {
      alert('Por favor, insira o título da tarefa.');
    }
  };

  render() {
    const { titulo, status, tarefas } = this.state;

    return (
      <div style={{ maxWidth: '400px', margin: '0 auto', padding: '20px', backgroundColor: '#333', color: '#fff', borderRadius: '8px' }}>
        <h2>Lista de Tarefas</h2>
        <div>
          <label>
            Título da Tarefa:
            <input
              type="text"
              value={titulo}
              onChange={this.handleTituloChange}
              style={{ width: '100%', padding: '8px', marginBottom: '10px' }}
            />
          </label>
          <label>
            Status da Tarefa:
            <select
              value={status}
              onChange={this.handleStatusChange}
              style={{ width: '100%', padding: '8px', marginBottom: '10px' }}
            >
              <option value="No Prazo">No Prazo</option>
              <option value="Próximo ao Prazo">Próximo ao Prazo</option>
              <option value="Atrasada">Atrasada</option>
            </select>
          </label>
          <button onClick={this.adicionarTarefa} style={{ width: '100%', padding: '10px', backgroundColor: '#007BFF', color: '#fff', border: 'none', borderRadius: '5px' }}>
            Adicionar Tarefa
          </button>
        </div>
        <ul style={{ listStyleType: 'none', padding: '0', marginTop: '20px' }}>
          {tarefas.map((tarefa, index) => (
            <li key={index} style={{ marginBottom: '10px', border: '1px solid #fff', padding: '10px', borderRadius: '5px' }}>
              <strong>Título:</strong> {tarefa.titulo}, <strong>Status:</strong> {tarefa.status}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ListaDeTarefas;