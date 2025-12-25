import Image from "next/image";
import { notFound } from "next/navigation";
import { Calendar, Clock, Share2, Bookmark, Facebook, Twitter, Linkedin, Link2 } from "lucide-react";

const MOCK_ARTICLES = [
  {
    slug: "us-wants-to-sell-gm-soya-and-corn-to-india-farmers-wary",
    cover: "https://tds-images.thedailystar.net/sites/default/files/styles/big_202/public/images/2025/12/25/tarique.png",
    title: "US wants to sell GM soya and corn to India, farmers remain wary",
    subtitle: "Growing concerns over food sovereignty as trade negotiations intensify between nations",
    category: "World",
    author: "Sarah Mitchell",
    authorImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
    date: "July 22, 2025",
    readTime: "8 min read",
    content: `
      <figure>
        <img 
          src="https://images.unsplash.com/photo-1592928302636-1c5d1f9c1b9a"
          alt="Farmers working in a corn field"
        />
        <figcaption>
          Indian farmers harvesting crops amid growing debate over genetically modified seeds.
        </figcaption>
      </figure>

      <p>
        The United States is intensifying efforts to expand exports of genetically
        modified (GM) soya and corn to India, positioning the move as a solution
        to food security and rising global demand. However, the proposal has met
        stiff resistance from Indian farmers and agricultural experts.
      </p>

      <p>
        Many farmers fear that widespread adoption of GM crops could increase
        dependency on foreign seed suppliers, disrupt traditional farming
        practices, and pose long-term environmental risks.
      </p>

      <h2>Farmers express deep concerns</h2>

      <p>
        Farmer unions across several Indian states have warned that genetically
        modified seeds may undermine local biodiversity and force farmers into
        costly annual seed purchases.
      </p>

      <blockquote>
        "Once we lose control over our seeds, we lose control over our future,"
        said Ramesh Patel, a farmer from Maharashtra.
      </blockquote>

      <p>
        Critics argue that multinational corporations benefit disproportionately,
        while small-scale farmers shoulder the economic and ecological risks.
      </p>

      <h2>Government and trade pressure</h2>

      <p>
        Trade officials say discussions are ongoing as part of broader bilateral
        negotiations. The U.S. government maintains that GM crops are safe and
        can significantly boost agricultural productivity.
      </p>

      <ul>
        <li>India currently restricts most GM food crop imports</li>
        <li>Only GM cotton is commercially grown in the country</li>
        <li>Public opinion remains divided on biotech agriculture</li>
      </ul>

      <p>
        Agricultural scientists in India have called for extensive independent
        trials before any policy shift, stressing that local soil conditions and
        climate variability must be considered.
      </p>

      <h2>What happens next?</h2>

      <p>
        While no immediate policy changes are expected, analysts believe pressure
        will continue as global food supply chains become more strained. For now,
        Indian farmers remain cautious, insisting that food sovereignty must take
        precedence over trade ambitions.
      </p>

      <p>
        As the debate unfolds, the issue highlights a larger global tension
        between technological innovation and traditional agricultural systems.
      </p>
    `,
    tags: ["Agriculture", "Trade", "India", "Food Security"],  
    relatedArticles: [
      {
        id: 1,
        title: "Climate Change Impact on Global Food Production",
        image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=400",
        category: "Environment"
      },
      {
        id: 2,
        title: "India's Agricultural Reform: A New Era",
        image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad649?w=400",
        category: "Economy"
      },
      {
        id: 3,
        title: "The Future of Sustainable Farming",
        image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=400",
        category: "Technology"
      }
    ]
  },
];

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ category: string; slug: string }>;
}) {
  const { category, slug } = await params;
  const article = MOCK_ARTICLES.find((a) => a.slug === slug);

  if (!article) return notFound();

  return (
    <main className="min-h-screen">
      {/* Main Content Area */}
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Article Content */}
          <div className="lg:col-span-8">
            {/* Hero Section */}
            <div className="py-6">
              {/* Category Badge */}
              <span className="inline-block px-3 py-1 bg-red-600 text-white text-xs font-bold uppercase tracking-wide mb-4">
                {category}
              </span>

              {/* Title */}
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
                {article.title}
              </h1>

              {/* Subtitle */}
              <p className="text-xl text-gray-600 leading-relaxed mb-6">
                {article.subtitle}
              </p>

              {/* Meta Information */}
              <div className="flex flex-wrap items-center gap-6 pb-6 border-b border-gray-200">
                {/* Author */}
                <div className="flex items-center gap-3">
                  <Image
                    src={article.authorImage}
                    alt={article.author}
                    width={48}
                    height={48}
                    className="rounded-full"
                  />
                  <div>
                    <p className="text-sm font-semibold text-gray-900">{article.author}</p>
                    <p className="text-xs text-gray-500">Senior Correspondent</p>
                  </div>
                </div>

                {/* Date & Time */}
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4" />
                    <span>{article.date}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4" />
                    <span>{article.readTime}</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3 pt-6">
                <button className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white text-sm font-semibold hover:bg-gray-800 transition-colors">
                  <Share2 className="w-4 h-4" />
                  Share
                </button>
                <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 text-gray-700 text-sm font-semibold hover:bg-gray-50 transition-colors">
                  <Bookmark className="w-4 h-4" />
                  Save
                </button>
              </div>
            </div>

            {/* Cover Image */}
            <div className="relative w-full h-[400px] lg:h-[500px] overflow-hidden">
              <Image
                src={article.cover}
                alt="cover image"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 66vw"
                priority
              />
            </div>

            {/* Article Body */}
            <div className="py-6">
              <article
                className="prose prose-lg prose-neutral max-w-none
                    prose-headings:font-bold prose-headings:text-gray-900
                    prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4
                    prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-6
                    prose-blockquote:border-l-4 prose-blockquote:border-red-600 prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-gray-700
                    prose-ul:list-disc prose-ul:pl-6 prose-ul:space-y-2
                    prose-li:text-gray-700
                    prose-img:w-full
                    prose-figcaption:text-center prose-figcaption:text-sm prose-figcaption:text-gray-500 prose-figcaption:mt-3"
                dangerouslySetInnerHTML={{ __html: article.content }}
              />

              {/* Tags */}
              <div className="mt-10 pt-8 border-t border-gray-200">
                <h4 className="text-sm font-semibold text-gray-900 mb-3">Tags</h4>
                <div className="flex flex-wrap gap-2">
                  {article.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 bg-gray-100 text-gray-700 text-sm hover:bg-gray-200 cursor-pointer transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Share Section */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <h4 className="text-sm font-semibold text-gray-900 mb-4">Share this article</h4>
                <div className="flex gap-3">
                  <button className="p-3 bg-blue-600 text-white hover:bg-blue-700 transition-colors">
                    <Facebook className="w-5 h-5" />
                  </button>
                  <button className="p-3 bg-sky-500 text-white hover:bg-sky-600 transition-colors">
                    <Twitter className="w-5 h-5" />
                  </button>
                  <button className="p-3 bg-blue-700 text-white hover:bg-blue-800 transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </button>
                  <button className="p-3 bg-gray-200 text-gray-700 hover:bg-gray-300 transition-colors">
                    <Link2 className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Author Info Card */}
              <div className="mt-8">
                <div className="bg-gray-50 border border-gray-200 p-10">
                  <div className="flex items-start gap-8">
                    <div className="relative flex-shrink-0">
                      <div className="w-28 h-28 rounded-full overflow-hidden ring-4 ring-white">
                        <Image
                          src={article.authorImage}
                          alt={article.author}
                          width={112}
                          height={112}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="mb-1">
                        <h3 className="text-2xl font-bold text-gray-900 mb-1">{article.author}</h3>
                        <p className="text-sm font-semibold text-red-600 uppercase tracking-wide">Senior Correspondent</p>
                      </div>

                      <p className="text-gray-700 leading-relaxed mt-4 mb-5">
                        Award-winning journalist covering international trade and agricultural policy with over 10 years of experience in investigative reporting and global affairs.
                      </p>

                      <div className="flex items-center gap-8">
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                          <span className="font-semibold">127 Articles Published</span>
                        </div>

                        <div className="flex items-center gap-4">
                          <span className="text-sm text-gray-500 font-medium">Follow:</span>
                          <a href="#" className="text-gray-500 hover:text-gray-900 transition-colors">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                            </svg>
                          </a>
                          <a href="#" className="text-gray-500 hover:text-gray-900 transition-colors">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                            </svg>
                          </a>
                          <a href="#" className="text-gray-500 hover:text-gray-900 transition-colors">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Next and Previous News Navigation */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Previous Article */}
                  <a href="#" className="group flex gap-4 p-5 border border-gray-200 hover:border-red-600 transition-all hover:shadow-md">
                    <div className="flex-shrink-0">
                      <svg className="w-6 h-6 text-gray-400 group-hover:text-red-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Previous Article</p>
                      <h4 className="text-base font-bold text-gray-900 group-hover:text-red-600 transition-colors line-clamp-2">
                        Global Supply Chain Crisis: How Major Ports Are Adapting to New Trade Realities
                      </h4>
                      <p className="text-sm text-gray-600 mt-2">December 23, 2024</p>
                    </div>
                  </a>

                  {/* Next Article */}
                  <a href="#" className="group flex gap-4 p-5 border border-gray-200 hover:border-red-600 transition-all hover:shadow-md">
                    <div className="flex-1 min-w-0 text-right">
                      <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Next Article</p>
                      <h4 className="text-base font-bold text-gray-900 group-hover:text-red-600 transition-colors line-clamp-2">
                        Climate Change Impact: Agriculture Industry Faces Unprecedented Challenges in 2025
                      </h4>
                      <p className="text-sm text-gray-600 mt-2">December 25, 2024</p>
                    </div>
                    <div className="flex-shrink-0">
                      <svg className="w-6 h-6 text-gray-400 group-hover:text-red-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </a>
                </div>
              </div>

              {/* Related News Section */}
              <div className="mt-12 pt-12 border-t border-gray-200">
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Related News</h3>
                  <p className="text-gray-600">More stories you might be interested in</p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  {article.relatedArticles.map((related) => (
                    <a key={related.id} href="#" className="group">
                      <div className="relative h-48 overflow-hidden mb-4">
                        <Image
                          src={related.image}
                          alt={related.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                          sizes="(max-width: 768px) 100vw, 33vw"
                        />
                        <div className="absolute top-3 left-3">
                          <span className="inline-block px-2 py-1 bg-red-600 text-white text-xs font-bold uppercase">
                            {related.category}
                          </span>
                        </div>
                      </div>

                      <h4 className="text-lg font-bold text-gray-900 leading-tight mb-2 group-hover:text-red-600 transition-colors line-clamp-2">
                        {related.title}
                      </h4>

                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Clock className="w-4 h-4" />
                        <span>5 min read</span>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-4 py-6">
            <div className="sticky top-24 space-y-6">
              {/* Top News */}
              <div className="bg-red-600 p-6 text-white">
                <h3 className="text-sm font-bold uppercase tracking-wide mb-4 flex items-center gap-2">
                  <span className="w-1 h-4 bg-white"></span>
                  Top News
                </h3>
                <div className="space-y-4">
                  <div className="pb-4 border-b border-red-500 last:border-0 last:pb-0 cursor-pointer hover:opacity-80 transition-opacity">
                    <span className="text-xs font-semibold opacity-90">BREAKING</span>
                    <h4 className="text-sm font-bold leading-tight mt-1">
                      Global Climate Summit Reaches Historic Agreement
                    </h4>
                  </div>
                  <div className="pb-4 border-b border-red-500 last:border-0 last:pb-0 cursor-pointer hover:opacity-80 transition-opacity">
                    <span className="text-xs font-semibold opacity-90">POLITICS</span>
                    <h4 className="text-sm font-bold leading-tight mt-1">
                      New Trade Regulations Impact International Markets
                    </h4>
                  </div>
                  <div className="pb-4 border-b border-red-500 last:border-0 last:pb-0 cursor-pointer hover:opacity-80 transition-opacity">
                    <span className="text-xs font-semibold opacity-90">ECONOMY</span>
                    <h4 className="text-sm font-bold leading-tight mt-1">
                      Central Bank Announces Policy Changes
                    </h4>
                  </div>
                </div>
              </div>

              {/* Most Popular */}
              <div className="bg-white border border-gray-200 p-6">
                <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-4">
                  Most Popular
                </h3>
                <div className="space-y-4">
                  {[
                    { num: 1, title: "Tech Giants Face New Regulations in Europe", category: "Technology" },
                    { num: 2, title: "Scientists Discover Breakthrough in Renewable Energy", category: "Science" },
                    { num: 3, title: "Global Markets React to Economic Forecast", category: "Business" },
                    { num: 4, title: "Health Officials Address Rising Concerns", category: "Health" },
                    { num: 5, title: "Education Reform Sparks National Debate", category: "Education" }
                  ].map((item) => (
                    <div key={item.num} className="flex gap-3 group cursor-pointer">
                      <span className="text-2xl font-bold text-gray-300 group-hover:text-red-600 transition-colors flex-shrink-0">
                        {item.num}
                      </span>
                      <div className="flex-1 min-w-0">
                        <span className="text-xs font-semibold text-gray-500 uppercase">
                          {item.category}
                        </span>
                        <h4 className="text-sm font-semibold text-gray-900 leading-tight mt-1 group-hover:underline">
                          {item.title}
                        </h4>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Related Articles */}
              <div className="bg-white border border-gray-200 p-6">
                <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-4">
                  Related Stories
                </h3>
                <div className="space-y-4">
                  {article.relatedArticles.map((related) => (
                    <div key={related.id} className="group cursor-pointer">
                      <div className="flex gap-3">
                        <div className="relative w-24 h-20 flex-shrink-0 overflow-hidden">
                          <Image
                            src={related.image}
                            alt={related.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                            sizes="96px"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <span className="text-xs font-semibold text-gray-500 uppercase">
                            {related.category}
                          </span>
                          <h4 className="text-sm font-semibold text-gray-900 leading-tight mt-1 line-clamp-2 group-hover:underline">
                            {related.title}
                          </h4>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Trending Topics */}
              <div className="bg-white border border-gray-200 p-6">
                <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-4">
                  Trending Topics
                </h3>
                <div className="flex flex-wrap gap-2">
                  {["Climate Change", "Technology", "Elections", "Healthcare", "Education", "Economy", "Innovation", "Policy"].map((topic) => (
                    <span
                      key={topic}
                      className="px-3 py-1.5 bg-gray-100 text-gray-700 text-xs font-medium hover:bg-red-600 hover:text-white cursor-pointer transition-colors"
                    >
                      #{topic}
                    </span>
                  ))}
                </div>
              </div>

              {/* Newsletter Subscription */}
              <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-8 text-white relative overflow-hidden">
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-red-600 rounded-full opacity-10 -mr-16 -mt-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-red-600 rounded-full opacity-10 -ml-12 -mb-12"></div>

                <div className="relative z-10">
                  {/* Icon */}
                  <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold mb-2">Stay Informed</h3>
                  <p className="text-sm text-gray-300 mb-6 leading-relaxed">
                    Get the latest news and exclusive stories delivered to your inbox every morning.
                  </p>

                  {/* Input Group */}
                  <div className="space-y-3">
                    <input
                      type="email"
                      placeholder="Enter your email address"
                      className="w-full px-4 py-3 bg-white text-gray-900 text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 transition-shadow"
                    />
                    <button className="w-full px-4 py-3 bg-red-600 text-white text-sm font-bold uppercase tracking-wide hover:bg-red-700 active:bg-red-800 transition-all duration-200 transform hover:scale-[1.02]">
                      Subscribe Now
                    </button>
                  </div>

                  {/* Privacy Notice */}
                  <p className="text-xs text-gray-400 mt-4 leading-relaxed">
                    By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
                  </p>

                  {/* Stats/Trust Indicators */}
                  <div className="flex items-center gap-4 mt-6 pt-6 border-t border-gray-700">
                    <div>
                      <p className="text-lg font-bold text-white">50K+</p>
                      <p className="text-xs text-gray-400">Subscribers</p>
                    </div>
                    <div className="w-px h-8 bg-gray-700"></div>
                    <div>
                      <p className="text-lg font-bold text-white">Daily</p>
                      <p className="text-xs text-gray-400">Updates</p>
                    </div>
                    <div className="w-px h-8 bg-gray-700"></div>
                    <div>
                      <p className="text-lg font-bold text-white">Free</p>
                      <p className="text-xs text-gray-400">Forever</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}