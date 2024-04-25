import { fileURLToPath } from 'node:url'
import path from 'node:path'
import { createWriteStream, existsSync, mkdirSync } from 'node:fs'
import { zip } from 'compressing'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const INCLUDED_FILES = [
  '_locales',
  'dist-popup',
  'icons',
  'rulesets',
  'LICENSE',
  'manifest.json',
]

const rootDir = path.resolve(__dirname, '..')
const distDir = path.resolve(rootDir, 'dist')
if (!existsSync(distDir))
  mkdirSync(distDir)
const outputPath = path.resolve(distDir, 'extension.zip')

const stream = new zip.Stream()
for (const file of INCLUDED_FILES)
  stream.addEntry(path.resolve(rootDir, file))
const dest = createWriteStream(outputPath)
stream.pipe(dest, { end: true })
