import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import Button from '../ui/Button';

const FeaturedBlog = ({ post }) => {
  if (!post) return null;

  return (
    <div className="py-24 bg-white border-b border-vku-border">
      <Container className="max-w-[1200px]">
        <div className="text-center mb-16">
          <SectionHeading 
            title="Featured Insight" 
            align="center"
          />
        </div>

        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center bg-vku-surface border border-vku-border rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-500">
          
          {/* Image */}
          <div className="w-full lg:w-1/2 aspect-[4/3] lg:aspect-auto lg:h-full relative overflow-hidden group">
            <img 
              src={post.image} 
              alt={post.title} 
              className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
          </div>

          {/* Content */}
          <div className="w-full lg:w-1/2 p-8 lg:p-12 lg:pl-0 flex flex-col justify-center">
            <div className="flex items-center gap-4 mb-6 text-sm font-bold uppercase tracking-wider">
              <span className="text-vku-primary bg-vku-primary-light/30 px-3 py-1 rounded-full">
                {post.category}
              </span>
              <span className="text-vku-text-muted">
                {post.date}
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight mb-6 hover:text-vku-primary transition-colors duration-300">
              <Link to={`/blog/${post.slug}`}>
                {post.title}
              </Link>
            </h2>
            
            <p className="text-lg text-gray-600 leading-relaxed mb-8 line-clamp-3">
              {post.excerpt}
            </p>

            <div>
              <Link to={`/blog/${post.slug}`}>
                <Button variant="primary">
                  Read Article
                </Button>
              </Link>
            </div>
          </div>

        </div>
      </Container>
    </div>
  );
};

export default FeaturedBlog;
