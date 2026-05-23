import React from "react";
import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowLeft, ArrowRight, Leaf } from "lucide-react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { blogPosts, type BlogPost } from "@/data/blogPosts";

interface BlogArticleLayoutProps {
  post: BlogPost;
  children: React.ReactNode;
}

const BlogArticleLayout = ({ post, children }: BlogArticleLayoutProps) => {
  const currentIndex = blogPosts.findIndex((p) => p.slug === post.slug);
  const prevPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null;
  const nextPost = currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "description": post.description,
    "datePublished": post.date,
    "dateModified": post.date,
    "author": {
      "@type": "Person",
      "name": post.author,
    },
    "publisher": {
      "@type": "Organization",
      "name": "EHH Nepal",
      "logo": {
        "@type": "ImageObject",
        "url": "https://ehh-nepal.netlify.app/logo.png",
      },
    },
    "image": post.coverImage,
    "url": `https://ehh-nepal.netlify.app/blog/${post.slug}`,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://ehh-nepal.netlify.app/blog/${post.slug}`,
    },
    "keywords": post.keywords,
    "articleSection": post.category,
    "inLanguage": "en",
    "about": {
      "@type": "Thing",
      "name": "Environmental Sustainability Nepal",
    },
  };

  return (
    <>
      <SEOHead
        title={post.title}
        description={post.description}
        canonical={`/blog/${post.slug}`}
        ogImage={post.coverImage}
        ogType="article"
        articleDate={post.date}
        articleAuthor={post.author}
        keywords={post.keywords}
        schema={articleSchema}
      />
      <div className="min-h-screen flex flex-col bg-background">
        <Navbar />

        {/* Hero */}
        <section className="pt-28 pb-0">
          <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
              >
                <ArrowLeft className="w-4 h-4" /> Back to Blog
              </Link>
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="inline-flex items-center gap-1 bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full">
                  <Leaf className="w-3 h-3" /> {post.category}
                </span>
                <span className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Calendar className="w-3 h-3" />
                  {new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
                </span>
                <span className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Clock className="w-3 h-3" />
                  {post.readTime}
                </span>
              </div>
              <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
                {post.title}
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                {post.description}
              </p>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">
                  {post.author.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{post.author}</p>
                  <p className="text-xs text-muted-foreground">EHH Nepal</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Cover Image */}
          <div className="container mx-auto px-4 sm:px-6 max-w-5xl mb-12">
            <div className="rounded-2xl overflow-hidden h-64 sm:h-80 lg:h-96">
              <img
                src={post.coverImage}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="pb-16">
          <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="prose prose-lg prose-green max-w-none
                prose-headings:font-display prose-headings:text-foreground
                prose-h2:text-2xl prose-h2:font-bold prose-h2:mt-10 prose-h2:mb-4
                prose-h3:text-xl prose-h3:font-semibold prose-h3:mt-8 prose-h3:mb-3
                prose-p:text-foreground/80 prose-p:leading-relaxed prose-p:mb-5
                prose-strong:text-foreground prose-strong:font-semibold
                prose-ul:text-foreground/80 prose-li:mb-2
                prose-ol:text-foreground/80
                prose-a:text-primary prose-a:no-underline hover:prose-a:underline
                prose-blockquote:border-primary prose-blockquote:bg-primary/5 prose-blockquote:rounded-lg prose-blockquote:py-2"
            >
              {children}
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 bg-gradient-to-br from-primary to-secondary text-primary-foreground">
          <div className="container mx-auto px-4 sm:px-6 max-w-3xl text-center">
            <h2 className="font-display text-2xl sm:text-3xl font-bold mb-4">
              Join the EHH Nepal Movement
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
              Be part of Nepal's most impactful youth-led environmental and humanitarian initiative. Students from all 77 districts are welcome.
            </p>
            <a
              href="/#join"
              className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-xl font-semibold hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
            >
              Register Now <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </section>

        {/* Prev / Next navigation */}
        <section className="py-10 border-t border-border">
          <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
            <div className="flex flex-col sm:flex-row gap-4 justify-between">
              {prevPost ? (
                <Link
                  to={`/blog/${prevPost.slug}`}
                  className="flex items-start gap-3 group flex-1 bg-card rounded-xl p-4 hover:shadow-soft transition-all"
                >
                  <ArrowLeft className="w-5 h-5 text-primary mt-1 group-hover:-translate-x-1 transition-transform" />
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Previous Article</p>
                    <p className="text-sm font-semibold text-foreground line-clamp-2">{prevPost.title}</p>
                  </div>
                </Link>
              ) : <div className="flex-1" />}
              {nextPost ? (
                <Link
                  to={`/blog/${nextPost.slug}`}
                  className="flex items-start gap-3 group flex-1 bg-card rounded-xl p-4 hover:shadow-soft transition-all text-right justify-end"
                >
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Next Article</p>
                    <p className="text-sm font-semibold text-foreground line-clamp-2">{nextPost.title}</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-primary mt-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              ) : <div className="flex-1" />}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default BlogArticleLayout;
