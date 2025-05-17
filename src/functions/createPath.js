import { normalizePath } from 'vite';
import path from 'path';
export default function createPath (...segments) {
  return normalizePath(path.join(...segments));
};
