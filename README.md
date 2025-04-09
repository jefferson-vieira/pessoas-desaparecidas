# PROJETO PRÁTICO IMPLEMENTAÇÃO FRONT-END

Implementação do projeto prático que deve ser entregue por todos os candidatos para o perfil de Desenvolvedor Front-end.

## Referências

- [14/03/2025 - EDITAL DO PSS 002/2025/SEPLAG Analista de Tecnologia da Informação](https://seletivo.seplag.mt.gov.br/ver-edital/152)
- [Documentação da API](https://abitus-api.geia.vip/swagger-ui/index.html)

## Autores

- [Jefferson Vieira da Silva](https://github.com/jefferson-vieira)

## Demonstração

https://pessoas-desaparecidas-snowy.vercel.app/

## Stack utilizada

Principais tecnologias e ferramentas:

- [ESLint](https://eslint.org/)
- [Jest](https://jestjs.io/)
- [MSW](https://mswjs.io/)
- [Next.js](https://nextjs.org/)
- [OpenAPI TypeScript](https://openapi-ts.dev/)
- [Prettier](https://prettier.io/)
- [React Hook Form](https://www.react-hook-form.com/)
- [React](https://react.dev/)
- [Shadcn](https://ui.shadcn.com/)
- [TailwindCSS](https://tailwindcss.com/)
- [TanStack Query](https://tanstack.com/query/latest)
- [Testing Library](https://testing-library.com/)
- [Typescript](https://www.typescriptlang.org/)
- [Zod](https://zod.dev/)

## Variáveis de Ambiente

Para rodar esse projeto, você vai precisar adicionar as seguintes variáveis de ambiente no seu `.env`.

Crie o arquivo ou copie o arquivo de exemplo:

```bash
  cp .env.example .env
```

Adicione:

- `NEXT_PUBLIC_API_URL`: endereço da API (sem pathname). Atualmente, conforme o edital, `https://abitus-api.geia.vip`.

## Instalação

Necessário ter o [nodejs](https://nodejs.org/en) (com `npm`) instalado e configurado corretamente na versão **LTS 22.x**.

**_NOTA:_** O arquivo `.nvmrc` possibilita utilizar ferramentas para gerenciar a versão do node como [nvm](https://github.com/nvm-sh/nvm). Se for o caso, utilize `nvm use` na raíz do projeto.

Instale com `npm`:

```bash
  npm ci
```

**_NOTA:_** Para fins de consistência o `package.json` tem o campo `os` configurado para ambientes **linux**. Isto se deve ao projeto ter sido desenvolvido e testado em um ambiente Linux. Para instalar as dependências em outros sistemas, utilize a flag `--force`, ou remova localmente o campo `os` do arquivo `package.json`.

```bash
  npm ci --force
```

## Rodando localmente

Clone o projeto

```bash
  git clone https://github.com/jefferson-vieira/pessoas-desaparecidas.git
```

Entre no diretório do projeto

```bash
  cd pessoas-desaparecidas
```

Instale as dependências

```bash
  npm ci
```

**_NOTA:_** Veja [Instalação](#Instalação)

Inicie o servidor de desenvolvimento

```bash
  npm run dev
```

Ou para um build de produção

```bash
  npm run build
  npm run start
```

Acesse http://localhost:3000

## Rodando com Docker

O projeto está configurado para poder ser executado em um container utilizando o [Docker](https://www.docker.com/) ou **Docker Compose**.

### Utilizando Docker

```bash
  docker build -t <nome-da-imagem>
  docker run -d -p 3000:3000 <nome-da-imagem>
```

### Utilizando Docker Compose

```bash
  docker compose up
```

ou

```bash
  docker-compose up
```

## Funcionalidades

- Dados da API requisitados em tempo real
- Layout responsivo
- Seletor de tema claro/escuro
- Lazy Loading Routes
- Lista de desaparecidos ou localizados conforme a situação em cards, contendo imagem e informações sobre o caso
- Lista paginada, exibindo 12 pessoas por vez
- Possibilita filtros/pesquisa
- Os resultados com filtros podem ser compartilhados, basta copiar e enviar a URL atual da página
- Tela de Detalhamento do Desaparecido
- Modal/Diálogo para Inclusão de Informações

## Atualizar contratos da API

O projeto utiliza a ferramenta [OpenAPI TypeScript](https://openapi-ts.dev/) para ler a documentação da API e gerar requisições type-safe validadas com Typescript. Para sincronizar o projeto com a documentação, execute:

```bash
npm run generate:api
```

O comando irá atualizar o arquivo em `src/@types/api.d.ts` com os tipos convertidos obtidos da documentação.

## Linting e qualidade de código

Para ajudar na qualidade e validar a formatação do código o projeto utiliza o ESLint juntamente com o Prettier, além das validações do Typescript.

Todos os commits são automáticamente checados via hooks do git com [husky](https://github.com/typicode/husky)+[lint-staged](https://github.com/lint-staged/lint-staged). A formatação do commit também é válidada com o [git-commit-msg-linter](https://github.com/legend80s/git-commit-msg-linter) que segue o [guia de contribuição do Angular](https://github.com/angular/angular/blob/main/CONTRIBUTING.md), já difundido na comunidade.

Para rodar o lint manualmente, execute:

```bash
  npm run lint
```

A ferramente também pode aplicar algumas correções automáticamente, para isto execute:

```bash
  npm run lint:fix
```

Para rodar as validações do Typescript rode:

```bash
  npm run test:ts
```

## Rodando os testes

Para rodar os testes, rode o seguinte comando:

```bash
  npm run test
```

## Feedback

Se você tiver algum feedback, por favor me deixe saber por meio de jefferson98.vieira@gmail.com.
