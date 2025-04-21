// backend/server.js
const cors = require('cors');
const express = require('express');
const { Pool } = require('pg');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// Conexão com o banco de dados (usando as credenciais do Supabase)
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

// Usando CORS para permitir requisições do frontend
app.use(cors()); // Permite todas as origens ou você pode especificar uma origem específica
app.use(express.json()); // Para interpretar o corpo das requisições JSON

// Endpoint para testar a conexão com o banco de dados
app.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT NOW()');
    res.json(result.rows[0]); // Retorna a data e hora do banco
  } catch (err) {
    res.status(500).send('Erro ao conectar ao banco de dados');
  }
});

// Endpoint para receber dados via POST (exemplo de como enviar dados do frontend para o backend)
app.post('/data', async (req, res) => {
  const { name } = req.body;
  try {
    res.status(200).send({ message: `Recebido: ${name}` });
  } catch (err) {
    res.status(500).send('Erro ao processar dados');
  }
});

// Iniciando o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
