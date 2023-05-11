/* This code exports a configuration object for a webpack dev server. It sets the headers to allow
cross-origin resource sharing (CORS) for all origins and allows all hosts to access the dev server. */
module.exports = {
  devServer: {
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    allowedHosts: [
      'all'

    ],
  },
};
