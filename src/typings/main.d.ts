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

interface Post {
  html: string
  excerpt: string
  frontmatter: {
    slug: string
    title: string
    tags: string[]
    date_published: string
    date_updated?: string
    date_published_formatted: string
    date_updated_formatted?: string
  }
  fields: {
    slug: string
    readingTime: {
      text: string
    }
  }
}