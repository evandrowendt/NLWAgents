# NLWAgents Server

Servidor backend desenvolvido para o projeto **NLW Agents**, utilizando a stack moderna com Fastify, TypeScript, Drizzle ORM e PostgreSQL.

## 🚀 Tecnologias Utilizadas

- [Node.js](https://nodejs.org/)
- [Fastify](https://fastify.dev/) — framework para servidor HTTP
- [TypeScript](https://www.typescriptlang.org/)
- [Zod](https://zod.dev/) — para validação de esquemas
- [Drizzle ORM](https://orm.drizzle.team/) — ORM para utilização do postgres
- [Ultracite](https://www.ultracite.dev/) — empacotador moderno (substituto de bundlers como Vite/ESBuild)
- [Docker] - utilizando a imagem do postgres vector (pgvector versão 17)

## 📁 Estrutura do Projeto

NLWAgents_server/
├── src/
│ ├── server.ts # Ponto de entrada da aplicação
│ └── db/
│ └── seed.ts # Script para popular o banco
├── .env # Variáveis de ambiente (não incluso)
├── package.json
└── tsconfig.json


## ⚙️ Instalação e Uso

1. **Clone o repositório**
```
git clone https://github.com/evandrowendt/NLWAgents_server.git
cd NLWAgents_server
```

2. **Instale as dependências**

``` npm install ```

3. **Configure as variáveis de ambiente**
Crie um arquivo .env com as configurações necessárias (exemplo: DATABASE_URL, PORT, etc.).

4. Execute em modo desenvolvimento

```
npm run dev
```

Popular o banco de dados (opcional)

```
bash
Copiar
Editar
npm run db:seed`
```
Iniciar em modo produção

bash
Copiar
Editar
npm start

🧪 Scripts Disponíveis
| Script            | Descrição                                 |
| ----------------- | ----------------------------------------- |
| `npm run dev`     | Inicia o servidor com hot-reload          |
| `npm start`       | Inicia o servidor em modo produção        |
| `npm run db:seed` | Popula o banco de dados com dados de seed |


📦 Requisitos
1. Node.js 20+

2. PostgreSQL rodando localmente ou via URL externa

3. .env configurado com as variáveis adequadas


