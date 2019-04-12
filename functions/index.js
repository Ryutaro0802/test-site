const functions = require('firebase-functions');
const { Nuxt } = require('nuxt');
const express = require('express');
const app = express();
// const envs = {
//   APIKEY: 'AIzaSyA2sHdXkqVZ0a',
//   AUTHDOMAIN: 'blog-53beb.firebaseapp.com',
//   DATABASEURL: 'https://blog-53beb.firebaseio.com',
//   PROJECTID: 'blog-53beb',
//   STORAGEBUCKET: 'blog-53beb.appspot.com',
//   MESSAGINGSENDERID: '458515467341'
// };

// Object.entries(envs).forEach((k, v) => {
//   console.log(k);
//   process.env[`${k}`.toUpperCase()] = v;
// });

process.env.APIKEY = 'AIzaSyA2sHdXkqVZ0a';
process.env.AUTHDOMAIN = 'blog-53beb.firebaseapp.com';
process.env.DATABASEURL = 'https://blog-53beb.firebaseio.com';
process.env.PROJECTID = 'blog-53beb';
process.env.STORAGEBUCKET = 'blog-53beb.appspot.com';
process.env.MESSAGINGSENDERID = '458515467341';

const config = {
  dev: false,
  buildDir: '.nuxt',
  build: {
    publicPath: '/assets/'
  }
};
const nuxt = new Nuxt(config);

function handleRequest(req, res) {
  res.set('Cache-Control', 'public, max-age=300, s-maxage=600');
  return new Promise((resolve, reject) => {
    nuxt.render(req, res, promise => {
      promise.then(resolve).catch(reject);
    });
  });
}

app.use(handleRequest);
exports.ssr = functions.https.onRequest(app);
