# Atlys Assessment

This project was created as part of the Atlys recruitment process. The objective is to build a mini frontend application that includes an authentication flow based on the provided design.

## Application Flow

The provided document and specifications were incomplete and somewhat vague. Based on my understanding, here is how the application flow is designed:

- The login page serves as the landing page. New users must register before proceeding.
- After a successful login or signup, users are redirected to the **/posts** route.
- According to the task requirements, **_"There is no need to implement the logic for creating new posts, comments, or likes."_** Therefore, I have focused on creating the UI only. For every user action, an **_Auth Popup_** appears.

## Run Locally

Ensure that Node.js is installed. If not, download and install it from [Node.js](https://nodejs.org/en).

Clone the project

```bash
  git clone https://github.com/Harshad-Sahu/atlys-assessment
```

Go to the project directory

```bash
  cd atlys-assessment
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm start
```

## Technical Specifications

Below are the versions of software used to create this application:

**If you encounter issues running the code as per the instructions, try using the versions listed below:**

- Node.js: `v20.13.1`
- NPM: `10.5.2`
- React: `^18.3.1`
- TypeScript: `^4.9.5`

All other dependency versions can be found in the `package.json` file.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
