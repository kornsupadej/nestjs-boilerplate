/** @type {import('lint-staged').Configuration} */
const lintStagedConfig = {
  '*.?(c|m)[jt]s?(x)': ['eslint --fix', 'prettier --write'],
  '*.{json,y?(a)ml}': ['prettier --write'],
}

export default lintStagedConfig
