// frontend/src/App.tsx
import React, { useState } from 'react';

const App = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/alunos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nome, email }),
      });

      const data = await response.json();
      setMensagem(`Aluno cadastrado com sucesso: ${data.nome}`);
      setNome('');
      setEmail('');
    } catch (error) {
      console.error(error);
      setMensagem('Erro ao cadastrar aluno');
    }
  };

  return (
    <div style={{ maxWidth: 500, margin: '50px auto', fontFamily: 'sans-serif' }}>
      <h1>Cadastro de Aluno</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nome:</label>
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
            style={{ width: '100%', padding: '8px' }}
          />
        </div>
        <div style={{ marginTop: 10 }}>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ width: '100%', padding: '8px' }}
          />
        </div>
        <button type="submit" style={{ marginTop: 15, padding: '10px 20px' }}>
          Cadastrar
        </button>
      </form>
      {mensagem && <p style={{ marginTop: 20 }}>{mensagem}</p>}
    </div>
  );
};

export default App;
