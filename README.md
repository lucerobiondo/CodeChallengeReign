# CodeChallengeReign
FrontEnd design with React JS

# Installation

Node version: 18.7.0

You may check the version in bash:

```bash
node --version
```

If you haven't the latest version you may install it using the following commands:

```bash
nvm install 18.7.0
nvm use 18.7.0
```

After that you must install the node modules:

```bash
cd frontend
npm install
```

# Eslint running

Latest version of Eslint with particular roles has been declared, so you may run in bash:

```bash
npm run lint
```

If you see lint errors in the console you may fix it with:

```bash
npm run lint.fix
```

# Usage

To run the frontend app just execute the following command in bash:

```bash
npm start
```

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

# Testing E2E/Component with Cypress

If you want to test some routes, features, etc. between obtained result and desired result just type in terminal:

```bash
npm run cypress:open
```

Afterward new window will open so select E2E or component option and the browser you want to test. Then select the **.cy.jsx files to start the automatic testing with Cypress.

When the window opens, you may select the E2E or Component Test option.
