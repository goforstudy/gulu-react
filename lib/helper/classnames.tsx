function classnames(...names: (string | undefined)[]) {
  return names.filter(Boolean).join(' ')
}
export default classnames

interface Options {
  extra: String | undefined
}

interface ClassToggles {
  [K: string]: boolean
}

function scopedClassMarker(prefix: string) {
  return function (name?: string | ClassToggles, options?: Options) {
    let namesObject =
      typeof name === 'string'
        ? { [name]: name }
        : name === undefined
        ? ''
        : name
    return Object.entries(namesObject)
      .filter((kv) => kv[1] !== false)
      .map((kv) => kv[0])
      .map((name) => [prefix, name].filter(Boolean).join('-'))
      .concat([(options && (options.extra as string)) || ''])
      .join(' ')
      .trim()
  }
}

export { scopedClassMarker }
