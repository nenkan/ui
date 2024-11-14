import fs from 'node:fs';

async function clean() {
  const buildDirectory = 'dist';
  await fs.promises.rm(buildDirectory, { recursive: true, force: true });
  await fs.promises.mkdir(buildDirectory);
}

clean();
