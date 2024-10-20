# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Prerequisites

- **Node.js**: Use Node.js version 20. You can manage Node.js versions using `nvm`.
- **nvm**: Install via:
  ```bash
  curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
  ```
  After installation, restart your terminal and run:
  ```bash
  nvm install # Install version from .nvmrc file
  nvm use # Use version from .nvmrc file
  ```
- **pnpm**: Install via Homebrew:
  ```bash
  brew install pnpm
  ```
  Alternatively, you can install it via npm:
  ```bash
  npm install -g pnpm
  ```

## Development

```bash
pnpm install
pnpm run dev
```
