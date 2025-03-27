# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

---

## 💡 Project Structure

```
src/
├── features/
│   └── multi-step-skip-form/
│       ├── components/
│       │   ├── fake-step/
│       │   │   └── FakeStep.tsx
│       │   ├── form-progress-bar/
│       │   │   ├── formProgressBar.module.scss
│       │   │   ├── formProgressBar.spec.tsx
│       │   │   └── FormProgressBar.tsx
│       │   └── skip-selector/
│       │       ├── component/
│       │       │   ├── SkipCard.module.scss
│       │       │   ├── SkipCard.spec.tsx
│       │       │   └── SkipCard.tsx
│       │       ├── SkipSelector.module.scss
│       │       ├── SkipSelector.spec.tsx
│       │       └── SkipSelector.tsx
│
│       ├── component/
│       │   └── bottom-bar/
│       │       ├── BottomBar.module.scss
│       │       ├── BottomBar.spec.tsx
│       │       └── BottomBar.tsx
│
│       ├── services/
│       │   ├── skipApis.ts
│       │   ├── skipModules.ts
│       │   └── skipSlice.ts
│
│       ├── store/
│       │   ├── store.ts
│       │   ├── MultiStepSkipForm.module.scss
│       │   ├── MultiStepSkipForm.spec.tsx
│       │   └── MultiStepSkipForm.tsx
│
├── App.tsx
├── index.css
└── main.tsx
```

### Why this structure?

- **Feature-based organization (`features/`)**  
  Each feature gets its own isolated folder to encapsulate components, logic, and tests—making the codebase scalable and easier to navigate as it grows.

- **Co-located files**  
  Styles, tests, and component logic are kept together (`.module.scss`, `.spec.tsx`, and `.tsx`) to reduce file jumping and help with context.

- **Reusable shared components (`component/`)**  
  Common UI elements (like `BottomBar`, `SkipCard`) are abstracted here so they can be used in multiple features without duplication.

- **Service layer (`services/`)**  
  Centralizes API calls and data handling logic to keep components clean and focused only on UI/state.

- **Store (`store/`)**  
  Manages global app state using Redux Toolkit, keeping state logic consistent and maintainable.

---

## 🚀 Installation

Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

## 🔧 Running the App

Start development server:

```bash
npm run dev
```

Run tests:

```bash
npm run test
```

Build for production:

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```
