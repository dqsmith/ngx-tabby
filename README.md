## ngx-tabby

ngx-tabby is a gentle angular easter egg that will leave you warm and cozy on the inside.

[Demo](https://dqsmith.github.io/ngx-tabby/docs/demo/)

## Getting Started

1. Download or clone this repo
2. Download and install node.js: 

	https://nodejs.org/en/download/
	
3. At the project root install NPM and Bower packages

    $ npm install

## Running the project

Run the project in development mode and spawn a browser instance:

    $ npm start	

## Angular Implementation

Use in your Angular project!

```
    npm install ngx-tabby --save
```

# Usage

## Import service

Import into your app module as a provider.

```
    // app.module

    import { TabbyService } from 'ngx-tabby';

    @NgModule({
        providers: [
            // Kittens galore
            TabbyService
        ]
    });
```

## Initialize

Initialize in your app component.

```
    import { TabbyService } from 'ngx-tabby';

    export class AppComponent {

        constructor(private tabbyService: TabbyService) {

            this.tabbyService.init();

        }
    }
```

## Using Webpack

This should work well out of the box with webpack.

## Using System.js

Map ngx-tabby and declare as a package

```
    // systemjs.config.js

    map: {
      "ngx-tabby": "npm:ngx-tabby",
    },    
    packages: {
      'ngx-tabby': {
        main: './index.js',
        defaultExtension: 'js'
      }
    }
```

## Use

Show me kittens!  Press TAB + b and let the cuteness overwhelm you.