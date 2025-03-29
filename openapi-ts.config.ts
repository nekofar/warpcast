import { defineConfig } from '@hey-api/openapi-ts'

export default defineConfig({
  input: './openapi.yaml',
  output: {
    format: 'prettier',
    lint: 'eslint',
    path: './src/client',
  },
  plugins: [
    {
      name: '@hey-api/client-fetch',
      bundle: false,
      exportFromIndex: true,
    },
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
