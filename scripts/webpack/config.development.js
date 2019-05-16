import path from 'path';
import webpack from 'webpack';
import { ENTRY_PATH } from '../config';

export default {
  devtool: 'eval',
  entry: {
    main: [
      'webpack-dev-server/client?http://localhost:3000', // WebpackDevServer host and port
      'webpack/hot/only-dev-server',
      'babel-polyfill',
      path.join(__dirname, '../../', ENTRY_PATH),
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
      },
    }),
  ],
  module: {
    rules: [],
  },
};
