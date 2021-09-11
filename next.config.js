// this file doesn't get compiled by babel so you can't imports and such
const {PHASE_DEVELOPMENT_SERVER, PHASE_PRODUCTION_BUILD} = require('next/constants')
const { defaultConfig } = require('next/dist/server/config-shared')

// .env plugin!
const nextEnv = require('next-env')
const dotenvLoad = require('dotenv-load')

dotenvLoad()
const withEnv = nextEnv()
module.exports = withEnv()

// //this is a plugin import in config file
// const config = {}
// module.exports = withMyPlugin(/**args for the plugin */ config)

//two methods here
// module.exports = (phase, {defaultConfig}) => {
//   // if you're in the phase production build
//   if (phase === PHASE_PRODUCTION_BUILD){
//     //this code will be run
//     console.log("I'm in production mode")
//     return defaultConfig
//   }
//   console.log("I'm in dev mode")
//   return defaultConfig

// }

// // other option of doing this:

// module.exports = {
//   //change the webpack plugin
//   webpack: {
//     plugins: [new MyWebpackPlugin()]
//   }
// }


// all the different phases of Next.js:
//https://github.com/vercel/next.js/blob/canary/packages/next/next-server/lib/constants.ts#L1-L4


// Question: how to modify the defaultConfig:
// return {
//   ...defaultConfig, 
//   webpack: {

//   }
// }