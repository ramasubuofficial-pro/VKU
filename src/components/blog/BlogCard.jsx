import React from 'react';
import { Link } from 'react-router-dom';

const BlogCard = ({ post }) => {
  return (
    <div className="group bg-white border border-vku-border rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full cursor-pointer">
      {/* Image Container */}
      <div className="w-full aspect-[16/9] relative overflow-hidden">
        <img 
          src={post.image} 
          alt={post.title} 
          className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        {/* Category Badge overlaying the image */}
        <div className="absolute top-4 left-4">
          <span className="bg-white/95 backdrop-blur text-vku-primary text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full shadow-sm">
            {post.category}
          </span>
        </div>
      </div>

      {/* Content Container */}
      <div className="p-6 md:p-8 flex flex-col flex-1">
        <span className="text-sm font-medium text-vku-text-muted mb-4 block">
          {post.date}
        </span>
        
        <h3 className="text-xl font-bold text-gray-800 mb-4 line-clamp-2 group-hover:text-vku-primary transition-colors duration-300">
          <Link to={`/blog/${post.slug}`} className="before:absolute before:inset-0">
            {post.title}
          </Link>
        </h3>
        
        <p className="text-gray-600 mb-6 flex-1 line-clamp-3">
          {post.excerpt}
        </p>
        
        {/* Read More Link */}
        <div className="mt-auto pt-4 border-t border-vku-border flex items-center text-vku-primary font-bold text-sm uppercase tracking-wider">
          <span>Read More</span>
          <span className="ml-2 transform group-hover:translate-x-2 transition-transform duration-300">→</span>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
