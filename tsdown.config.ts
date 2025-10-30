import { defineConfig } from "tsup";

export default defineConfig({
  // Entry point for the build
  entry: ["src/index.ts"],

  // Output both ESM and CommonJS formats
  format: ["esm", "cjs"],
  // Output directory for built files
  outDir: "dist",

  // Generate source maps for debugging
  sourcemap: true,
  dts: true,
  clean: true,
  outExtension({ format }) {
    return { js: format === "esm" ? ".mjs" : ".cjs" };
  },
  bundle: true,
  splitting: false,
  noExternal: [],

  // Disable minification for better readability
  minify: false,
  // External dependencies that should not be bundled
  external: ["zod"],

  // Generate package.json exports field
  exports: true,
});
