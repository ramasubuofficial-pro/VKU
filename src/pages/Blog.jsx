import React, { useMemo } from 'react';
import { blogPosts, blogCategories } from '../data/blog';

import BlogHero from '../components/blog/BlogHero';
import FeaturedBlog from '../components/blog/FeaturedBlog';
import BlogListing from '../components/blog/BlogListing';
const Blog = () => {
  // Memoize the separation of featured vs normal posts
  const { featuredPost, regularPosts } = useMemo(() => {
    let featured = blogPosts.find(post => post.featured);
    
    // Fallback to the first post if none are marked featured
    if (!featured && blogPosts.length > 0) {
      featured = blogPosts[0];
    }

    // Filter out the featured post from the listing
    const regular = blogPosts.filter(post => post.id !== featured?.id);

    return { featuredPost: featured, regularPosts: regular };
  }, []);

  return (
    <div className="pt-20"> {/* PT-20 for fixed header */}
      <div className="border-b border-vku-border">
        <BlogHero />
      </div>
      
      {featuredPost && (
        <FeaturedBlog post={featuredPost} />
      )}
      
      <BlogListing 
        posts={regularPosts} 
        categories={blogCategories} 
      />
      
    </div>
  );
};

export default Blog;
