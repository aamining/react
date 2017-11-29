To install and create new react :

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

--------------------------------------------------------------------------

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
