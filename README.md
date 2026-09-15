<div align="center">
  <img src="public/favicon.svg" alt="Promogram Logo" width="140">
  <h1>Promogram Web</h1>
</div>

<p align="center">
  <img src="https://img.shields.io/badge/Angular-22-DD0031.svg?logo=angular&logoColor=white" />
  <img src="https://img.shields.io/badge/TypeScript-6.0-3178C6.svg?logo=typescript&logoColor=white" />
  <a href="https://promogram-web.vercel.app" target="_blank">
    <img alt="demo" src="https://img.shields.io/badge/demo-online-brightgreen.svg" />
  </a>
  <a href="https://github.com/Victor-Gabriel-Barbosa/promogram-web/stargazers">
    <img alt="stars" src="https://img.shields.io/github/stars/Victor-Gabriel-Barbosa/promogram-web.svg?style=social" target="_blank" />
  </a>
  <a href="#">
    <img alt="License: unspecified" src="https://img.shields.io/badge/license-unspecified-lightgrey.svg" target="_blank" />
  </a>
  <a href="https://twitter.com/" target="_blank">
    <img alt="Twitter: Victor-Gabriel-Barbosa" src="https://img.shields.io/badge/-@Victor--Gabriel--Barbosa-1DA1F2?logo=github&logoColor=white" target="_blank" />
  </a>
</p>

> Frontend Angular do **Promogram**, um agregador de ofertas de produtos e cupons de desconto das principais lojas do Brasil. Consome a API do Promogram Backend para exibir promoções sempre atualizadas, com busca, cópia de cupons em um clique e tema claro/escuro.

## ✨ Demo

A aplicação está no ar e pode ser acessada em: <a href="https://promogram-web.vercel.app" target="_blank"><b>🔗 promogram-web.vercel.app</b></a>

Principais telas disponíveis:

- **Início** (`/`) — vitrine com os produtos e cupons em destaque.
- **Produtos** (`/produtos`) — listagem completa com busca por nome.
- **Cupons** (`/cupons`) — listagem completa com busca por nome/código e botão de copiar.

## 🚀 Usage

Certifique-se de ter o **Node.js `^22.12.0`** ou superior instalado (requisito mínimo do Angular 22).

Clone o projeto e instale as dependências:

```sh
git clone https://github.com/Victor-Gabriel-Barbosa/promogram-web.git
cd promogram-web
npm install
```

Rode em modo desenvolvimento:

```sh
npm start
```

A aplicação abre em `http://localhost:4200`. Por padrão, o ambiente de desenvolvimento consome a API em `http://localhost:3000` (configurável em `src/environments/environment.development.ts`).

Gere o build de produção:

```sh
npm run build
```

Rode os testes unitários (Vitest):

```sh
npm test
```

## 🛠️ Stack

| | |
|---|---|
| Framework | Angular 22 (standalone components, signals, `@angular/build`) |
| UI | Angular Material 22 + Angular CDK |
| Estilo | Tailwind CSS 4 |
| Dados | RxJS + `HttpClient` + `toSignal` |
| Testes | Vitest + jsdom |
| Deploy | Vercel |

## 🗂️ Estrutura

```
src/app/
├── components/   # coupon-card, product-card, grid, navbar, navbar-item, skeleton-card, theme-toggle
├── models/       # Product, Coupon, NavItem
├── pages/        # home, products, coupons
└── services/     # ProductService, CouponService
```

## 🤝 Como contribuir

Contribuições, issues e sugestões de features são bem-vindas.<br />
Sinta-se à vontade para checar a [página de issues](https://github.com/Victor-Gabriel-Barbosa/promogram-web/issues).

1. Faça um fork do projeto
2. Crie sua branch: `git checkout -b feature/minha-feature`
3. Commit suas mudanças: `git commit -m 'feat: minha feature'`
4. Push para a branch: `git push origin feature/minha-feature`
5. Abra um Pull Request

## Autor

👤 **Victor Gabriel Barbosa**

- Github: [@Victor-Gabriel-Barbosa](https://github.com/Victor-Gabriel-Barbosa)

## Mostre seu apoio

Dê uma ⭐️ neste repositório se este projeto te ajudou!

## 📝 License

Distribuído sob a licença **MIT**. Consulte o arquivo [LICENSE](LICENSE) para mais detalhes.
