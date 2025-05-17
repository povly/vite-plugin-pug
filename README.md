# Vite Plugin for Pug to HTML Conversion

This plugin for Vite allows you to convert Pug files to HTML. It tracks changes in the folder `src/pug/` and converts files from `src/pug/pages` to `dist/html'.

## Installation

Install the plugin using npm or yarn:

```bash
npm i @povly/vite-plugin-pug -D
```

## Configuration

Create a `vite.config.js` [configuration](https://vite.dev/config/) file and import the plugin:
```javascript
// vite.config.(js|ts)
import { defineConfig } from "vite"
import PugConverter from "@povly/vite-plugin-pug"

const config = {
  paths: {
    src: 'src/pug',
    pages: 'src/pug/pages',
    output: 'dist/html'
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

export default defineConfig({
  plugins: [PugConverter(config)],
})
```

## Plugin Parameters - Config

| Name  | Type     | Description |
| :-----| :------- | :---------- |
| `paths` | object         | **Optional.** Path configurations for source, pages, and output directories. |
| `paths.src` | 	string         | 	Path to the source Pug files for tracking. Default: `src/pug` |
| `paths.pages` | 	string         | Path to the Pug pages for conversion. Default: `src/pug/pages` |
| `paths.output` | 	string         | Path for the output HTML files. Default: `dist/html` |
| `renderOptions` | 	object         | **Optional.** Rendering [options](https://pugjs.org/api/reference.html) for Pug. Default: `pretty:true` and `cache:false`  |
| `serverOptions` | 	object         | **Optional.** Server options.  |
| `serverOptions.close` | 	boolean         | Disconnects tracking after the server closing. Default: `true` |
| `serverOptions.watcher` | 	boolean         |  Enable watching for changes. Default: `true` |

## 📂 Example of a structure

```
project/
├── src/
│ └── pug/
│  ├── pages/ # Main pages
│  │ ├── index.pug
│  │ └── about.pug
│  └── includes/ # Plug-in components
│  │ ├── head.pug
│  │ ├── footer.pug
|  └── etc.
└── dist/
 └── html/ # Compilation result
   ├── index.html
   └── about.html
```

## 🚀 Features
- Hot Reload: Automatic reassembly when files are changed in src/pug/
- Flexible paths: Customization of input/output directories
- Pug settings: Full control over rendering options
- Integration with Vite: Works with dev server and production build


## Contribution
If it doesn't match with your setup please [start a new discussion](https://github.com/povly/vite-plugin-pug/discussions/new/choose) about it, I'm interested to see other workflows. If something is simply not working, please [raise an issue](https://github.com/povly/vite-plugin-pug/issues). PRs certainly welcome! (.❛ ᴗ ❛.)
