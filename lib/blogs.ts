import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export interface FaqItem {
  question: string
  answer: string
}

export interface BlogFrontmatter {
  title: string
  description: string
  slug: string
  image: string
  author: string
  publishedDate: string
  updatedDate?: string
  category: string
  keywords: string[]
  faq?: FaqItem[]
}

export interface TocItem {
  id: string
  text: string
  level: 2 | 3
}

export interface BlogPost extends BlogFrontmatter {
  content: string
  readingTime: string
  toc: TocItem[]
}

const BLOGS_DIR = path.join(process.cwd(), 'content/blogs')

const CATEGORY_STYLES: Record<string, string> = {
  'Bulk SMS': 'bg-blue-50 text-blue-700 border-blue-100',
  WhatsApp: 'bg-green-50 text-green-700 border-green-100',
  'DLT Compliance': 'bg-orange-50 text-orange-700 border-orange-100',
  RCS: 'bg-purple-50 text-purple-700 border-purple-100',
  'AI & Automation': 'bg-indigo-50 text-indigo-700 border-indigo-100',
  Analytics: 'bg-cyan-50 text-cyan-700 border-cyan-100',
  Strategy: 'bg-rose-50 text-rose-700 border-rose-100',
}

export function getCategoryStyle(category: string): string {
  return CATEGORY_STYLES[category] ?? 'bg-slate-50 text-slate-700 border-slate-100'
}

export function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
}

export function categoryToSlug(category: string): string {
  return category
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/\s+/g, '-')
}

function calculateReadingTime(content: string): string {
  const wordCount = content.trim().split(/\s+/).length
  const minutes = Math.ceil(wordCount / 200)
  return `${minutes} min read`
}

function generateToc(content: string): TocItem[] {
  const headingRegex = /^(#{2,3})\s+(.+)$/gm
  const items: TocItem[] = []
  let match
  while ((match = headingRegex.exec(content)) !== null) {
    const level = match[1].length as 2 | 3
    const text = match[2].trim().replace(/[*_`~[\]]/g, '')
    const id = text
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .replace(/^-|-$/g, '')
    items.push({ id, text, level })
  }
  return items
}

export function getAllBlogSlugs(): string[] {
  if (!fs.existsSync(BLOGS_DIR)) return []
  return fs
    .readdirSync(BLOGS_DIR)
    .filter((f) => f.endsWith('.mdx'))
    .map((f) => f.replace('.mdx', ''))
}

export function getBlogPost(slug: string): BlogPost | null {
  const filePath = path.join(BLOGS_DIR, `${slug}.mdx`)
  if (!fs.existsSync(filePath)) return null

  const raw = fs.readFileSync(filePath, 'utf-8')
  const { data, content } = matter(raw)

  return {
    ...(data as BlogFrontmatter),
    content,
    readingTime: calculateReadingTime(content),
    toc: generateToc(content),
  }
}

export function getAllBlogPosts(): BlogPost[] {
  return getAllBlogSlugs()
    .map((slug) => getBlogPost(slug))
    .filter((p): p is BlogPost => p !== null)
    .sort(
      (a, b) =>
        new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime()
    )
}

export function getBlogsByCategory(category: string): BlogPost[] {
  return getAllBlogPosts().filter(
    (p) => p.category.toLowerCase() === category.toLowerCase()
  )
}

export function getRelatedPosts(
  currentSlug: string,
  category: string,
  count = 3
): BlogPost[] {
  return getAllBlogPosts()
    .filter((p) => p.slug !== currentSlug && p.category === category)
    .slice(0, count)
}

export function getPrevNextPosts(slug: string): {
  prev: BlogPost | null
  next: BlogPost | null
} {
  const posts = getAllBlogPosts()
  const index = posts.findIndex((p) => p.slug === slug)
  if (index === -1) return { prev: null, next: null }
  return {
    prev: index < posts.length - 1 ? posts[index + 1] : null,
    next: index > 0 ? posts[index - 1] : null,
  }
}

export function getAllCategories(): { name: string; slug: string; count: number }[] {
  const posts = getAllBlogPosts()
  const map = new Map<string, number>()
  for (const post of posts) {
    map.set(post.category, (map.get(post.category) ?? 0) + 1)
  }
  return Array.from(map.entries()).map(([name, count]) => ({
    name,
    slug: categoryToSlug(name),
    count,
  }))
}
