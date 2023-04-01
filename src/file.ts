import { parseFragment } from 'parse5'
import { readFileSync } from 'fs'

const FileParser = {
  readFile(contents: string) {
    // const source = readFileSync(path, { encoding: 'utf8' })
    const fragment = parseFragment(contents)

    return this.extract(fragment)
  },

  extract(fragment) {
    const tags: any = []
    let code = ''

    fragment.childNodes.forEach(node => {
      if (node.nodeName === 'script') {
        code += node.childNodes[0].value
      } else {
        tags.push(node)
      }
    })

    return { code, tags }
  }
}

export default FileParser
