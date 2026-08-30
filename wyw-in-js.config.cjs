module.exports = {
  babelOptions: {
    presets: [
      require.resolve('@babel/preset-typescript'),
      require.resolve('@babel/preset-react'),
      require.resolve('@wyw-in-js/babel-preset'),
    ],
    plugins: [
      require.resolve('@babel/plugin-transform-export-namespace-from'),
      [
        require.resolve('babel-plugin-module-resolver'),
        {
          alias: {
            '@': './src',
            '@ui': './packages/twenty-ui/src',
            'twenty-ui': './packages/twenty-ui/src',
            'twenty-shared': './packages/twenty-shared/src',
          },
        },
      ],
    ],
    compact: true,
  },
};
