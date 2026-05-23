import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight, Leaf } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { blogPosts } from "@/data/blogPosts";

const categoryColors: Record<string, string> = {
  Movement: "bg-primary/10 text-primary",
  Climate: "bg-sky/10 text-sky-700",
  Environment: "bg-secondary/10 text-secondary",
  Guide: "bg-accent/10 text-accent",
  Humanitarian: "bg-orange-100 text-orange-700",
  Education: "bg-purple-100 text-purple-700",
};

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  "@id": "https://ehh-nepal.netlify.app/blog#blog",
  "name": "EHH Nepal Blog",
  "description": "Articles on environmental sustainability, climate action, humanitarian aid, and youth movements in Nepal.",
  "url": "https://ehh-nepal.netlify.app/blog",
  "publisher": {
    "@type": "Organization",
    "name": "EHH Nepal",
    "url": "https://ehh-nepal.netlify.app"
  },
  "blogPost": blogPosts.map((p) => ({
    "@type": "BlogPosting",
    "headline": p.title,
    "description": p.description,
    "datePublished": p.date,
    "author": { "@type": "Person", "name": p.author },
    "url": `https://ehh-nepal.netlify.app/blog/${p.slug}`,
  })),
};

const Blog = () => {
  return (
    <>
      <SEOHead
        title="Blog — Environmental & Humanitarian Articles | EHH Nepal"
        description="Read articles on youth-led environmental movements, climate change in Nepal, tree plantation, humanitarian aid, and how students can make a difference across 77 districts."
        canonical="/blog"
        keywords="EHH Nepal blog, environmental articles Nepal, climate change Nepal blog, youth movement Nepal articles, humanitarian Nepal"
        schema={blogSchema}
      />
      <div className="min-h-screen flex flex-col bg-background">
        <Navbar />

        {/* Hero */}
        <section className="pt-32 pb-16 bg-gradient-to-br from-primary to-secondary text-primary-foreground">
          <div className="container mx-auto px-4 sm:px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 text-sm font-medium mb-6">
                <Leaf className="w-4 h-4" />
                EHH Nepal Blog
              </div>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Stories of Change
              </h1>
              <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto leading-relaxed">
                Insights, guides, and ground reports from Nepal's youth-led environmental and humanitarian movement.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Articles */}
        <section className="py-16 sm:py-20 flex-1">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, i) => (
                <motion.article
                  key={post.slug}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 flex flex-col"
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={post.coverImage}
                      alt={post.title}
                      loading="lazy"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <span className={`text-xs font-semibold px-3 py-1 rounded-full ${categoryColors[post.category] || "bg-muted text-muted-foreground"}`}>
                        {post.category}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </span>
                    </div>
                    <h2 className="font-display font-bold text-lg text-foreground mb-3 leading-snug line-clamp-3 flex-1">
                      {post.title}
                    </h2>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
                      {post.description}
                    </p>
                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-border">
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Calendar className="w-3 h-3" />
                        {new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
                      </div>
                      <Link
                        to={`/blog/${post.slug}`}
                        className="flex items-center gap-1 text-sm font-semibold text-primary hover:gap-2 transition-all duration-200"
                        aria-label={`Read article: ${post.title}`}
                      >
                        Read <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4 sm:px-6 text-center">
            <h2 className="font-display text-3xl font-bold text-foreground mb-4">
              Ready to Be Part of the Movement?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Join over 200 students across Nepal who are already making a real difference for people and the planet.
            </p>
            <a
              href="/#join"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-elevated hover:-translate-y-0.5 transition-all duration-300"
            >
              Join EHH Nepal <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Blog;
