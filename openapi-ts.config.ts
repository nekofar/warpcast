import { defaultPlugins, defineConfig } from '@hey-api/openapi-ts'

export default defineConfig({
  input: './openapi.json',
  output: {
    format: 'prettier',
    lint: 'eslint',
    path: './src/client',
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
