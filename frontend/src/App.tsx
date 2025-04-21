// frontend/src/App.tsx
import React, { useEffect, useState } from 'react';

const App: React.FC = () => {
  const [data, setData] = useState<any>(null);
  const [name, setName] = useState<string>('');
  const [responseMessage, setResponseMessage] = useState<string>('');

  // Requisição GET para buscar a data do banco
  useEffect(() => {
    fetch('http://localhost:5000/')
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error('Erro ao buscar dados:', error));
  }, []);

  // Função para enviar dados via POST para o backend
  const submitData = () => {
    fetch('http://localhost:5000/data', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: name }),
    })
      .then((response) => response.json())
      .then((data) => setResponseMessage(data.message))
      .catch((error) => console.error('Erro:', error));
  };

  return (
    <div>
      <h1>Dados do Backend</h1>
      {data ? (
        <div>
          <p>Data do banco: {data.now}</p>
        </div>
      ) : (
        <p>Carregando...</p>
      )}

      <h2>Enviar dados para o backend</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Digite seu nome"
      />
      <button onClick={submitData}>Enviar</button>

      {responseMessage && <p>Resposta do backend: {responseMessage}</p>}
    </div>
  );
};

export default App;
