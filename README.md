# Project Birdnest Front-End

A React app to display NDZ violations around Monadikuikka's nest, bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

The front-end connects to the [back-end](https://github.com/severinbratus/birdnest-back) server (a separate application) via Socket.io, and updates the UI (containing only a table) with the data received via the web-socket.

For more details see [the back-end repository README](https://github.com/severinbratus/birdnest-back).

## Available Scripts

*From the CRA template:*

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

