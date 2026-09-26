import React, { useEffect, useMemo } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { blogPosts } from '../data/blog';
import Container from '../components/common/Container';
import RelatedArticles from '../components/blog/RelatedArticles';
import CTASection from '../components/home/CTASection';
import { ArrowLeft } from 'lucide-react';

const BlogDetails = () => {
  const { slug } = useParams();

  // Scroll to top when slug changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  // Find the current post
  const post = useMemo(() => {
    return blogPosts.find(p => p.slug === slug);
  }, [slug]);

  if (!post) {
    return <Navigate to="/404" replace />;
  }

  return (
    <div>
      
      {/* Article Header & Image */}
      <div className="bg-white pt-16 pb-12">
        <Container className="max-w-[800px]">
          <div className="mb-8">
            <Link 
              to="/blog" 
              className="inline-flex items-center text-sm font-semibold text-vku-text-muted hover:text-vku-primary transition-colors duration-300 mb-8"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to all insights
            </Link>
            
            <div className="flex items-center gap-4 mb-6 text-sm font-bold uppercase tracking-wider">
              <span className="text-vku-primary bg-vku-primary-light/30 px-3 py-1 rounded-full">
                {post.category}
              </span>
              <span className="text-vku-text-muted">
                {post.date}
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-8">
              {post.title}
            </h1>
          </div>
        </Container>

        <Container className="max-w-[1000px]">
          <div className="aspect-[16/9] w-full rounded-2xl overflow-hidden shadow-lg border border-vku-border mb-16">
            <img 
              src={post.image} 
              alt={post.title} 
              className="w-full h-full object-cover"
            />
          </div>
        </Container>
      </div>

      {/* Article Content */}
      <div className="bg-white pb-24">
        <Container className="max-w-[800px]">
          <div className="prose prose-lg prose-blue max-w-none text-gray-700 leading-relaxed">
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-8 font-medium">
              {post.excerpt}
            </p>
            
            {/* The actual content (In a real app, this would be parsed markdown or HTML) */}
            <div className="space-y-6">
              <p>{post.content}</p>
              
              {/* Added placeholder paragraphs to simulate a longer read */}
              <p>
                In the context of modern enterprise operations, the integration of cross-functional workflows is no longer optional. It serves as the central nervous system of sustainable scale. Without a unified approach to data governance and strategic alignment, organizations run the risk of siloed decision-making, which ultimately degrades shareholder value.
              </p>
              <h2>The Path Forward</h2>
              <p>
                As we look ahead, leaders must cultivate an environment that rewards intellectual curiosity and operational discipline. The most successful firms of the next decade will be those that can dynamically reallocate capital and talent in response to rapidly changing market signals.
              </p>
              <p>
                VKU remains committed to guiding our partners through these complex transitions, ensuring that every strategic initiative is anchored by rigorous financial analysis and uncompromising ethical standards.
              </p>
            </div>
          </div>
        </Container>
      </div>

      {/* Related Insights */}
      <RelatedArticles currentPost={post} allPosts={blogPosts} />
      
      {/* CTA */}
      <CTASection 
        title="Ready to Connect?"
        description="Have a question or want to explore how VKU can help your business navigate complexity and accelerate growth?"
        buttonText="Get in Touch Today"
        buttonLink="/contact"
      />
    </div>
  );
};

export default BlogDetails;
