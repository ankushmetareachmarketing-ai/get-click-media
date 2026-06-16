import type { Metadata } from 'next'
import type { BlogPost } from './blogs'

const BASE_URL = 'https://getclickmedia.com'

export function blogPostMetadata(post: BlogPost): Metadata {
  const url = `${BASE_URL}/blog/${post.slug}`
  const imageUrl = post.image.startsWith('http') ? post.image : `${BASE_URL}${post.image}`

  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords.join(', '),
    authors: [{ name: post.author }],
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      url,
      siteName: 'Get Click Media',
      images: [{ url: imageUrl, width: 1200, height: 630, alt: post.title }],
      publishedTime: post.publishedDate,
      modifiedTime: post.updatedDate ?? post.publishedDate,
      authors: [post.author],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: [imageUrl],
    },
    alternates: { canonical: url },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
    },
  }
}

export function categoryPageMetadata(
  categoryName: string,
  categorySlug: string,
  count: number
): Metadata {
  const url = `${BASE_URL}/blog/category/${categorySlug}`
  return {
    title: `${categoryName} Articles | Get Click Media Blog`,
    description: `Browse ${count} expert ${categoryName} guides, tips, and strategies for Indian businesses.`,
    openGraph: {
      title: `${categoryName} Articles | Get Click Media Blog`,
      description: `Browse ${count} expert ${categoryName} guides for Indian businesses.`,
      type: 'website',
      url,
      siteName: 'Get Click Media',
    },
    twitter: {
      card: 'summary',
      title: `${categoryName} Articles | Get Click Media Blog`,
      description: `Browse ${count} expert ${categoryName} guides for Indian businesses.`,
    },
    alternates: { canonical: url },
    robots: { index: true, follow: true },
  }
}
