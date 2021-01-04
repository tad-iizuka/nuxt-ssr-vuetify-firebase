# nuxt-ssr-vuetify

## Nuxt + SSR + Vuetify + Firebase

```bash
# create .env
$ touch .env
```
.env
 ```
apiKey = ''
authDomain = ''
databaseURL = ''
projectId = ''
storageBucket = ''
messagingSenderId = ''
appId = ''
measurementId = ''
FUNCTIONS_URL = ''
 ```

## Build Setup

```bash
# install dependencies
$ npm install
$ cd functions
$ npm install
$ cd ..

# change node version (if you don't have nvm or node, please install it before build.)
$ nvm use v12.20.0

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build && firebase deploy

```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
