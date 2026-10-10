import fs from 'node:fs';
import path from 'node:path';

const buildDirectory = 'dist';
const afterCopy = {
  'package.json': async function(copiedFilePath) {
    const packageJsonContent = await fs.promises.readFile(copiedFilePath, { encoding: 'utf-8' });
    const packageJson = JSON.parse(packageJsonContent);
    // this is in place to prevent accidental publication of the project root directory
    packageJson.private = false;
    await fs.promises.writeFile(
      path.join(copiedFilePath),
      JSON.stringify(packageJson, null, 2),
      { encoding: 'utf-8'}
    );
  },
}

async function copyOtherFiles() {
  const files = ['LICENSE.md', 'package.json', 'README.md', '.npmrc', '.npmignore'];

  for (const file of files) {
    const destinationPath = path.join(buildDirectory, file);
    await fs.promises.copyFile(file, destinationPath);
    if (afterCopy[file]) {
      await afterCopy[file](destinationPath);
    }
  }
}

// Replace "exports": "./dist/index.js" with "main": "./index.js"
async function updatePackageJsonExports() {
  const packageJsonPath = path.join(buildDirectory, 'package.json');
  const packageJsonString = await fs.promises.readFile(packageJsonPath, { encoding: 'utf-8' });
  const packageJson = JSON.parse(packageJsonString);
  packageJson.exports = packageJson.exports.replace(/dist\//, '');
  await fs.promises.writeFile(packageJsonPath, JSON.stringify(packageJson, null, 2), { encoding: 'utf-8' });
}

// Published code must use React's production JSX runtime. Babel 8 compiles JSX with
// the development runtime (jsxDEV) unless told otherwise, and consumers' production
// builds then fail with "_jsxDEV is not a function".
async function assertProductionJsx() {
  const files = await fs.promises.readdir(buildDirectory, { recursive: true });
  const offenders = [];
  for (const file of files.filter((name) => name.endsWith('.js'))) {
    const content = await fs.promises.readFile(path.join(buildDirectory, file), { encoding: 'utf-8' });
    if (content.includes('jsxDEV') || content.includes('react/jsx-dev-runtime')) {
      offenders.push(file);
    }
  }
  if (offenders.length > 0) {
    throw new Error(`Development JSX runtime found in ${offenders.join(', ')}. Check the @babel/preset-react options in babel.config.js.`);
  }
}

async function build() {
  await assertProductionJsx();
  await copyOtherFiles();
  await updatePackageJsonExports();
}

build();
