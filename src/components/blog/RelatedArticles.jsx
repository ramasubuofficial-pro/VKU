import React from 'react';
import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import BlogCard from './BlogCard';

const RelatedArticles = ({ currentPost, allPosts }) => {
  // Filter out the current post
  const otherPosts = allPosts.filter(post => post.id !== currentPost.id);

  // Try to find posts in the same category
  let related = otherPosts.filter(post => post.category === currentPost.category);

  // If we have less than 3, fill with the most recent other posts
  if (related.length < 3) {
    const remainingNeeded = 3 - related.length;
    const relatedIds = new Set(related.map(p => p.id));
    
    const fillPosts = otherPosts
      .filter(post => !relatedIds.has(post.id))
      .slice(0, remainingNeeded);
      
    related = [...related, ...fillPosts];
  } else {
    // If we have more than 3, just take the first 3
    related = related.slice(0, 3);
  }

  if (related.length === 0) return null;

  return (
    <div className="py-24 bg-vku-background border-t border-vku-border">
      <Container className="max-w-[1200px]">
        <div className="mb-12">
          <SectionHeading 
            title="Related Insights"
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {related.map(post => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default RelatedArticles;
