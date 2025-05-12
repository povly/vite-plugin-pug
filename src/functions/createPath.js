import { normalizePath } from 'vite';
import path from 'path';
export default function createPath (dirname, ...segments) {
  return normalizePath(path.join(dirname, ...segments));
};
