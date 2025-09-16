import { defaultPlugins, defineConfig } from '@hey-api/openapi-ts'

export default defineConfig({
  input: './openapi.json',
  output: {
    format: 'biome',
    lint: 'biome',
    path: './src/client',
    indexFile: false,
    clean: true,
  },
  parser: {
    transforms: {
      readWrite: false,
    },
  },
  plugins: [
    ...defaultPlugins,
    {
      name: '@hey-api/schemas',
    },
    {
      name: '@hey-api/transformers',
      dates: true,
    },
    {
      name: '@hey-api/typescript',
      enums: 'typescript',
    },
    {
      name: '@hey-api/sdk',
      transformer: true,
      validator: 'zod',
    },
    {
      name: 'zod',
      metadata: true,
    },
  ],
})
