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
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const SECRET = process.env.JWT_SECRET || 'segredo123'

// Simulação de usuário cadastrado (em produção, consulte o banco)
const usuarios = [
  {
    id: 1,
    nome: 'Wanderson',
    email: 'wanderson@example.com',
    senha: bcrypt.hashSync('123456', 10), // Senha criptografada
  },
]

// Nova rota de login
app.post('/login', async (req, res) => {
  const { email, senha } = req.body

  const usuario = usuarios.find((u) => u.email === email)
  if (!usuario || !bcrypt.compareSync(senha, usuario.senha)) {
    return res.status(401).json({ erro: 'Credenciais inválidas' })
  }

  const token = jwt.sign({ id: usuario.id, nome: usuario.nome }, SECRET, {
    expiresIn: '2h',
  })

  res.json({ mensagem: 'Login realizado com sucesso', token })
})
// Usando CORS para permitir requisições do frontend
app.use(cors()); // Permite todas as origens ou você pode especificar uma origem específica
app.use(express.json()); // Para interpretar o corpo das requisições JSON
app.post('/alunos', async (req, res) => {
  const { nome, email } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO alunos (nome, email) VALUES ($1, $2) RETURNING *',
      [nome, email]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ erro: 'Erro ao cadastrar aluno' });
  }
});

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
