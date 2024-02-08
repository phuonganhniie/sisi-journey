module.exports = {
    module: {
      rules: [
        {
          test: /\.(tsx|ts|js)$/,
          exclude: /node_modules/,
          use: 'ts-loader'
        },
      ]
    },
  };
  