
const slugify = (text) => {
  return text.toString().toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');
};

const initialBlogPosts = [
  {
    id: 1,
    title: 'Tax Planning Strategies for Small Businesses',
    excerpt: 'Discover effective tax planning strategies that can help your small business save money and stay compliant.',
    date: 'March 15, 2024',
    category: 'Tax Planning',
    author: 'Asante CPA',
  },
  {
    id: 2,
    title: 'Understanding HST/GST Requirements',
    excerpt: 'A comprehensive guide to HST/GST registration, filing requirements, and compliance for Canadian businesses.',
    date: 'March 10, 2024',
    category: 'Compliance',
    author: 'Asante CPA',
  },
  {
    id: 3,
    title: 'Cash Flow Management Best Practices',
    excerpt: 'Learn how to optimize your cash flow management to ensure your business stays financially healthy.',
    date: 'March 5, 2024',
    category: 'Financial Management',
    author: 'Asante CPA',
  },
  {
    id: 4,
    title: 'Year-End Tax Preparation Checklist',
    excerpt: 'Essential checklist to ensure you have everything ready for a smooth year-end tax preparation process.',
    date: 'February 28, 2024',
    category: 'Tax Preparation',
    author: 'Asante CPA',
  }
];

export function getBlogPosts() {
  const posts = localStorage.getItem('blogPosts');
  if (posts) {
    return JSON.parse(posts);
  }
  // If nothing in localStorage, initialize it
  storeBlogPosts(initialBlogPosts);
  return initialBlogPosts.map(post => ({ ...post, slug: slugify(post.title) }));
}

export function storeBlogPosts(posts) {
  const postsWithSlugs = posts.map(post => ({ ...post, slug: slugify(post.title) }));
  localStorage.setItem('blogPosts', JSON.stringify(postsWithSlugs));
}

export function getPostBySlug(slug) {
  const posts = getBlogPosts();
  // We need to find the full post data which is now in blogData.jsx
  // This function will now be more complex. Let's simplify for now.
  // The full content is in blogData.jsx, so we can't get it from here.
  // The logic in BlogPostPage will need to be updated.
  return posts.find(post => post.slug === slug);
}
