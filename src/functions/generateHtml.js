import fs from "fs/promises";
import ensureDirectoryExists from "./ensureDirectoryExists.js";
import { normalizePath } from "vite";
import renderPugToHtml from "./renderPugToHtml.js";
import path from "path";

export default async function generateHtml(config) {
  await ensureDirectoryExists(config.paths.output);

  const files = await fs.readdir(config.paths.pages, {
    withFileTypes: true,
    encoding: "utf-8"
  });

  for (const file of files) {
    const filePath = path.join(config.paths.pages, file.name);

    if (file.isFile() && file.name.endsWith('.pug')) {
      const html = renderPugToHtml(
        normalizePath(filePath),
        config.renderOptions
      );

      if (html) {
        const outputName = file.name.replace('.pug', '.html');
        await fs.writeFile(
          path.join(config.paths.output, outputName),
          html
        );
      }
    }
  }
}
