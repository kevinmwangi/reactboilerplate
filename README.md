# reactboilerplate
The most basic boiler plate for react apps  
1)Simply git clone https://github.com/smhatre59/reactboilerplate.git    
2)npm install  
##Procdeure to create your own boiler plate  
1) npm init  
2) Install webpack module    
  npm install --save webpack      
3) vim webpack.config.js    
4) *Paste the following code*  
```javascript
var webpack = require('webpack');
var path = require('path');
var BUILD_DIR = path.resolve(__dirname, 'js/');
var APP_DIR = path.resolve(__dirname, 'src/');
var config = {
  entry: APP_DIR + '/index.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : APP_DIR,
        loader : 'babel'
      }
    ]
  }
};
module.exports = config;
```

5)*Now create index.html and paste the following code in it*
```html
<html>
  <head>
    <meta charset="utf-8">
    <title>React Website</title>
  </head>
  <body>
    <div id="app" />
    <script src="js/bundle.js" type="text/javascript"></script>
  </body>
</html>
```

6)Now install babel loader:  
>npm install babel-loader babel-preset-es2015 babel-preset-react --save

7)vim .babelrc  
8)Paste the following code  
```javascript
{
  "presets" : ["es2015", "react"]
}
```   
9)Install react module  
>npm install --save react react-dom  

10)Make a new folder **src** and paste the following code in **index.jsx** in the folder  
```javascript
import React from 'react';
import {render} from 'react-dom';

class Main extends React.Component {
  render () {
    return (
            <h1>React sample</h1>
            )
  }
}

render(<Main/>, document.getElementById('app'));

```

11)Update package.json as below:  
```javascript
{
  // ...
  "scripts": {
    "dev": "webpack -d --watch",
    "build" : "webpack -p"
  },
  // ...
}
```

12)To develop code use command:  
   >npm run dev  
   To create minified production build  
   >npm run build  

13)To live reload page while developing  
   >npm install -g live-reload  

Check out it usage at [live-reload](https://www.npmjs.com/package/live-reload)  

14)Its better to use http-server to serve react pages for development   
   >npm install -g http-server

Check out its usage at [http-server](https://www.npmjs.com/package/http-server)   

###Check out my work at:[Saurabh Mhatre](https://smhatre59.github.io/)###
