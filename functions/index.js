require('regenerator-runtime/runtime')
const functions = require('firebase-functions')
const buildFunctions = require('./build')

Object.keys(buildFunctions).forEach((functionName) => {
	exports[functionName] = buildFunctions[functionName]
})
