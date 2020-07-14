// Type shims for CSS modules

interface CSSModule {
  [className: string]: string
}

declare module '*.module.scss' {
  const cssModule: CSSModule
  export = cssModule
}

declare module '*.module.css' {
  const cssModule: CSSModule
  export = cssModule
}

// importing SVGs gives React Component
declare module '*.svg' {
  const SvgComponent: () => JSX.Element
  export default SvgComponent
}
