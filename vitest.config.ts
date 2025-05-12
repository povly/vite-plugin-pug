import { defineConfig } from "vitest/config";
import PugConverter from "./src";
import createPath from "./src/functions/createPath";
import splitStringByDelimiter from "./src/functions/splitStringBySlash";
export default defineConfig({
  test: {
    watch: true,
    reporters: "verbose",
    include: ["./test/**/*.{js,ts}"]
  },
  plugins: [
    PugConverter({
      paths: {
        src: createPath(__dirname, ...splitStringByDelimiter('test/src/pug')),
        pages: createPath(__dirname, ...splitStringByDelimiter('test/src/pug/pages')),
        output: createPath(__dirname, ...splitStringByDelimiter('test/dist/html'))
      },
      renderOptions: {
        pretty: true,
        cache: false
      }
    })
  ]
})
