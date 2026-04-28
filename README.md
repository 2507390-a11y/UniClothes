# 👕 UniClothes — E-Commerce de Roupas

Projeto integrador da disciplina **Design para Web** (Ensino Superior).  
Simulação de uma loja virtual de roupas com foco em HTML semântico, CSS moderno, SASS, JavaScript e boas práticas de UX.

---

## 🛠️ Tecnologias

- HTML5 (tags semânticas)
- SASS/SCSS (compilado via `sass`)
- CSS3 (Flexbox + Grid)
- JavaScript (vanilla)
- Google Fonts (Inter)

---

## 📁 Estrutura do Projeto

```
/
├── index.html
├── css/
│   └── style.css           # CSS compilado (não editar diretamente)
├── scss/
│   ├── style.scss           # Arquivo principal (importa os parciais)
│   ├── variables.scss       # Variáveis de cor, tipografia e breakpoints
│   ├── resets.scss          # Reset / base global
│   ├── animations.scss      # Animações (ex: bump do badge do carrinho)
│   ├── components.scss      # Componentes reutilizáveis (botões, cards, toast)
│   ├── header.scss          # Estilos do header
│   ├── aside.scss           # Estilos da sidebar
│   ├── main.scss            # Estilos da área principal / produtos
│   └── footer.scss          # Estilos do footer
├── js/
│   └── script.js            # Tema, sidebar, accordion e carrinho
├── images/
│   └── image-icon.svg
└── package.json
```

---

## ✨ Funcionalidades

| Funcionalidade | Status |
|---|---|
| Layout com Grid (sidebar + conteúdo) | ✅ |
| Navbar com Flexbox | ✅ |
| Alternância de tema dark/light | ✅ |
| Sidebar com abertura/fechamento | ✅ |
| Overlay de fundo ao abrir sidebar | ✅ |
| Accordion de categorias na sidebar | ✅ |
| 10 produtos exibidos em cards | ✅ |
| Botão "Adicionar ao carrinho" | ✅ |
| Contador (badge) com animação no ícone do carrinho | ✅ |
| Toast de confirmação ao adicionar produto | ✅ |
| Responsividade | ✅ |
| Acessibilidade (aria-live, aria-atomic, role) | ✅ |

---

## ⚙️ JavaScript — Módulos do `script.js`

| Módulo | O que faz |
|---|---|
| **Tema** | Alterna as classes `dark` / `light` no `<html>` |
| **Sidebar** | Abre e fecha o menu lateral; o overlay também fecha ao clicar |
| **Accordion** | Expande/recolhe a lista de categorias com troca de ícone |
| **Carrinho** | Incrementa o contador, anima o badge e exibe um toast com o nome do produto adicionado |

---

## 🎨 Organização SCSS

O SASS segue uma estrutura modular com arquivos parciais:

- **`variables.scss`** — CSS custom properties para dark/light theme + breakpoints SASS (`$sm-screen: 40rem`, `$md-screen: 48rem`, `$lg-screen: 64rem`)
- **`resets.scss`** — normalização do CSS padrão do navegador
- **`animations.scss`** — keyframes e classes de animação (ex: `.bump` no badge do carrinho)
- **`components.scss`** — estilos de componentes reutilizáveis (botões, cards, toast de notificação)
- **`header.scss`**, **`aside.scss`**, **`main.scss`**, **`footer.scss`** — estilos por seção da página

---

## 🚀 Como Rodar

### 📋 Pré-requisitos

- [Node.js](https://nodejs.org) instalado
- Yarn ou npm

### 📦 Instalação

```bash
yarn install
# ou
npm install
```

### 👀 Compilar SASS (modo watch)

```bash
yarn sass:watch
# ou
npm run sass:watch
```

Abra o `index.html` no navegador (ou use uma extensão como **Live Server** no VS Code).

---

## 👤 Autor

**Gabriel Ribeiro** — RA: 2507390  
Disciplina: Design para Web
