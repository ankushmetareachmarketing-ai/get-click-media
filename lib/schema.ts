import type { BlogPost, FaqItem, HowTo } from './blogs'

const BASE_URL = 'https://getclickmedia.com'

export function articleSchema(post: BlogPost) {
  const imageUrl = post.image.startsWith('http') ? post.image : `${BASE_URL}${post.image}`
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    url: `${BASE_URL}/blog/${post.slug}`,
    datePublished: post.publishedDate,
    dateModified: post.updatedDate ?? post.publishedDate,
    image: imageUrl,
    author: { '@type': 'Person', name: post.author },
    publisher: {
      '@type': 'Organization',
      name: 'Get Click Media',
      logo: { '@type': 'ImageObject', url: `${BASE_URL}/images/gcm-logo.png` },
    },
    keywords: post.keywords.join(', '),
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${BASE_URL}/blog/${post.slug}` },
  }
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

export function faqSchema(faqs: FaqItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  }
}

export function howToSchema(post: BlogPost) {
  const howTo = post.howTo as HowTo
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: post.title,
    description: post.description,
    ...(howTo.totalTime ? { totalTime: howTo.totalTime } : {}),
    step: howTo.steps.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.name,
      text: step.text,
    })),
  }
}
