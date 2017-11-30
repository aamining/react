# Create React App (Automatically)

1- Install it once globally:

You’ll need to have Node >= 6 on your machine. You can use nvm (macOS/Linux) or nvm-windows to

 easily switch Node versions between different projects.


```
npm install -g create-react-app

```
2- To create a new app, run:

```
create-react-app my-app

cd my-app

```

It will create a directory called my-app inside the current folder.

Inside that directory, it will generate the initial project structure and install the

transitive dependencies:

```
my-app
├── README.md
├── node_modules
├── package.json
├── .gitignore
├── public
│   └── favicon.ico
│   └── index.html
│   └── manifest.json
└── src
    └── App.css
    └── App.js
    └── App.test.js
    └── index.css
    └── index.js
    └── logo.svg
    └── registerServiceWorker.js

```

3- Runs the app in development mode.

Open http://localhost:3000 to view it in the browser.

Note that the development build is not optimized.

To create a production build, use yarn build.

```
npm start or yarn start

```

4- Runs the test watcher in an interactive mode.

By default, runs tests related to files changed since the last commit.

```
npm test or yarn test

```

5- Builds the app for production to the build folder.

Bundles the app into static files for production.

It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.

By default, it also includes a service worker so that your app loads from local cache on

future visits.

Your app is ready to be deployed.

```
npm run build or yarn build

```

source:

```
https://github.com/aamining/create-react-app

```
--------------------------------------------------------------------

JUST to start this app (this repository app) need to "yarn start"

--------------------------------------------------------------------


# To install and create new react (manually):

A complete step by step guide for creating a new Node app with React JS included

Create a new folder, get inside and write following to your terminal:

```
    - yarn init    (answer all questions)

    - yarn add webpack —dev

    - yarn add webpack-dev-server —dev

    - yarn add babel-loader —dev

    - yarn add babel-core —dev

    - yarn add babel-preset-react-app —dev

    - yarn add react —dev

    - yarn add react-dom —dev

    - yarn add cross-env --dev

```

In the packages.json file insert following:

```

“scripts”: {
“build”: “cross-env MODE_ENV = production webpack -p”
“start”: “cross-env MODE_ENV = development webpack-dev-server -d”
}

```

Once everything is there run following commands:

```
- yarn install

- yarn run build

```

Create a new file .babelrc in the app’s root directory and add following in to the file:

```
{
“presets”: [“react-app”]
}

```

Create a new file webpack.config.js in the app’s root directory and paste there following code:

```
const path = require(‘path’);

module.exports = {
  entry: { app: ‘./src/index.js’},
  output: {
    path: path.resolve(__dirname),
    filename: ‘[name]-bundle.js’
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, ‘src’),
        use: [‘babel-loader’]
      }
    ]
  }
};

```

Create a new folder in the app’s root directory called src.

Create a new file index.js inside of the src folder and paste there following code:

import React from ‘react’;

import ReactDOM from ‘react-dom’;


Create a new file in the app’s root directory index.html , create basic HTML structure with

DOCTYPE, HEAD etc and paste following in to the <body> :

```

<div id=“main”></div>
<script src=“app-bundle.js”></script>

```

The app should be ready to go:

- yarn start

------------------------------------------------------------------------------

# more comments

```
https://reactjs.org/docs/installation.html

```


yarn add serve

yarn serve (to run)

chrome.google.com -> react developer tools

yarn add webpack --dev

yarn add babel-loader babel-core babel-preset-react-app --dev

yarn add cross-env --dev

yarn run build

yarn add webpack-dev-server --dev

yarn add react react-dom

add following  code in to package.json or in to a hidden file called : .babelrc

```
 "babel": {
  "presets": ["react-app"]

```
