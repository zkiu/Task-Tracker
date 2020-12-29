require('regenerator-runtime/runtime')
const admin = require('firebase-admin')
const buildFunctions = require('./build').default

admin.initializeApp()

Object.keys(buildFunctions).forEach((functionName) => {
	exports[functionName] = buildFunctions[functionName]
})
