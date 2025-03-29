import { defineConfig } from '@hey-api/openapi-ts'

export default defineConfig({
  input: './openapi.yaml',
  output: {
    format: 'prettier',
    lint: 'eslint',
    path: './src/',
  },
  plugins: [
    {
      name: '@hey-api/client-fetch',
      exportFromIndex: true,
    },
    {
      name: '@hey-api/schemas',
      exportFromIndex: true,
    },
    {
      dates: true,
      exportFromIndex: true,
      name: '@hey-api/transformers',
    },
    {
      enums: 'typescript',
      name: '@hey-api/typescript',
    },
    {
      name: '@hey-api/sdk',
      transformer: true,
    },
  ],
})
