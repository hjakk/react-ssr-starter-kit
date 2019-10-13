export default (...args: any[]): string => {
  let str = '', i = -1
  while (++i < args.length) {
    if (!args[i]) continue
    if (str) str += ' '
    str += args[i]
  }
  return str
}
