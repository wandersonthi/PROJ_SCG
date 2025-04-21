import { useState, useEffect } from 'react';

function App() {
  // Estado para armazenar os dados da resposta
  const [data, setData] = useState<any>(null);

  // Função para fazer a requisição para a API
  useEffect(() => {
    fetch('http://localhost:5000/')
      .then(response => response.json())
      .then(data => setData(data)) // Armazena os dados da API no estado
      .catch(error => console.error('Erro ao buscar dados:', error));
  }, []); // O array vazio [] faz a requisição apenas uma vez, quando o componente é montado.

  return (
    <div className="text-center">
      <header className="min-h-screen flex flex-col items-center justify-center bg-[#282c34] text-white text-[calc(10px+2vmin)]">
        <h1 className="text-2xl">Sistema de Gestão de Cursos</h1>

        {/* Exibindo dados ou uma mensagem de "Carregando..." */}
        {data ? (
          <p>Conexão bem-sucedida com o banco de dados: {data.now}</p>
        ) : (
          <p>Carregando dados...</p>
        )}

        <img
          src="https://reactjs.org/logo-og.png"
          alt="logo"
          className="h-[40vmin] pointer-events-none animate-[spin_20s_linear_infinite]"
        />
        
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="text-[#61dafb] hover:underline"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <a
          className="text-[#61dafb] hover:underline"
          href="https://tanstack.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn TanStack
        </a>
      </header>
    </div>
  );
}

export default App;
