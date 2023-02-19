function classnames(...names: (string | undefined)[]) {
  return names.filter(Boolean).join(' ')
}
export default classnames

function scopedClassMarker (prefix: string) {
  return function (name?: string) {
    return [prefix, name].filter(Boolean).join('-')
  }
}

export {
  scopedClassMarker
}