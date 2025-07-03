
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Calendar, User, ArrowRight } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      title: "The Future of Influencer Marketing Analytics",
      excerpt: "Discover how advanced analytics are revolutionizing the way brands approach influencer partnerships.",
      date: "March 15, 2024",
      author: "WEBORTEX Team",
      category: "Analytics"
    },
    {
      title: "Maximizing ROI in Influencer Campaigns",
      excerpt: "Learn proven strategies to optimize your influencer marketing budget and achieve better returns.",
      date: "March 10, 2024",
      author: "WEBORTEX Team",
      category: "Strategy"
    },
    {
      title: "Understanding Audience Demographics",
      excerpt: "Deep dive into audience analysis and how it can transform your campaign targeting.",
      date: "March 5, 2024",
      author: "WEBORTEX Team",
      category: "Insights"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#1a1a2e] to-[#16213e] text-white">
      <Header />
      
      <main className="pt-24 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#5C4D9B] to-[#00d4ff] bg-clip-text text-transparent">
              Influfluence Blog
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Insights, strategies, and trends in influencer marketing analytics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article key={index} className="glass rounded-2xl p-6 hover:border-[#5C4D9B]/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className="mb-4">
                  <span className="text-xs font-semibold text-[#5C4D9B] bg-[#5C4D9B]/10 px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>
                
                <h2 className="text-xl font-bold text-white mb-3 hover:text-[#5C4D9B] transition-colors cursor-pointer">
                  {post.title}
                </h2>
                
                <p className="text-gray-400 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                  </div>
                </div>
                
                <button className="flex items-center space-x-2 text-[#5C4D9B] hover:text-[#00d4ff] transition-colors font-medium">
                  <span>Read More</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </article>
            ))}
          </div>

          <div className="text-center mt-16">
            <div className="glass rounded-2xl p-8 max-w-2xl mx-auto">
              <h2 className="text-2xl font-bold text-white mb-4">Stay Updated</h2>
              <p className="text-gray-300 mb-6">
                Subscribe to our newsletter for the latest insights in influencer marketing analytics.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 bg-[#0a0a0a]/50 border border-[#3B2F63] rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#5C4D9B] transition-colors"
                />
                <button className="bg-gradient-to-r from-[#5C4D9B] to-[#3B2F63] text-white px-6 py-2 rounded-lg hover:from-[#4a3f85] hover:to-[#2f2550] transition-all duration-300">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Blog;
