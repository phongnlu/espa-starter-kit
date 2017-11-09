# ESPA Starter Kit

This starter kit shows [ESPA](https://github.com/phongnlu/espa) ability to host 3 different child SPAs:

- TodoMVC built with [Angular1](https://github.com/tastejs/todomvc/tree/master/examples/angularjs)
- TodoMVC built with [Angular2](https://github.com/tastejs/todomvc/tree/master/examples/angular2_es2015)
- TodoMVC built with [React](https://github.com/tastejs/todomvc/tree/master/examples/react)

## Requirements

- npm >= 5
- jspm >= 0.17.0-beta

## Installation

Install angular1 child app
```cmd
> cd apps/angular1
> npm i
```

Install angular2 child app
```cmd
> cd apps/angular2
> npm i
```

Install react child app
```cmd
> cd apps/react
> npm i
```

Install root app
```cmd
> cd root
> npm i
> jspm i
```

## Usage

Run angular1 child app
```cmd
> cd apps/angular1
> npm run dev
```
Then open your browser to go to http://localhost:8080/#/angular1

Run angular2 child app
```cmd
> cd apps/angular2
> npm run dev
```
Then open your browser to go to http://localhost:9000/#/angular2

Run react child app
```cmd
> cd apps/react
> npm run dev
```
Then open your browser to go to http://localhost:9999/#/react

Run root app
```cmd
> cd root
> npm run dev
```
Then open your browser to go to http://localhost:8888


## Credits
- Online community
- Amazing TodoMVC project http://todomvc.com/
