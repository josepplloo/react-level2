# React Execise 

A brief React Excercise.

## Technologies Used

This project was built using **React** ⚛️. **Axios** for *HTTP* requests
to local data for the app. For styles Sass were used with **scss** syntax with *BEM* methodology for class naming conventions.

## Project Set Up
The application runs with `npm 6.9.0` and `node v10.15.3`.

  First of all install *JSON server*: `npm install -g json-server`.
  
  Install node dependencies executing `npm install`.

  After that start the server with `json-server --watch db.json `.

  Once the access to data has been started:

  Run the app locally with `npm start`. It will be served at `http://localhost:3001`.

## Folder Structure

The code is inside of each component following the structure below:

```
react-level2
├── package.json
├── db.json
├── README.md
└── src /
    ├── index.js
    ├── index.scss
    ├── serviceWorker.js
    └── pages/
    |   ├── App.js
    |   ├── App.scss
    |   ├── Login/
    |   |    ├── Login.js
    |   |    └── Login.scss
    |   ├── Products/
    |   |    ├── Products.js
    |   |    └── Products.scss
    |   └── Welcome/
    |        ├── Welcome.js
    |        └── Welcome.scss
    └── utils/
          ├── auth.js
          ├── products.js
          └── sign_in.js
        
```