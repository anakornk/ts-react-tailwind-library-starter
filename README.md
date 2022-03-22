# React Component Library Starter

A starter template to create a component library with React, TailwindCSS, vitejs, Storybook and TypeScript

## Getting Started

Install dependencies and start developing components

```bash
yarn install # install depedencies
yarn storybook # run storybook
yarn build # build the library
```

You can also use the built-in site to test or document your components

```bash
yarn dev:site # site dev mode
yarn build:site # build site
yarn preview:site #priview built site
```

## Using the library

1. Install peer dependencies: [React & ReactDOM](https://reactjs.org/docs/getting-started.html), [Tailwind CSS](https://tailwindcss.com/docs/installation/using-postcss) and [Headless UI](https://github.com/tailwindlabs/headlessui/tree/main/packages/%40headlessui-react)
2. Install the component library

   ```bash
   yarn add ts-react-tailwind-library-starter
   ```

3. In your project root, import the library CSS file

```ts
import 'ts-react-tailwind-library-starter/dist/style.css';
```

## Step By Step Guide

1. Create a new react-ts vite project

   ```bash
   yarn create vite --template react-ts
   ```

2. Install Tailwind CSS and PostCSS, and initialize `tailwind.config.js`

   ```bash
   yarn add -D tailwindcss postcss autoprefixer # install dependencies
   npx tailwindcss init # create `tailwind.config.js`
   ```

3. Add `postcss.config.js` to project root

   ```js
   module.exports = {
     plugins: {
       tailwindcss: {},
       autoprefixer: {},
     },
   };
   ```

4. Turn on Vite Library Mode

   ```ts
   import { defineConfig } from 'vite';
   import { resolve } from 'path';
   import react from '@vitejs/plugin-react';

   // https://vitejs.dev/config/
   export default defineConfig({
     plugins: [react()],
     build: {
       lib: {
         entry: resolve(__dirname, 'src', 'index.ts'),
         formats: ['es', 'cjs'],
         fileName: (ext) => `index.${ext}.js`,
       },
       rollupOptions: {
         // make sure to externalize deps that shouldn't be bundled
         // into your library
         external: ['react', 'react-dom', '@headlessui/react'],
       },
       target: 'esnext',
       sourcemap: true,
     },
   });
   ```

5. Install Storybook

   ```bash
   npx sb init --builder storybook-builder-vite
   ```

6. TODO

## FAQ

- TODO
