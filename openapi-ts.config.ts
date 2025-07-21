import { defaultPlugins, defineConfig } from '@hey-api/openapi-ts'

export default defineConfig({
  input: './openapi.json',
  output: {
    format: 'biome',
    lint: 'biome',
    path: './src/client',
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
      exportFromIndex: true,
    },
    {
      name: '@hey-api/transformers',
      dates: true,
      exportFromIndex: true,
    },
    {
      name: '@hey-api/typescript',
      enums: 'typescript',
    },
    {
      name: '@hey-api/sdk',
      transformer: true,
    },
  ],
})
