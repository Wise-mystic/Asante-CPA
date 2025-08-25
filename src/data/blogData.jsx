import React from 'react';

const slugify = (text) => {
  return text.toString().toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');
};

export const blogPosts = [
  {
    id: 1,
    title: 'Tax Planning Strategies for Small Businesses',
    slug: 'tax-planning-strategies-for-small-businesses',
    excerpt: 'Discover effective tax planning strategies that can help your small business save money and stay compliant.',
    date: 'March 15, 2024',
    category: 'Tax Planning',
    author: 'Asante CPA',
    content: (
      <div className="prose lg:prose-xl max-w-none text-gray-700">
        <p className="lead">In today's competitive business landscape, effective tax planning is not just a year-end activity; it's a year-round strategic imperative. For small businesses, smart tax planning can lead to significant savings, improved cash flow, and enhanced financial stability. Here are some key strategies to consider.</p>
        
        <h2>1. Choose the Right Business Structure</h2>
        <p>The structure of your business—sole proprietorship, partnership, or corporation—has significant tax implications. A corporation, for example, has a lower tax rate on its first $500,000 of active business income. We can help you determine the most advantageous structure for your specific situation.</p>

        <h2>2. Maximize Eligible Deductions</h2>
        <p>Keeping meticulous records of all your business expenses is crucial. Many business owners overlook eligible deductions, such as:</p>
        <ul>
          <li>Home office expenses (if you qualify)</li>
          <li>Vehicle expenses for business travel</li>
          <li>Salaries paid to family members (must be reasonable for the work performed)</li>
          <li>Capital assets depreciation (Capital Cost Allowance - CCA)</li>
        </ul>

        <h2>3. Income Splitting Opportunities</h2>
        <p>Income splitting with family members in lower tax brackets can be an effective strategy, particularly for incorporated businesses. Paying reasonable salaries or dividends to a spouse or adult children can reduce the overall family tax burden. However, the Tax on Split Income (TOSI) rules must be carefully navigated.</p>

        <h2>4. Deferring Income and Accelerating Expenses</h2>
        <p>If you anticipate being in a lower tax bracket next year, you might consider deferring income. This could involve delaying invoicing for work completed late in the year. Conversely, if it makes sense for your tax situation, you can accelerate expenses by making purchases or paying for services before the year-end.</p>
        
        <blockquote className="border-l-4 border-primary-green pl-6 italic">
          "The best time to think about your taxes is all year long, not just when the filing deadline looms. Proactive planning is the key to unlocking savings."
        </blockquote>

        <h2>5. Invest in Registered Retirement Savings Plans (RRSPs)</h2>
        <p>Contributing to an RRSP is a classic tax-deferral strategy. Contributions are tax-deductible, reducing your taxable income for the year. For business owners, this can be a powerful tool for both retirement planning and tax management.</p>

        <p>Effective tax planning requires a deep understanding of the ever-changing tax laws and a proactive approach. Contact Asante CPA today to develop a customized tax strategy that aligns with your business goals.</p>
      </div>
    )
  },
  {
    id: 2,
    title: 'Understanding HST/GST Requirements',
    slug: 'understanding-hst-gst-requirements',
    excerpt: 'A comprehensive guide to HST/GST registration, filing requirements, and compliance for Canadian businesses.',
    date: 'March 10, 2024',
    category: 'Compliance',
    author: 'Asante CPA',
    content: (
      <div className="prose lg:prose-xl max-w-none text-gray-700">
        <p className="lead">The Harmonized Sales Tax (HST) and Goods and Services Tax (GST) are a critical part of doing business in Canada. Navigating the requirements can be complex, but understanding them is essential for compliance and avoiding penalties.</p>
        
        <h2>When Do You Need to Register?</h2>
        <p>You are required to register for a GST/HST account if your worldwide revenues from taxable supplies exceed $30,000 in a single calendar quarter or over the last four consecutive calendar quarters. This is known as the "small supplier" threshold. It's often beneficial to register voluntarily even if you are below the threshold, as it allows you to claim Input Tax Credits (ITCs).</p>

        <h2>Collecting and Remitting HST/GST</h2>
        <p>Once registered, you must charge GST/HST on all your taxable supplies of goods and services. The rate varies by province. You are responsible for collecting this tax from your customers and remitting it to the Canada Revenue Agency (CRA).</p>

        <h2>Input Tax Credits (ITCs)</h2>
        <p>The good news is that you can recover the GST/HST you pay on your business expenses. These are called Input Tax Credits. You claim ITCs on your GST/HST return, which reduces the amount of tax you need to remit. Keeping detailed receipts and records is essential for claiming all eligible ITCs.</p>
        
        <blockquote className="border-l-4 border-primary-green pl-6 italic">
          "Proper HST/GST management is not just about compliance; it's about optimizing your cash flow by effectively claiming Input Tax Credits."
        </blockquote>

        <h2>Filing Deadlines and Reporting Periods</h2>
        <p>Your reporting period (monthly, quarterly, or annually) is determined by your annual revenue. The CRA will assign you a reporting period when you register. Filing and remitting on time is crucial to avoid interest and penalties.</p>

        <p>Managing HST/GST can be a significant administrative burden. Asante CPA can help you with registration, filing, and ensuring you are maximizing your ITC claims while remaining fully compliant. Contact us for professional assistance with your HST/GST obligations.</p>
      </div>
    )
  },
  {
    id: 3,
    title: 'Cash Flow Management Best Practices',
    slug: 'cash-flow-management-best-practices',
    excerpt: 'Learn how to optimize your cash flow management to ensure your business stays financially healthy.',
    date: 'March 5, 2024',
    category: 'Financial Management',
    author: 'Asante CPA',
    content: (
      <div className="prose lg:prose-xl max-w-none text-gray-700">
        <p className="lead">Cash is the lifeblood of any business. A profitable business can fail if it doesn't have enough cash to meet its obligations. Effective cash flow management is therefore critical for survival and growth.</p>

        <h2>1. Prepare a Cash Flow Projection</h2>
        <p>You can't manage what you don't measure. A cash flow projection forecasts the cash coming into and going out of your business over a specific period. This tool helps you anticipate potential shortfalls and make informed decisions.</p>

        <h2>2. Manage Your Accounts Receivable</h2>
        <p>The faster you collect money from your customers, the better your cash flow. Implement clear invoicing practices, offer multiple payment options, and have a system for following up on overdue invoices.</p>
        
        <h2>3. Manage Your Accounts Payable</h2>
        <p>While you want to collect receivables quickly, you may want to delay paying your own bills as long as possible without incurring penalties or damaging supplier relationships. Negotiate favorable payment terms with your suppliers.</p>

        <blockquote className="border-l-4 border-primary-green pl-6 italic">
          "Profit is an opinion, cash is a fact. Mastering your cash flow is fundamental to building a resilient business."
        </blockquote>

        <h2>4. Maintain a Cash Reserve</h2>
        <p>Unexpected expenses and opportunities will arise. Having a cash reserve (or access to a line of credit) provides a crucial buffer to navigate these situations without disrupting your operations.</p>
        
        <h2>5. Monitor Your Inventory</h2>
        <p>For product-based businesses, inventory ties up cash. Implement inventory management systems to ensure you have enough stock to meet demand without over-investing in products that aren't selling.</p>

        <p>Strong cash flow management provides the financial flexibility to seize opportunities and weather economic downturns. Asante CPA can help you implement best practices and tools to take control of your cash flow. Reach out to us for a consultation.</p>
      </div>
    )
  },
  {
    id: 4,
    title: 'Year-End Tax Preparation Checklist',
    slug: 'year-end-tax-preparation-checklist',
    excerpt: 'Essential checklist to ensure you have everything ready for a smooth year-end tax preparation process.',
    date: 'February 28, 2024',
    category: 'Tax Preparation',
    author: 'Asante CPA',
    content: (
      <div className="prose lg:prose-xl max-w-none text-gray-700">
        <p className="lead">Year-end can be a stressful time for business owners. A systematic approach to tax preparation can make the process smoother and ensure you don't miss any important deductions. Here's a checklist to guide you.</p>

        <h2>1. Gather Your Financial Statements</h2>
        <p>Ensure your bookkeeping is up-to-date and accurate. You will need your core financial statements:</p>
        <ul>
          <li>Balance Sheet</li>
          <li>Income Statement (Profit and Loss)</li>
          <li>Statement of Cash Flows</li>
        </ul>

        <h2>2. Reconcile Your Bank Accounts and Credit Cards</h2>
        <p>All bank accounts, credit card statements, and lines of credit should be reconciled. This ensures that all transactions have been captured in your bookkeeping records.</p>
        
        <h2>3. Organize Your Expense Receipts</h2>
        <p>Categorize all your business expense receipts. Pay special attention to potentially large deductions like vehicle expenses, travel, meals and entertainment, and home office expenses. Ensure you have the required documentation to support your claims.</p>

        <blockquote className="border-l-4 border-primary-green pl-6 italic">
          "Organization is the key to a stress-free tax season. The work you do before meeting with your accountant is invaluable."
        </blockquote>

        <h2>4. Review Your Payroll Records</h2>
        <p>If you have employees, ensure your payroll records are accurate. Verify that all salaries, wages, and benefits have been recorded correctly and that all payroll remittances were made on time. Prepare for T4 slip issuance.</p>

        <h2>5. Collect Information on Asset Purchases and Sales</h2>
        <p>Compile a list of all capital assets (like equipment, vehicles, or property) purchased or sold during the year. This information is needed to calculate the Capital Cost Allowance (CCA).</p>

        <h2>6. Consult with Your Accountant</h2>
        <p>Finally, schedule a meeting with your accountant. A professional can review your records, identify tax-saving opportunities, and ensure your return is filed accurately and on time.</p>

        <p>By following this checklist, you can approach tax season with confidence. If you need assistance with your year-end tax preparation, Asante CPA is here to help.</p>
      </div>
    )
  }
];

export function getBlogPosts() {
  const posts = localStorage.getItem('blogPosts');
  if (posts) {
    return JSON.parse(posts);
  }
  // If nothing in localStorage, initialize it
  storeBlogPosts(blogPosts);
  return blogPosts;
}

export function storeBlogPosts(posts) {
  const postsWithSlugs = posts.map(post => ({ ...post, slug: slugify(post.title) }));
  localStorage.setItem('blogPosts', JSON.stringify(postsWithSlugs));
}

export function getPostBySlug(slug) {
  const posts = getBlogPosts();
  return posts.find(post => post.slug === slug);
}
