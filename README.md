# Barber

Projeto inicial de uma plataforma para barbearia, com frontend em Next.js e backend em Spring Boot.

## Stack

- Frontend: Next.js 16 + React 19 + TypeScript
- Backend: Spring Boot 4 + Java 21
- Banco de dados: PostgreSQL

## Estrutura

```text
.
├── frontend/   # aplicação web
└── backend/    # API e regras de negócio
```

## Requisitos

- Node.js 20+
- Java 21
- PostgreSQL

## Como rodar

### Frontend

```bash
cd frontend
npm install
npm run dev
```

Aplicação disponível em `http://localhost:3000`.

### Backend

Defina as variáveis de ambiente antes de iniciar a API:

```bash
export DB_URL=jdbc:postgresql://localhost:5432/barber
export DB_USER=postgres
export DB_PASSWORD=postgres
```

Depois execute:

```bash
cd backend
./gradlew run
```

## Status

Projeto em fase inicial de estruturação.

- [x]  Setup do banco
- [x]  Seeding do banco (inserir dados)
- [x]  Introdução ao Next.js
- []  Tailwind e Shadcn
- []  Git hooks

