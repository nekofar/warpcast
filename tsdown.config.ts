import { defineConfig } from "tsup";

export default defineConfig({
  // Entry point for the build
  entry: ["src/index.ts"],

  // Output both ESM and CommonJS formats
  format: ["esm", "cjs"],
  // Output directory for built files
  outDir: "dist",
  dts: true,
  clean: true,
  outExtension({ format }) {
    return { js: format === "esm" ? ".mjs" : ".cjs" };
  },
  bundle: true,
  splitting: false,
  external: ["zod"], // keep zod as a peer dependency, do not bundle
  noExternal: [],
});
