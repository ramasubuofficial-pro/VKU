import React, { useState, useMemo } from 'react';
import Container from '../common/Container';
import BlogCard from './BlogCard';
import Button from '../ui/Button';
import { Search } from 'lucide-react';

const BlogListing = ({ posts, categories }) => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [visibleCount, setVisibleCount] = useState(6);

  // Filter and search logic
  const filteredPosts = useMemo(() => {
    return posts.filter(post => {
      // 1. Category Filter
      const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
      
      // 2. Search Filter (title or excerpt)
      const query = searchQuery.toLowerCase();
      const matchesSearch = 
        post.title.toLowerCase().includes(query) || 
        post.excerpt.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [posts, activeCategory, searchQuery]);

  const visiblePosts = filteredPosts.slice(0, visibleCount);
  const hasMore = visibleCount < filteredPosts.length;

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + 6);
  };

  return (
    <div className="py-24 bg-vku-background">
      <Container className="max-w-[1200px]">
        
        {/* Filters and Search Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
          
          {/* Category Filters (Horizontal Scroll on Mobile) */}
          <div className="w-full md:w-auto overflow-x-auto pb-2 md:pb-0 hide-scrollbar">
            <div className="flex gap-2">
              {categories.map((category) => {
                const isActive = activeCategory === category;
                return (
                  <button
                    key={category}
                    onClick={() => {
                      setActiveCategory(category);
                      setVisibleCount(6); // Reset pagination on filter change
                    }}
                    className={`whitespace-nowrap px-5 py-2 rounded-full text-sm font-semibold transition-colors duration-300 ${
                      isActive 
                        ? 'bg-vku-primary text-white' 
                        : 'bg-white text-gray-600 border border-gray-200 hover:border-vku-primary hover:text-vku-primary'
                    }`}
                  >
                    {category}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Search Input */}
          <div className="w-full md:w-72 relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-vku-primary/50 focus:border-vku-primary sm:text-sm transition-colors duration-300"
              placeholder="Search insights..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setVisibleCount(6); // Reset pagination on search change
              }}
            />
          </div>

        </div>

        {/* Blog Grid */}
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {visiblePosts.map((post) => (
              <div key={post.id} className="h-full">
                <BlogCard post={post} />
              </div>
            ))}
          </div>
        ) : (
          <div className="py-20 text-center bg-white rounded-2xl border border-gray-100">
            <Search className="h-12 w-12 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-700 mb-2">No articles found</h3>
            <p className="text-gray-500">
              We couldn't find any articles matching your current filters. Try adjusting your search or category.
            </p>
            <button 
              onClick={() => {
                setActiveCategory('All');
                setSearchQuery('');
              }}
              className="mt-6 text-vku-primary font-semibold hover:underline"
            >
              Clear all filters
            </button>
          </div>
        )}

        {/* Load More Button */}
        {hasMore && (
          <div className="mt-16 text-center">
            <Button 
              variant="outline" 
              onClick={handleLoadMore}
              className="px-8 py-3"
            >
              Load More Articles
            </Button>
          </div>
        )}

      </Container>
    </div>
  );
};

export default BlogListing;
