const rawEnv = require('./compiled_env.json');

const env = (envName, defaultVal) => {
  if (!rawEnv[envName] && !defaultVal) throw new Error(`Must Specify '${envName}'!`);
  return rawEnv[envName] || defaultVal;
};

// ======== Build configuration ========
export const ENTRY_PATH = env('ENTRY_PATH');
export const ENTRY_FOLDER = env('ENTRY_FOLDER');
export const OUTPUT_PATH = env('OUTPUT_PATH');
export const INDEX_HTML_PATH = env('INDEX_HTML_PATH');

export const SCRIPT_HASH = env('SCRIPT_HASH');

export const URL = env('URL');
