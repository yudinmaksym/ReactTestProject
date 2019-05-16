import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import { OUTPUT_PATH, INDEX_HTML_PATH, SCRIPT_HASH, ENTRY_FOLDER } from '../config';

const debug = require('debug')('webpack-config-builder');

export default (mode) => {
  debug(`Building webpack config in mode '${mode}'`);

  return {
    cache: mode === 'development',
    plugins: [
      new HtmlWebpackPlugin({
        template: path.join(__dirname, '../../', INDEX_HTML_PATH),
        inject: true,
      }),
      new CopyWebpackPlugin([
        {
          from: path.join(__dirname, '../../src/assets'),
          to: 'assets',
        },
      ]),
    ],
    output: {
      path: path.join(__dirname, `../../${OUTPUT_PATH}`),
      filename: `[name]_${SCRIPT_HASH}.js`,
      publicPath: '/',
    },
    resolve: {
      modules: ['node_modules'],
      extensions: ['.js', '.jsx'],
    },
    module: {
      rules: [{
        test: /\.json?$/,
        use: ['json-loader'],
      }, {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      }, {
        test: /\.sass$/,
        use: [
          'style-loader',
          'css-loader?modules&importLoaders=1&localIdentName=[local]-[hash:base64:4]',
          'sass-loader',
          {
            loader: 'sass-resources-loader',
            options: {
              resources: path.join(__dirname, `../../${ENTRY_FOLDER}/components/mixins.sass`),
            }
          }
        ],
      }, {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      }],
    },
  };
};
