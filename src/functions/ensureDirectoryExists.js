import fs from 'fs/promises';

export default async function ensureDirectoryExists(dirPath) {
  try {
    await fs.mkdir(dirPath, { recursive: true });
  } catch (err) {
    console.error('Directory creation error:', err);
    throw err;
  }
}
