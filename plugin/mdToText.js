export default function mdToText() {
    return {
      name: 'md-to-text',
      transform(code, id) {
        if(/.(md)$/.test(id)){
          return  {
            code: `export default ${JSON.stringify(code)}`,
            map: null // provide source map if available
          }
        }
      }
    }
  }