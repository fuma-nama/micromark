/** @param {string} namespace */
const isDebugFunction = (namespace) => {
  if (typeof process !== 'undefined' && process.env.DEBUG) {
    /** @type {string[]} */
    const namespaces = process.env.DEBUG.trim().split(/\s+|,/g).filter(Boolean)

    let v = false
    for (const item of namespaces) {
      switch (item) {
        case '*':
        case namespace:
          v = true
          break
        case `-${namespace}`:
          v = false
          break
      }
    }
    return v
  }

  return false
}

export const IS_DEBUG = isDebugFunction('micromark')
