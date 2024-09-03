const fs = require('fs');
const path = require('path');

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
  const files = ['LICENSE.md', 'package.json', 'README.md'];

  for (const file of files) {
    const destinationPath = path.join(buildDirectory, file);
    await fs.promises.copyFile(file, destinationPath);
    if (afterCopy[file]) {
      await afterCopy[file](destinationPath);
    }
  }
}

// Replace "main": "dist/index.js" with "main": "index.js"
async function updatePackageJsonMain() {
  const packageJsonPath = path.join(buildDirectory, 'package.json');
  const packageJsonString = await fs.promises.readFile(packageJsonPath, { encoding: 'utf-8' });
  const packageJson = JSON.parse(packageJsonString);
  packageJson.main = packageJson.main.replace(/dist\//, '');
  await fs.promises.writeFile(packageJsonPath, JSON.stringify(packageJson, null, 2), { encoding: 'utf-8' });
}

async function build() {
  await copyOtherFiles();
  await updatePackageJsonMain();
}

build();
