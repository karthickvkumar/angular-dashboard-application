# Dashboard

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.1.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

React Life Cycle:
- 4 phase

1. Initialization
    a) Constructor()  //set default value for props and state

2. Mounting
    a) componentWillMount() //calls before render
    b) render() //render method
    c) componentDidMount() //calls after render

3. Updating
    a) shouldComponentUpdate(nextProps, nextState) //calls whenever 
                                                        state or props changed
    b) componentWillReceiveProps(nextProps) // calls whenver props reveived
    c) componentWillUpdate() // calls before any update
    d) render() // render method
    e) componentDidUpdate() // calls after any update

4. Unmounting
    a) componentWillUnmount() // calls when component get destroyed
