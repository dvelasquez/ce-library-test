import typescript from 'rollup-plugin-typescript2';
import path from 'path';

const PACKAGE_ROOT_PATH = process.cwd();
const INPUT_FILE = path.join(PACKAGE_ROOT_PATH, 'src/index.ts');
const OUTPUT_DIR = path.join(PACKAGE_ROOT_PATH, 'dist');
const PKG_JSON = require(path.join(PACKAGE_ROOT_PATH, 'package.json'));

const formats = [
  { dist: 'umd', ts: 'es3', lib: ['dom', 'es5'] },
  { dist: 'umd', ts: 'es5', lib: ['dom', 'esnext'] },
  { dist: 'es', ts: 'esnext', lib: ['dom', 'esnext'] },
];

export default formats.map(format => ({
  plugins: [
    typescript({
      tsconfig: `tsconfig.json`,
      tsconfigOverride: { compilerOptions: { target: format.ts, lib: format.lib } },
    }),
  ],
  input: INPUT_FILE,
  external: [
    ...Object.keys(PKG_JSON.dependencies || {}),
    ...Object.keys(PKG_JSON.peerDependencies || {}),
  ],
  output: {
    file: path.join(OUTPUT_DIR, `index.${format.ts}.js`),
    format: format.dist,
    sourcemap: true,
  },
}));
