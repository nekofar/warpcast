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

  // Generate TypeScript declaration files
  dts: true,

  // Clean the output directory before building
  clean: true,

  // Target ECMAScript version
  target: "es2022",

  // Disable minification for better readability
  minify: false,

  // Enable tree shaking to remove unused code
  treeshake: true,

  // Add shims for Node.js compatibility
  shims: true,

  // External dependencies that should not be bundled
  external: ["zod"],

  // Generate package.json exports field
  exports: true,
});
