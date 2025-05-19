import fs from 'fs';

import merge from 'deepmerge';

import splitStringByDelimiter from './functions/splitStringBySlash.js';
import createPath from './functions/createPath.js';
import generalHtml from './functions/generateHtml.js';

export default function PugConverter(config = {}) {

  const defaultConfig = {
    paths: {
      src: createPath(...splitStringByDelimiter('src/pug')),
      pages: createPath(...splitStringByDelimiter('src/pug/pages')),
      output: createPath(...splitStringByDelimiter('dist'))
    },
    renderOptions: {
      pretty: true,
      cache: false
    },
    serverOptions: {
      close: true,
      watcher: true
    }
  };

  const __mergedConfig = merge(defaultConfig, config, {
    customMerge:(key) => {
      if (key === 'paths'){
        return (_defaultPaths, _userPaths) => {
          const mergedPaths = { ..._defaultPaths };
          for (const [key, value] of Object.entries(_userPaths)) {
            mergedPaths[key] = '';
            mergedPaths[key] = createPath(...splitStringByDelimiter(value));
          }
          return mergedPaths;
        }
      }
    }
  });

  return {
    name: 'vite-plugin-pug',
    configureServer(server) {
      generalHtml(__mergedConfig);
      if (__mergedConfig.serverOptions.watcher) {
        const watcher = fs.watch(
          __mergedConfig.paths.src,
          { recursive: true },
          (eventType, filename) => {
            if (filename && filename.endsWith('.pug')) {
              generalHtml(__mergedConfig);
            }
          }
        )
        if (__mergedConfig.serverOptions.close) {
          server.httpServer?.once('close', () => watcher.close());
        }
      }
    },
    buildStart() {
      generalHtml(__mergedConfig);
    }
  }
}
