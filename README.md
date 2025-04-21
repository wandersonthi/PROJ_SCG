# Sistema de Gestão de Cursos e Anotações

PROJ_SCG - Sistema de Gestão de Cursos e Anotações dos Alunos
Projeto fullstack para gerenciamento de cursos, anotações e desempenho dos alunos, com autenticação, bancos de dados relacional e não-relacional e interface moderna.

Tecnologias Utilizadas

Backend

Node.js + Express
PostgreSQL (relacional)
MongoDB (não-relacional)
JWT para autenticação
Swagger para documentação da API
Frontend

React + Vite
React Router
Axios
TailwindCSS (ou outro framework usado)
Integração com backend via API REST
Funcionalidades

Autenticação com JWT (Login e Cadastro)
CRUD de cursos
CRUD de anotações por aluno
Relacionamento entre usuários, cursos e anotações
Integração com dois bancos (SQL e NoSQL)
Dashboard simples com histórico de anotações
Documentação da API com Swagger
Como rodar o projeto localmente

Clone o repositório
git clone https://github.com/wandersonthi/PROJ_SCG.git
cd PROJ_SCG
2. Configure os ambientes
Crie os arquivos .env nos diretórios:

📁 backend/.env
env
Copiar
Editar
PORT=5000
MONGO_URI=mongodb+srv://<user>:<password>@cluster.mongodb.net/...
POSTGRES_URI=postgresql://<user>:<password>@localhost:5432/proj_scg
JWT_SECRET=sua_chave_secreta
📁 frontend/.env
env
Copiar
Editar
VITE_API_URL=http://localhost:5000/api
3. Rode o backend
bash
Copiar
Editar
cd backend
npm install
npm run dev
4. Rode o frontend
bash
Copiar
Editar
cd frontend
npm install
npm run dev
📘 Documentação da API
Acesse o Swagger:

bash
Copiar
Editar
http://localhost:5000/api-docs
🗂 Estrutura do projeto
arduino
Copiar
Editar
PROJ_SCG/
│
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── config/
│   └── ...
│
├── frontend/
│   ├── src/
│   │   ├── pages/
│   │   ├── components/
│   │   ├── services/
│   │   └── ...
│   └── ...
│
└── README.md
Contribuições
Sinta-se à vontade para abrir issues ou pull requests.

🧾 Licença
Este projeto está sob a licença MIT.