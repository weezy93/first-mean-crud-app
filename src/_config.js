var config = {};

config.mongoURI = {
  test: 'mongodb://localhost/first-mean-app-testing',
  development: 'mongodb://localhost/first-mean-app',
  production: process.env.MONGODB_URI
}

module.exports = config;

// MONGODB_URI: mongodb://heroku_2g3tmv18:kqfc5rn6ff11ud106lbeg3alib@ds023540.mlab.com:23540/heroku_2g3tmv18
