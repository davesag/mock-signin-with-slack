const path = require('path')

const traverse = require('src/utils/traverse')

const pathSeparator = new RegExp(path.sep, 'g')

const apis = {}
const base = __dirname
const ignore = path.basename(module.filename)

const processor = file => {
  const name = file.slice(base.length + 1, -3).replace(pathSeparator, '_')
  apis[name] = require(file)
}

traverse(base, ignore, processor)

module.exports = apis
