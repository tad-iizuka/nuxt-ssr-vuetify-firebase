# nuxt-ssr-vuetify

## Create .env for your firebase project

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

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build && firebase deploy

```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
