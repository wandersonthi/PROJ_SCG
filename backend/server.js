
// server.js
const cors = require('cors');
app.use(cors());
const express = require('express');
const { Pool } = require('pg');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// Conexão com o banco de dados (usando as credenciais do Supabase)
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

app.use(express.json());

// Endpoint para testar a conexão com o banco de dados
app.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT NOW()');
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).send('Erro ao conectar ao banco de dados');
  }
});

// Iniciando o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
