module.exports = function(api) {
  api.cache(true);
  return {
    presets: [
      'babel-preset-expo',
      ['@babel/preset-env'],
      '@babel/preset-typescript',
      'module:metro-react-native-babel-preset',
      '@babel/preset-react'
    ],
    env: {
      test: {
        plugins: ['@babel/plugin-transform-runtime']
      }
    }
  };
};

