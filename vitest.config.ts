import { defineConfig } from "vitest/config";
import PugConverter from "./src";
export default defineConfig({
  test: {
    watch: true,
    reporters: "verbose",
    include: ["./test/**/*.{js,ts}"]
  },
  plugins: [
    PugConverter({
      paths: {
        src: 'test/src/pug',
        pages: 'test/src/pug/pages',
        output: 'test/dist/html'
      },
      renderOptions: {
        pretty: true,
        cache: false
      }
    })
  ]
})
