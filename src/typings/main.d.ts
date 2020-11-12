interface CaseStudy {
  name: string
  description: string
  linkSourceCode?: string
  linkLive?: string
  images: Array<{
    src: string
    description: string
  }>
}
