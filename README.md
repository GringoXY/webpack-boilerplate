# webpack-boilerplate
A webpack boilerplate for developing static, single page website with only front-end technologies.

## Prerequisites
* Node.js (^10.12.0, or >=12.0.0),
* npm (^6.4.1, or >=6.9.0).

## Getting started
Use command to clone repository <code>git clone https://github.com/GringoXY/webpack-boilerplate.git</code>
or download in manually & extract that.

1. Open cmd/terminal which points to project's directory.
2. Use <code>npm i</code> in order to download crucial modules & dependencies.
3. To deploy website in your browser type in <code>npm start</code>
* default URL to deployed webapp is [localhost:9000](http://localhost:9000/), 
* default PORT is specified in 
  [webpack.dev.js](https://github.com/GringoXY/webpack-boilerplate/blob/main/webpack.dev.js) 
  file at <code>line 15</code>.

### Available commands in cmd/terminal
Command | Description
------- | -----------
<code>npm start</code> | starts a server on [localhost:9000](http://localhost:9000/)
<code>npm run build</code> | compiles all code to the *dist* folder for a production purposes
<code>npm run lint:js</code> | checks all javascript files based on standards that has been described in [.eslintrc.json](https://github.com/GringoXY/webpack-boilerplate/blob/main/.eslintrc.json)