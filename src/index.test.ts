import { expect, test } from 'vitest'
import { version } from './index'

test('version should be defined', () => {
  expect(version).toBeDefined()
  expect(typeof version).toBe('string')
})
