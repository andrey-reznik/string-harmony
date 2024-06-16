import { describe, it, expect, beforeEach, vi } from 'vitest'
import fs from 'node:fs'
import { promises as fsp } from 'node:fs'
import StringHarmony from '../src'
import { getErrorMessage } from '../src/errorHandler.ts'

// Mock getErrorMessage
vi.mock('./errorHandler.ts', () => ({
  getErrorMessage: vi.fn((error) => getErrorMessage(error)),
}))

// Mock 'fs' and 'fsp' modules
vi.mock('node:fs', () => {
  const originalFs = vi.importActual('node:fs')
  return {
    default: {
      ...originalFs,
      readFileSync: vi.fn(),
      writeFileSync: vi.fn(),
    },
    promises: {
      ...originalFs,
      readFile: vi.fn(),
      writeFile: vi.fn(),
    },
  }
})

describe('StringHarmony', () => {
  const filePath = 'test.txt'
  let fileManipulator: StringHarmony

  beforeEach(() => {
    fileManipulator = new StringHarmony(filePath)
  })

  describe('Asynchronous methods', () => {
    it('should read file asynchronously', async () => {
      const mockData = 'line1\nline2\nline3'
      // @ts-expect-error
      fsp.readFile.mockResolvedValue(mockData)

      const lines = await fileManipulator.readFileAsync()
      expect(lines).toEqual(['line1', 'line2', 'line3'])
    })

    it('should write file asynchronously', async () => {
      // @ts-expect-error
      fsp.writeFile.mockResolvedValue(undefined)

      await fileManipulator.writeFileAsync(['line1', 'line2', 'line3'])
      expect(fsp.writeFile).toHaveBeenCalledWith(
        filePath,
        'line1\nline2\nline3',
        'utf8',
      )
    })

    it('should append line asynchronously', async () => {
      const mockData = 'line1\nline2\nline3'
      // @ts-expect-error
      fsp.readFile.mockResolvedValue(mockData)
      // @ts-expect-error
      fsp.writeFile.mockResolvedValue(undefined)

      await fileManipulator.appendLineAsync('line4')
      expect(fsp.writeFile).toHaveBeenCalledWith(
        filePath,
        'line1\nline2\nline3\nline4',
        'utf8',
      )
    })

    it('should prepend line asynchronously', async () => {
      const mockData = 'line1\nline2\nline3'
      // @ts-expect-error
      fsp.readFile.mockResolvedValue(mockData)
      // @ts-expect-error
      fsp.writeFile.mockResolvedValue(undefined)

      await fileManipulator.prependLineAsync('line0')
      expect(fsp.writeFile).toHaveBeenCalledWith(
        filePath,
        'line0\nline1\nline2\nline3',
        'utf8',
      )
    })

    it('should insert line at index asynchronously', async () => {
      const mockData = 'line1\nline2\nline3'
      // @ts-expect-error
      fsp.readFile.mockResolvedValue(mockData)
      // @ts-expect-error
      fsp.writeFile.mockResolvedValue(undefined)

      await fileManipulator.insertLineAtAsync('line1.5', 1)
      expect(fsp.writeFile).toHaveBeenCalledWith(
        filePath,
        'line1\nline1.5\nline2\nline3',
        'utf8',
      )
    })

    it('should append line at index asynchronously', async () => {
      const mockData = 'line1\nline2\nline3'
      // @ts-expect-error
      fsp.readFile.mockResolvedValue(mockData)
      // @ts-expect-error
      fsp.writeFile.mockResolvedValue(undefined)

      await fileManipulator.appendLineAtAsync('line1.5', 1)
      expect(fsp.writeFile).toHaveBeenCalledWith(
        filePath,
        'line1\nline2\nline1.5\nline3',
        'utf8',
      )
    })

    it('should prepend line at index asynchronously', async () => {
      const mockData = 'line1\nline2\nline3'
      // @ts-expect-error
      fsp.readFile.mockResolvedValue(mockData)
      // @ts-expect-error
      fsp.writeFile.mockResolvedValue(undefined)

      await fileManipulator.prependLineAtAsync('line1.5', 1)
      expect(fsp.writeFile).toHaveBeenCalledWith(
        filePath,
        'line1\nline1.5\nline2\nline3',
        'utf8',
      )
    })
  })

  describe('Synchronous methods', () => {
    it('should read file synchronously', () => {
      const mockData = 'line1\nline2\nline3'
      // @ts-expect-error
      fs.readFileSync.mockReturnValue(mockData)

      const lines = fileManipulator.readFileSync()
      expect(lines).toEqual(['line1', 'line2', 'line3'])
    })

    it('should write file synchronously', () => {
      // @ts-expect-error
      fs.writeFileSync.mockReturnValue(undefined)

      fileManipulator.writeFileSync(['line1', 'line2', 'line3'])
      expect(fs.writeFileSync).toHaveBeenCalledWith(
        filePath,
        'line1\nline2\nline3',
        'utf8',
      )
    })

    it('should append line synchronously', () => {
      const mockData = 'line1\nline2\nline3'
      // @ts-expect-error
      fs.readFileSync.mockReturnValue(mockData)
      // @ts-expect-error
      fs.writeFileSync.mockReturnValue(undefined)

      fileManipulator.appendLineSync('line4')
      expect(fs.writeFileSync).toHaveBeenCalledWith(
        filePath,
        'line1\nline2\nline3\nline4',
        'utf8',
      )
    })

    it('should prepend line synchronously', () => {
      const mockData = 'line1\nline2\nline3'
      // @ts-expect-error
      fs.readFileSync.mockReturnValue(mockData)
      // @ts-expect-error
      fs.writeFileSync.mockReturnValue(undefined)

      fileManipulator.prependLineSync('line0')
      expect(fs.writeFileSync).toHaveBeenCalledWith(
        filePath,
        'line0\nline1\nline2\nline3',
        'utf8',
      )
    })

    it('should insert line at index synchronously', () => {
      const mockData = 'line1\nline2\nline3'
      // @ts-expect-error
      fs.readFileSync.mockReturnValue(mockData)
      // @ts-expect-error
      fs.writeFileSync.mockReturnValue(undefined)

      fileManipulator.insertLineAtSync('line1.5', 1)
      expect(fs.writeFileSync).toHaveBeenCalledWith(
        filePath,
        'line1\nline1.5\nline2\nline3',
        'utf8',
      )
    })

    it('should append line at index synchronously', () => {
      const mockData = 'line1\nline2\nline3'
      // @ts-expect-error
      fs.readFileSync.mockReturnValue(mockData)
      // @ts-expect-error
      fs.writeFileSync.mockReturnValue(undefined)

      fileManipulator.appendLineAtSync('line1.5', 1)
      expect(fs.writeFileSync).toHaveBeenCalledWith(
        filePath,
        'line1\nline2\nline1.5\nline3',
        'utf8',
      )
    })

    it('should prepend line at index synchronously', () => {
      const mockData = 'line1\nline2\nline3'
      // @ts-expect-error
      fs.readFileSync.mockReturnValue(mockData)
      // @ts-expect-error
      fs.writeFileSync.mockReturnValue(undefined)

      fileManipulator.prependLineAtSync('line1.5', 1)
      expect(fs.writeFileSync).toHaveBeenCalledWith(
        filePath,
        'line1\nline1.5\nline2\nline3',
        'utf8',
      )
    })
  })
})
