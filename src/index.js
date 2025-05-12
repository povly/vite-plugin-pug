import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

import merge from 'deepmerge';

import splitStringByDelimiter from './functions/splitStringBySlash.js';
import createPath from './functions/createPath.js';
import generalHtml from './functions/generateHtml.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default function PugConverter(config) {

  // #TODO надо убрать мерж и перебирать, чтобы нормализовать пути от paths
  const defaultConfig = {
    paths: {
      src: createPath(__dirname, ...splitStringByDelimiter('src/pug')),
      pages: createPath(__dirname, ...splitStringByDelimiter('src/pug/pages')),
      output: createPath(__dirname, ...splitStringByDelimiter('dist/html'))
    },
    renderOptions: {
      pretty: true,
      cache: false
    }
  };

  const __mergedConfig = merge(defaultConfig, config);

  return {
    name: 'vite-plugin-pug',
    configureServer(server) {
      generalHtml(__mergedConfig);
      const watcher = fs.watch(
        __mergedConfig.paths.src,
        { recursive: true },
        (eventType, filename) => {
          if (filename && filename.endsWith('.pug')) {
            generalHtml(__mergedConfig);
          }
        }
      )
      // server.httpServer?.once('close', () => watcher.close());
    },
    buildStart() {
      generalHtml(__mergedConfig);
    }
  }
}
