import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import { blogPosts } from '../../data/blog';
import { ArrowRight } from 'lucide-react';

const BlogPreview = () => {
  const previewPosts = blogPosts.slice(0, 3);

  return (
    <div className="py-24 bg-vku-surface border-t border-vku-border">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <SectionHeading 
            title="Insights & Knowledge Hub" 
            subtitle="VKU INSIGHTS"
            className="mb-0 md:mb-0"
          />
          <Link to="/blog" className="hidden md:flex items-center text-vku-primary font-semibold hover:text-vku-primary-dark transition-colors pb-2">
            View All Insights <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {previewPosts.map((post) => (
            <div key={post.id} className="group flex flex-col bg-vku-white rounded-xl overflow-hidden shadow-sm border border-vku-border hover:shadow-lg transition-all duration-300">
              <div className="aspect-[16/9] overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" 
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-vku-primary bg-vku-primary-light px-2 py-1 rounded">
                    {post.category}
                  </span>
                  <span className="text-sm text-vku-text-muted">{post.date}</span>
                </div>
                <h3 className="text-[17px] font-bold text-vku-text-primary mb-3 group-hover:text-vku-primary transition-colors leading-snug">
                  {post.title}
                </h3>
                <p className="text-vku-text-secondary mb-6 flex-1 text-sm leading-relaxed">
                  {post.excerpt}
                </p>
                <Link 
                  to={`/blog/${post.slug}`} 
                  className="inline-flex items-center text-sm font-bold text-vku-primary mt-auto hover:text-vku-primary-dark transition-colors"
                >
                  Read More <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-10 md:hidden text-center">
          <Link to="/blog" className="inline-flex items-center text-vku-primary font-semibold hover:text-vku-primary-dark transition-colors">
            View All Insights <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default BlogPreview;
