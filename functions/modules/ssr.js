const functions = require('firebase-functions')
const admin = require('firebase-admin')
const async = require('async')
if (admin.apps.length === 0 ) {
  admin.initializeApp()
}

const { Nuxt } = require('nuxt')
const nuxt = new Nuxt({
    buildDir: 'nuxt',
    dev: false
});

module.exports = functions.https.onRequest(async (req, res) => {
  await nuxt.ready()
  return nuxt.render(req, res)
})