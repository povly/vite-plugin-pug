import fs from "fs";
import ensureDirectoryExists from "./ensureDirectoryExists.js";
import { normalizePath } from "vite";
import renderPugToHtml from "./renderPugToHtml.js";
import path from "path";

export default function generateHtml(config) {
  ensureDirectoryExists(config.paths.output);
  fs.readdirSync(config.paths.pages, { withFileTypes: true }).forEach(file => {
    const _path = file.parentPath; // path file
    const _name = file.name; // name file
    // Check if pug at dir src/pug/pages
    if (_path.includes(config.paths.pages) && _name.endsWith('.pug')) {
      const name = _name.replace('.pug', '.html');
      const html = renderPugToHtml(
        normalizePath(path.join(_path, _name)),
        config.renderOptions
      );
      if (html) {
        fs.writeFileSync(
          path.join(config.paths.output, name),
          html
        )
      }
    }
  });
}
