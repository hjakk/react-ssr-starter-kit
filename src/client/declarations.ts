declare module '*.png'
declare module '*.jpg'

declare module '*.css' {
  const css: { [key: string]: string }
  export default css
}

declare module '*.styl' {
  const css: { [key: string]: string }
  export default css
}

declare module '*.json' {
  const json: { [key: string]: any }
  export default json
}
