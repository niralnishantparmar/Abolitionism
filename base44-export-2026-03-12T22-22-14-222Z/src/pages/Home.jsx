import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Clock, BookOpen, HelpCircle, Quote, Scroll } from 'lucide-react';

const features = [
  { icon: Clock, label: 'Timeline', desc: 'Interactive timeline of key events from 1831–1836', path: '/Timeline', color: 'text-amber-400' },
  { icon: BookOpen, label: 'Learn', desc: 'In-depth information on all four major events', path: '/Info', color: 'text-orange-400' },
  { icon: HelpCircle, label: 'Quiz', desc: 'Test your knowledge with multiple choice questions', path: '/Quiz', color: 'text-yellow-400' },
  { icon: Quote, label: 'Guess The Source', desc: 'Can you identify who said it?', path: '/GuessTheSource', color: 'text-amber-300' },
  { icon: Scroll, label: 'Sources', desc: 'MLA-formatted bibliography', path: '/Sources', color: 'text-orange-300' },
];

const events = [
  { year: '1831', label: "Nat Turner's Rebellion" },
  { year: '1831', label: 'The Liberator Published' },
  { year: '1833', label: 'Anti-Slavery Society Founded' },
  { year: '1836', label: 'The Gag Rule Passed' },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* background texture */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_hsl(38_75%_20%_/_0.18)_0%,_transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_hsl(14_65%_20%_/_0.15)_0%,_transparent_70%)]" />
        {/* grain overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")'}} />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-primary/70 text-xs font-body tracking-[0.4em] uppercase mb-4">Team F · American History</p>
            <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl font-bold text-foreground leading-tight mb-4">
              The Rise of
              <br />
              <span className="text-primary italic">Abolitionism</span>
            </h1>
            <p className="font-heading text-xl text-muted-foreground italic mb-3">1831 — 1836</p>
            <p className="font-body text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
              From Nat Turner's rebellion to the silencing of Congress — explore how four pivotal events reshaped the fight against slavery in America.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                to="/Timeline"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded font-body font-semibold text-sm hover:bg-primary/90 transition-colors"
              >
                Explore Timeline <ArrowRight size={15} />
              </Link>
              <Link
                to="/Info"
                className="inline-flex items-center gap-2 border border-border text-foreground px-6 py-3 rounded font-body font-semibold text-sm hover:bg-secondary transition-colors"
              >
                Read the History
              </Link>
            </div>
          </motion.div>
        </div>

        {/* bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Key events strip */}
      <section className="border-y border-border bg-card/40 py-6">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {events.map((e, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 + 0.3 }}
                className="text-center"
              >
                <div className="text-primary font-heading font-bold text-2xl">{e.year}</div>
                <div className="text-muted-foreground font-body text-xs mt-1 leading-snug">{e.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features grid */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="font-heading text-3xl font-bold text-center text-foreground mb-12"
        >
          Explore the Project
        </motion.h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((f, i) => (
            <motion.div
              key={f.path}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + i * 0.1 }}
            >
              <Link
                to={f.path}
                className="group block bg-card border border-border rounded-lg p-6 hover:border-primary/40 hover:bg-card/80 transition-all"
              >
                <f.icon className={`${f.color} w-7 h-7 mb-4`} />
                <h3 className="font-heading font-bold text-lg text-foreground mb-1 group-hover:text-primary transition-colors">
                  {f.label}
                </h3>
                <p className="font-body text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
                <div className="flex items-center gap-1 mt-4 text-primary text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  Go <ArrowRight size={12} />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Pull quote */}
      <section className="border-t border-border bg-card/30 py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="font-heading text-2xl sm:text-3xl italic text-foreground/90 leading-relaxed mb-4">
            "I will be as harsh as truth and as uncompromising as justice… I will not retreat a single inch — and I will be heard."
          </p>
          <p className="font-body text-primary text-sm tracking-wide">— William Lloyd Garrison, <em>The Liberator</em>, January 1, 1831</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 text-center text-muted-foreground font-body text-xs">
        Team F · Abolitionism 1831–1836 · American History Project
      </footer>
    </div>
  );
}