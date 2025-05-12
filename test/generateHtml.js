import { test, expect } from "vitest";
import createPath from "../src/functions/createPath";
import splitStringByDelimiter from "../src/functions/splitStringBySlash";
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
test("generate HTML", () => {
  // generateHtml({
  //   paths: {
  //     src: createPath(__dirname, ...splitStringByDelimiter('src/pug')),
  //     pages: createPath(__dirname, ...splitStringByDelimiter('src/pug/pages')),
  //     output: createPath(__dirname, ...splitStringByDelimiter('dist/html'))
  //   },
  //   renderOptions: {
  //     pretty: true,
  //     cache: false
  //   }
  // });
  expect('test');
})
