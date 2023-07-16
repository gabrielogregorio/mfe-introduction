const singleSpaDefaults = require('webpack-config-single-spa-react-ts');
const { mergeWithRules } = require('webpack-merge');

const ruleProcessTailwindStyles = {
  test: /\.css$/i,
  use: [
    require.resolve('style-loader', {
      paths: [require.resolve('webpack-config-single-spa')],
    }),
    require.resolve('css-loader', {
      paths: [require.resolve('webpack-config-single-spa')],
    }),
    'postcss-loader',
  ],
};

const ruleProcessMusicFiles = {
  test: /\.(mp3|wav|ogg)$/,
  use: 'file-loader',
};

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: 'mfe',
    projectName: 'introduction',
    webpackConfigEnv,
    argv,
  });

  const config = mergeWithRules({
    module: {
      rules: {
        test: 'match',
        use: 'replace',
      },
    },
  })(defaultConfig, {
    module: {
      rules: [ruleProcessTailwindStyles, ruleProcessMusicFiles],
    },
  });

  return config;
};
