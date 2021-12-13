# Starting point for React apps

[![Build & deploy](https://github.com/nbilalis/react-vite-ts-eslint-prettier-template/actions/workflows/build-deploy.yml/badge.svg)](https://github.com/nbilalis/react-vite-ts-eslint-prettier-template/actions/workflows/build-deploy.yml) [![Create Archive](https://github.com/nbilalis/react-vite-ts-eslint-prettier-template/actions/workflows/create-release.yml/badge.svg)](https://github.com/nbilalis/react-vite-ts-eslint-prettier-template/actions/workflows/create-release.yml)

This is an opinionated starting point, to get you going with React & Vite.

## It uses

- Vite
- TypeScript
- ESLint
- Prettier
- React Router
- Scoped SCSS

## Steps to reproduce

1. Create Vite with the `react-ts` template
    - ![favicon](https://www.google.com/s2/favicons?domain=vitejs.dev) [Getting Started | Vite](https://vitejs.dev/guide/)
    - Run on of the following:
      - `yarn create vite <project-name> --template react-ts`
      - `npm init vite@latest <project-name> --template react-ts`
1. Install necessary packages
    - `cd <project-name>`
    - Run one of the following:
      - `yarn install` or just `yarn`
      - `npm install`
1. Install template packages
    - ![favicon](https://www.google.com/s2/favicons?domain=www.npmjs.com) [eslint-config-airbnb-typescript-prettier - npm](https://www.npmjs.com/package/eslint-config-airbnb-typescript-prettier)
    - `yarn add typescript eslint prettier eslint-config-airbnb-typescript-prettier --dev`
    - `npm install typescript eslint prettier eslint-config-airbnb-typescript-prettier --save-dev`
1. Add ESLint template
    - make a `.eslintrc.js` file, with the following contents:

      ```js
      module.exports = {
        extends: "airbnb-typescript-prettier"
      };
      ```

## Start the development server

`yarn dev` or `npm run dev`

## Build the distributable

`yarn build` or `npm run build`

## Serve the distributable

`yarn serve` or `npm run serve`

**NOTE**: You have to build it first.
