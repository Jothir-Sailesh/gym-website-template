import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, ArrowUpRight } from 'lucide-react';
import { businessConfig } from '../data/business';

export const InstagramGrid: React.FC = () => {
  const posts = [
    {
      id: "post-1",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=600",
      likes: "1.2k",
      tag: "#BARBELLWORK"
    },
    {
      id: "post-2",
      image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=600",
      likes: "890",
      tag: "#CONDITIONING"
    },
    {
      id: "post-3",
      image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&q=80&w=600",
      likes: "2.4k",
      tag: "#SQUADTRAINING"
    },
    {
      id: "post-4",
      image: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&q=80&w=600",
      likes: "1.5k",
      tag: "#RECOVERYZONE"
    }
  ];

  return (
    <section className="py-24 sm:py-32 bg-dark-bg text-light relative overflow-hidden border-b border-dark-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-[2px] bg-accent" />
              <span className="text-xs font-mono font-bold tracking-widest text-accent uppercase">
                12 — SOCIAL MEDIA DISPATCH
              </span>
            </div>
            <h2 className="font-display font-extrabold text-4xl sm:text-6xl tracking-tighter uppercase text-light">
              FOLLOW <span className="text-accent">THE WORK.</span>
            </h2>
          </div>

          <a
            href={businessConfig.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-dark-card border border-dark-border hover:border-accent text-light hover:text-accent px-6 py-3.5 font-display font-bold text-xs tracking-wider uppercase transition-colors"
            data-cursor="INSTAGRAM"
          >
            <Instagram className="w-4 h-4 text-accent" />
            <span>FOLLOW ON INSTAGRAM</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Visual Stream Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {posts.map((post) => (
            <a
              key={post.id}
              href={businessConfig.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="relative aspect-square overflow-hidden bg-dark-card border border-dark-border group block"
            >
              <img
                src={post.image}
                alt={`Instagram Post ${post.tag}`}
                className="w-full h-full object-cover filter brightness-90 contrast-110 group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-dark-bg/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 text-center">
                <Instagram className="w-7 h-7 text-accent mb-2" />
                <span className="text-xs font-mono font-bold text-light">{post.tag}</span>
                <span className="text-[10px] font-mono text-light-muted mt-1">{post.likes} LIKES</span>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};
