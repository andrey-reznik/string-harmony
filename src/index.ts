import fs from 'node:fs'
import { promises as fsp } from 'node:fs'
import { getErrorMessage } from './errorHandler.ts'

export default class StringHarmony {
  private readonly filePath: string

  constructor(filePath: string) {
    this.filePath = filePath
  }

  // Asynchronous methods
  async readFileAsync() {
    try {
      const data = await fsp.readFile(this.filePath, 'utf8')
      return data.split('\n')
    } catch (error: unknown) {
      throw new Error(`Error reading file: ${getErrorMessage(error)}`)
    }
  }

  async writeFileAsync(lines: string[]) {
    try {
      const data = lines.join('\n')
      await fsp.writeFile(this.filePath, data, 'utf8')
    } catch (error: unknown) {
      throw new Error(`Error writing to file: ${getErrorMessage(error)}`)
    }
  }

  async appendLineAsync(line: string) {
    try {
      const lines = await this.readFileAsync()
      lines.push(line)
      await this.writeFileAsync(lines)
    } catch (error: unknown) {
      throw new Error(`Error appending line: ${getErrorMessage(error)}`)
    }
  }

  async prependLineAsync(line: string) {
    try {
      const lines = await this.readFileAsync()
      lines.unshift(line)
      await this.writeFileAsync(lines)
    } catch (error: unknown) {
      throw new Error(`Error prepending line: ${getErrorMessage(error)}`)
    }
  }

  async insertLineAtAsync(line: string, index: number) {
    try {
      const lines = await this.readFileAsync()
      if (index < 0 || index > lines.length) {
        throw new Error('Index out of bounds')
      }
      lines.splice(index, 0, line)
      await this.writeFileAsync(lines)
    } catch (error: unknown) {
      throw new Error(
        `Error inserting line at index ${index}: ${getErrorMessage(error)}`,
      )
    }
  }

  async appendLineAtAsync(line: string, index: number) {
    try {
      const lines = await this.readFileAsync()
      if (index < 0 || index >= lines.length) {
        throw new Error('Index out of bounds')
      }
      lines.splice(index + 1, 0, line)
      await this.writeFileAsync(lines)
    } catch (error: unknown) {
      throw new Error(
        `Error appending line at index ${index}: ${getErrorMessage(error)}`,
      )
    }
  }

  async prependLineAtAsync(line: string, index: number) {
    try {
      const lines = await this.readFileAsync()
      if (index < 0 || index >= lines.length) {
        throw new Error('Index out of bounds')
      }
      lines.splice(index, 0, line)
      await this.writeFileAsync(lines)
    } catch (error: unknown) {
      throw new Error(
        `Error prepending line at index ${index}: ${getErrorMessage(error)}`,
      )
    }
  }

  // Synchronous methods
  readFileSync() {
    try {
      const data = fs.readFileSync(this.filePath, 'utf8')
      return data.split('\n')
    } catch (error: unknown) {
      throw new Error(`Error reading file: ${getErrorMessage(error)}`)
    }
  }

  writeFileSync(lines: string[]) {
    try {
      const data = lines.join('\n')
      fs.writeFileSync(this.filePath, data, 'utf8')
    } catch (error: unknown) {
      throw new Error(`Error writing to file: ${getErrorMessage(error)}`)
    }
  }

  appendLineSync(line: string) {
    try {
      const lines = this.readFileSync()
      lines.push(line)
      this.writeFileSync(lines)
    } catch (error: unknown) {
      throw new Error(`Error appending line: ${getErrorMessage(error)}`)
    }
  }

  prependLineSync(line: string) {
    try {
      const lines = this.readFileSync()
      lines.unshift(line)
      this.writeFileSync(lines)
    } catch (error: unknown) {
      throw new Error(`Error prepending line: ${getErrorMessage(error)}`)
    }
  }

  insertLineAtSync(line: string, index: number) {
    try {
      const lines = this.readFileSync()
      if (index < 0 || index > lines.length) {
        throw new Error('Index out of bounds')
      }
      lines.splice(index, 0, line)
      this.writeFileSync(lines)
    } catch (error: unknown) {
      throw new Error(
        `Error inserting line at index ${index}: ${getErrorMessage(error)}`,
      )
    }
  }

  appendLineAtSync(line: string, index: number) {
    try {
      const lines = this.readFileSync()
      if (index < 0 || index >= lines.length) {
        throw new Error('Index out of bounds')
      }
      lines.splice(index + 1, 0, line)
      this.writeFileSync(lines)
    } catch (error: unknown) {
      throw new Error(
        `Error appending line at index ${index}: ${getErrorMessage(error)}`,
      )
    }
  }

  prependLineAtSync(line: string, index: number) {
    try {
      const lines = this.readFileSync()
      if (index < 0 || index >= lines.length) {
        throw new Error('Index out of bounds')
      }
      lines.splice(index, 0, line)
      this.writeFileSync(lines)
    } catch (error: unknown) {
      throw new Error(
        `Error prepending line at index ${index}: ${getErrorMessage(error)}`,
      )
    }
  }
}
