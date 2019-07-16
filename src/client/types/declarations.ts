declare module '*.css' {
  const css: { [key: string]: string }
  export default css
}

declare module '*.styl' {
  const css: { [key: string]: string }
  export default css
}

// declare module '*/components' {
//   const components: { [key: string]: React.ReactNode }
//   export default components
// }
