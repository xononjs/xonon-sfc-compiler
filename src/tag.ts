const TagParser = {
  parse(tags: any[]) {
    const nodes = []
    const listeners = []

    this.parseTags(nodes, listeners, null, 0, tags)
    this.removeTrailingWhitespace(nodes)

    return { nodes, listeners }
  },

  parseTags(nodes: { index: any; type: string; attrs: {}; name: any; parent: any }[], listeners: { index: any; event: any; handler: any }[], parent: number | null, index: number, tags: any[]) {
    tags.forEach(tag => {
      if (tag.nodeName === '#text') {
        index = this.parseText(nodes, index, parent, tag)
      } else {
        index = this.parseElement(nodes, listeners, index, parent, tag)
      }
    })

    return index
  },

  parseText(nodes: any[], index: number, parent: number | null, tag: { value: any }) {
    let text = tag.value
    let startBracket, endBracket

    while (true) {
      startBracket = text.search('{{')

      if (startBracket === 0) {
        endBracket = text.search('}}')
        index = this.addBinding(nodes, index, parent, text.substr(1, endBracket - 1))
        text = text.substr(endBracket + 1)
        if (!text) break
      } else if (startBracket < 0) {
        index = this.addText(nodes, index, parent, text)
        break
      } else {
        index = this.addText(nodes, index, parent, text.substr(0, startBracket))
        text = text.substr(startBracket)
      }
    }

    return index
  },

  addText(nodes: { index: any; type: string; value: any; parent: any }[], index: number, parent: any, value: string) {
    if (index === 0 && value.trim() === '') return index

    nodes.push({
      index,
      type: 'text',
      value,
      parent
    })

    return index + 1
  },

  addBinding(nodes: { index: any; type: string; name: any; parent: any }[], index: number, parent: any, name: any) {
    nodes.push({
      index,
      type: 'binding',
      name,
      parent
    })

    return index + 1
  },

  parseElement(nodes: { index: any; type: string; attrs: {}; name: any; parent: any }[], listeners: { index: any; event: any; handler: any }[], index: number, parent: any, tag: { attrs: any[]; nodeName: any; childNodes: any }) {
    const attrs = {}

    tag.attrs.forEach(attr => {
      if (attr.name.match(/^when:/)) {
        listeners.push({
          index,
          event: attr.name.split(':')[1],
          handler: attr.value
        })
      } else {
        attrs[attr.name] = attr.value
      }
    })

    nodes.push({
      index,
      type: 'element',
      attrs,
      name: tag.nodeName,
      parent
    })

    return this.parseTags(nodes, listeners, index, index + 1, tag.childNodes)
  },

  removeTrailingWhitespace(nodes: any[]) {
    let i = nodes.length - 1
    let node = nodes[i]

    while (node.parent === null && node.type === 'text' && node.value.trim() === '') {
      nodes.splice(i, 1)

      i -= 1
      node = nodes[i]
    }
  }
}

export default TagParser