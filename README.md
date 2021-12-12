# Starting point for React apps

[![Build & deploy](https://github.com/nbilalis/react-vite-ts-eslint-prettier-template/actions/workflows/build-deploy.yml/badge.svg)](https://github.com/nbilalis/react-vite-ts-eslint-prettier-template/actions/workflows/build-deploy.yml) [![Create Archive](https://github.com/nbilalis/react-vite-ts-eslint-prettier-template/actions/workflows/create-release.yml/badge.svg)](https://github.com/nbilalis/react-vite-ts-eslint-prettier-template/actions/workflows/create-release.yml)

This is an opinionated starting point, to get you going with React & Vite.

## It uses:

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
1. Install the packages
    - `cd <project-name>`
    - Run one of the following:
      - `yarn install` or just `yarn`
      - `npm install`
1. Install ESLint
    - ![favicon](https://www.google.com/s2/favicons?domain=eslint.org) [Getting Started with ESLint - ESLint - Pluggable JavaScript linter](https://eslint.org/docs/user-guide/getting-started)
    - **CAUTION**: This step, might install a version of `ESLint` that does not meet the requirements of other packages in the `devDependencies`. It probably won't cause any issues, but it **will** produce a warning.
    - Run one of the following:
      - `yarn add eslint --dev`
      - `npm install eslint --save-dev`
1. Initialize ESLint
    - Run one of the following:
      - `eslint --init`
      - `yarn run eslint --init`
      - `npx eslint --init`
    - **NOTE**: At the end of this step you will be asked to install some packages through `npm`. If you accept it, you will need to run `yarn install`, afterwards. If you do not accept it, manually install the packages mentioned.
1. Install Prettier & plugins
    - `yarn add prettier eslint-plugin-prettier eslint-config-prettier eslint-config-airbnb-typescript --dev`
    - `npm install prettier eslint-plugin-prettier eslint-config-prettier eslint-config-airbnb-typescript --save-dev`

## Start the development server

`yarn dev` or `npm run dev`

## Build the distributable

`yarn build` or `npm run build`

## Serve the distributable

`yarn serve` or `npm run serve`

**NOTE**: You have to build it first.
