import path from 'path';
import express from 'express';
import webpack from 'webpack';
import compression from 'compression';
import WebpackDevServer from 'webpack-dev-server';
import { OUTPUT_PATH } from '../config';

export default (mode, config) => {
  const app = express();
  app.use(compression());

  if (mode === 'development') {
    return new Promise((resolve, reject) => {
      new WebpackDevServer(webpack(config), {
        publicPath: '/',
        hot: true,
        historyApiFallback: true,
        stats: {
          colors: true,
          reasons: false,
          hash: false,
          version: false,
          timings: true,
          chunks: false,
          chunkModules: false,
          cached: false,
          cachedAssets: false,
        },
      }).listen(3000, 'localhost', (err, result) => {
        if (err) {
          return reject(err);
        }

        console.log('Listening at http://localhost:3000');
        return resolve(result);
      });
    });
  }

  app.use(express.static(path.join(__dirname, `../../${OUTPUT_PATH}`)));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, `../../${OUTPUT_PATH}/index.html`));
  });

  return new Promise((resolve, reject) => {
    app.listen(3001, err => (
      err ? reject(err) : resolve()
    ));
  });
};
