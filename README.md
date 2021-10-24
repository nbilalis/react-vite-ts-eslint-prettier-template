# Starting point for React apps

This is an opinionated template, for setting up a React app.

It uses:

- Vite
- TypeScript
- ESLint
- Prettier

## Steps to reproduce

1. Create Vite with react-ts template
   - ![](https://www.google.com/s2/favicons?domain=vitejs.dev) [Getting Started | Vite](https://vitejs.dev/guide/)
   - `yarn create vite <project-name> --template react-ts`
   - `npm init vite@latest <project-name> --template react-ts`
   - `cd <project-name>`
1. Install packages
   - `yarn` | `yarn install`
   - `npm install`
1. ~~Install ESLint~~
   - **CAUTION**: Proceed to the next step, this one might install a version that does not meet the requirements of 'devDependencies'
   - `yarn add eslint --dev`
   - `npm install eslint --save-dev`
1. Initialize ESLint
   - `eslint --init`
   - `yarn run eslint --init`
   - `npx eslint --init`
   - **NOTE**: At the end of this step you will be asked to install some packages through `npm`. If you accept it, you will need to run `yarn install`, afterwards. If you do not accept it, manually install the packages mentioned.
1. Install Prettier & plugins
    - `yarn add prettier eslint-plugin-prettier eslint-config-prettier eslint-config-airbnb-typescript --dev`
    - `npm install prettier eslint prettier eslint-plugin-prettier eslint-config-prettier eslint-config-airbnb-typescript --save-dev`
