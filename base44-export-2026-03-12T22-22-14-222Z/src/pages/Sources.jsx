import React from 'react';
import { motion } from 'framer-motion';
import { Scroll } from 'lucide-react';

const sources = [
  {
    mla: 'American Movement Student Anthology. Assignment document, 2024.',
  },
  {
    mla: 'Foner, Eric. <em>Give Me Liberty!: An American History</em>. W.W. Norton & Company.',
  },
  {
    mla: 'National Park Service. "Nat Turner\'s Rebellion." <em>National Park Service</em>, U.S. Department of the Interior, www.nps.gov.',
  },
  {
    mla: 'Library of Congress. "William Lloyd Garrison and <em>The Liberator</em>." <em>Library of Congress</em>, www.loc.gov.',
  },
  {
    mla: 'Smithsonian National Museum of African American History and Culture. "The Abolitionist Movement." <em>NMAAHC</em>, nmaahc.si.edu.',
  },
  {
    mla: 'History.com Editors. "American Anti-Slavery Society." <em>History.com</em>, A&E Television Networks, www.history.com.',
  },
  {
    mla: 'U.S. House of Representatives History Office. "The Gag Rule." <em>History, Art & Archives, U.S. House of Representatives</em>, history.house.gov.',
  },
];

export default function Sources() {
  return (
    <div className="min-h-screen max-w-3xl mx-auto px-6 py-16">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <div className="flex items-center gap-3 mb-2">
          <Scroll className="text-primary w-6 h-6" />
          <p className="font-body text-xs tracking-widest uppercase text-muted-foreground">Bibliography</p>
        </div>
        <h1 className="font-heading text-4xl font-bold text-foreground mb-2">Sources</h1>
        <p className="font-body text-muted-foreground text-sm mb-10">All sources formatted in MLA 9th edition.</p>

        <div className="space-y-4">
          {sources.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.08 }}
              className="border-l-2 border-primary/30 pl-5 py-2"
            >
              <p
                className="font-body text-foreground/85 text-sm leading-relaxed"
                dangerouslySetInnerHTML={{ __html: s.mla }}
              />
            </motion.div>
          ))}
        </div>

        <div className="mt-14 p-5 bg-card border border-border rounded-lg">
          <h2 className="font-heading font-bold text-lg text-foreground mb-3">Key Terms</h2>
          <div className="flex flex-wrap gap-2">
            {['abolitionism','moral persuasion','slave revolt','plantation system','sectional tension','reform movement','political suppression','freedom of petition','anti-slavery activism'].map((t) => (
              <span key={t} className="bg-primary/10 text-primary text-xs font-body px-3 py-1 rounded-full border border-primary/20">{t}</span>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}