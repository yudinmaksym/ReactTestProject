import sh from 'sh';
import path from 'path';
import os from 'os';
import chalk from 'chalk';
import { OUTPUT_PATH } from '../config';

const exec = require('child_process').exec;

const DIST_DIRECTORY = path.join(__dirname, `../../${OUTPUT_PATH}`);

let clear;
if (os.type() === "Windows_NT") {
  clear = () => {
    return new Promise((resolve, reject) => {
      exec(`RD /S /Q ${DIST_DIRECTORY}`, (error, stdout, stderr) => {
        resolve();
      });
    })
      .then(() => {
        console.log(chalk.blue('> Build cleared successfully.'));
      });
  };
} else {
  clear = () => sh(`rm -rf ${DIST_DIRECTORY}`).then(() => {
    console.log(chalk.blue('> Build cleared successfully.'));
  });
}

export default clear;
