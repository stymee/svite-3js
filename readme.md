# Svelte/Svite/Typescript example with routing and env variables!

## Commands

To start dev server:

```bash
npm run dev
```

to Build:

```bash
npm run build
```

## Router = svelte-routing

-   uses import.meta.env.PROD to determine production build and set basepath

```ts
const basepath = import.meta.env.PROD ? import.meta.env.VITE_BASE : '/';
```

-   in a .env file in your project root

```env
VITE_BASE=/svite/
```
