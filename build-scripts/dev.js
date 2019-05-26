import webpack from 'webpack'
import webpackDevServer from 'webpack-dev-server'

// Do this as the first thing so that any code reading it knows the right env.
process.env.BABEL_ENV = 'development'
process.env.NODE_ENV = 'development'

// Makes the script crash on unhandled rejections instead of silently
// ignoring them. In the future, promise rejections that are not handled will
// terminate the Node.js process with a non-zero exit code.
process.on('unhandledRejection', err => {
  throw err
})

async function main() {}

main()
  .then(() => {
    console.log('Dev complete')
  })
  .catch(error => {
    console.log('Something gone wrong')
    console.error(error)
  })
