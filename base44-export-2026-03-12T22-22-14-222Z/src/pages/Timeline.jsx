import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronRight } from 'lucide-react';

const events = [
  {
    year: 'Aug 21, 1831',
    title: "Nat Turner's Rebellion",
    type: 'Violent Resistance',
    typeColor: 'bg-red-900/40 text-red-300 border-red-700/40',
    dotColor: 'bg-red-400',
    summary: 'An enslaved preacher leads 50–70 men in the bloodiest slave revolt in U.S. history.',
    sections: [
      {
        heading: 'Background',
        content: 'Nat Turner was an enslaved Black preacher in Southampton County, Virginia. He believed he received divine visions commanding him to fight slavery. Enslaved people lived under brutal conditions — no legal rights, no family security, no freedom.',
      },
      {
        heading: 'The Rebellion',
        content: 'Beginning August 21, 1831, Turner and a small group killed his enslaver\'s family first. The group grew to approximately 50–70 enslaved men as they moved from plantation to plantation. Around 55 white people were killed before armed white militias and federal troops suppressed the rebellion.',
      },
      {
        heading: 'Capture & Execution',
        content: 'Turner escaped and hid for roughly two months. He was captured October 30, 1831, and executed November 11, 1831. His body was mutilated afterward — a deliberate act of terror meant to discourage future revolts.',
      },
      {
        heading: 'Consequences',
        content: 'Southern states passed harsher slave laws restricting Black education, religious gatherings, and the movement of enslaved people. Fear of revolts intensified dramatically across the South.',
      },
      {
        heading: 'Historical Significance',
        content: 'Turner demonstrated that enslaved people would violently resist if pushed far enough. Abolitionists called him a martyr. Southerners used the rebellion to justify even stricter control over enslaved people, deepening the sectional divide.',
      },
    ],
  },
  {
    year: 'Jan 1, 1831',
    title: 'The Liberator Published',
    type: 'Media Activism',
    typeColor: 'bg-amber-900/40 text-amber-300 border-amber-700/40',
    dotColor: 'bg-amber-400',
    summary: 'William Lloyd Garrison launches the most radical abolitionist newspaper in American history.',
    sections: [
      {
        heading: 'Who Was Garrison?',
        content: 'Born in 1805 in Massachusetts, Garrison was a journalist and radical abolitionist who believed slavery must end immediately — not gradually. He rejected compromise entirely.',
      },
      {
        heading: 'The Newspaper',
        content: 'The first issue was published January 1, 1831 in Boston. It became one of the most influential abolitionist newspapers in U.S. history, reaching Northern readers, reform activists, religious groups, and free Black communities.',
      },
      {
        heading: 'Famous Quote',
        content: '"I will be as harsh as truth and as uncompromising as justice… I will not retreat a single inch — and I will be heard." — First issue, January 1, 1831.',
      },
      {
        heading: 'Reaction',
        content: 'Northern abolitionists praised it and the movement grew. In the South, it was despised — states banned it and some offered rewards for Garrison\'s arrest or capture.',
      },
      {
        heading: 'Significance',
        content: 'The Liberator became the main voice of radical abolitionism. It helped unify activists across the country and was published continuously until 1865, when the 13th Amendment abolished slavery.',
      },
    ],
  },
  {
    year: 'Dec 1833',
    title: 'American Anti-Slavery Society Founded',
    type: 'Organized Reform',
    typeColor: 'bg-blue-900/40 text-blue-300 border-blue-700/40',
    dotColor: 'bg-blue-400',
    summary: 'Sixty delegates — Black and white — gather in Philadelphia to form a national abolitionist organization.',
    sections: [
      {
        heading: 'Founding',
        content: 'Founded December 1833 in Philadelphia with about 60 delegates, including both Black and white activists. This was groundbreaking for a biracial organization at the time.',
      },
      {
        heading: 'Major Leaders',
        content: 'Key figures included William Lloyd Garrison, Frederick Douglass, Theodore Weld, Arthur and Lewis Tappan, and Angelina and Sarah Grimké.',
      },
      {
        heading: 'Goals & Methods',
        content: 'The society aimed to end slavery immediately and promote racial equality through moral persuasion — convincing Americans that slavery was a sin. They published pamphlets, sent speakers nationwide, organized meetings, and gathered anti-slavery petitions. They distributed millions of documents.',
      },
      {
        heading: 'Growth',
        content: 'By 1838, the society had approximately 1,300 local chapters and around 250,000 members — a massive national movement in only five years.',
      },
      {
        heading: 'Opposition & Significance',
        content: 'Pro-slavery mobs attacked abolitionists and anti-abolition riots broke out in Northern cities. Despite this, the society transformed abolition from a fringe idea into a powerful national political force.',
      },
    ],
  },
  {
    year: 'May 26, 1836',
    title: 'The Gag Rule',
    type: 'Political Conflict',
    typeColor: 'bg-purple-900/40 text-purple-300 border-purple-700/40',
    dotColor: 'bg-purple-400',
    summary: 'Congress passes a rule automatically silencing all petitions related to slavery — igniting a free speech crisis.',
    sections: [
      {
        heading: 'Background',
        content: 'Abolitionists had been flooding Congress with petitions demanding an end to slavery in Washington D.C., the halting of its expansion, and the end of the slave trade. Southern politicians were furious at the volume and visibility of these petitions.',
      },
      {
        heading: 'The Rule',
        content: 'On May 26, 1836, the House passed the Gag Rule: any petition relating to slavery would be automatically tabled (set aside) without discussion or consideration.',
      },
      {
        heading: 'Why It Existed',
        content: 'Southern representatives wanted to silence abolitionists, prevent debate on slavery in Congress, and protect the institution from national criticism.',
      },
      {
        heading: 'John Quincy Adams',
        content: 'Former President John Quincy Adams became the leading opponent of the Gag Rule. He repeatedly introduced petitions, challenged the rule on the floor of Congress, and argued it violated the First Amendment rights to free speech and petition.',
      },
      {
        heading: 'End & Significance',
        content: 'The Gag Rule was finally repealed in 1844. Ironically, it backfired — it showed Americans how far slaveholders would go to silence debate, turning slavery into a major national political crisis and fueling the abolitionist movement\'s growth.',
      },
    ],
  },
];

function EventModal({ event, onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.92, y: 20, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        exit={{ scale: 0.92, y: 20, opacity: 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className="bg-card border border-border rounded-xl w-full max-w-2xl max-h-[85vh] overflow-y-auto shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 bg-card border-b border-border px-6 py-4 flex items-start justify-between">
          <div>
            <span className={`inline-block text-xs font-body px-2.5 py-0.5 rounded-full border ${event.typeColor} mb-2`}>
              {event.type}
            </span>
            <h2 className="font-heading text-2xl font-bold text-foreground leading-tight">{event.title}</h2>
            <p className="font-body text-primary text-sm mt-1">{event.year}</p>
          </div>
          <button onClick={onClose} className="text-muted-foreground hover:text-foreground transition-colors ml-4 mt-1">
            <X size={20} />
          </button>
        </div>
        <div className="px-6 py-5 space-y-5">
          <p className="font-body text-muted-foreground text-sm leading-relaxed italic">{event.summary}</p>
          {event.sections.map((s, i) => (
            <div key={i}>
              <h3 className="font-heading font-bold text-base text-primary mb-1.5">{s.heading}</h3>
              <p className="font-body text-foreground/80 text-sm leading-relaxed">{s.content}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Timeline() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="min-h-screen max-w-3xl mx-auto px-6 py-16">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <p className="font-body text-xs tracking-widest uppercase text-muted-foreground mb-2">Interactive Timeline</p>
        <h1 className="font-heading text-4xl font-bold text-foreground mb-3">Abolitionism: 1831–1836</h1>
        <p className="font-body text-muted-foreground text-sm mb-12">Click any event to explore the full details.</p>
      </motion.div>

      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-8 top-0 bottom-0 w-px bg-border" />

        <div className="space-y-0">
          {events.map((event, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.15 }}
              className="relative pl-20 pb-12 last:pb-0"
            >
              {/* Dot */}
              <div className={`absolute left-[27px] top-1.5 w-[18px] h-[18px] rounded-full border-2 border-background ${event.dotColor} shadow-lg`} />

              {/* Year label on line */}
              <div className="mb-3">
                <span className="font-body text-xs text-muted-foreground">{event.year}</span>
              </div>

              {/* Card */}
              <button
                onClick={() => setSelected(event)}
                className="group w-full text-left bg-card border border-border rounded-xl p-5 hover:border-primary/40 hover:bg-card/70 transition-all"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1">
                    <span className={`inline-block text-xs font-body px-2 py-0.5 rounded-full border ${event.typeColor} mb-2`}>
                      {event.type}
                    </span>
                    <h3 className="font-heading font-bold text-lg text-foreground group-hover:text-primary transition-colors">
                      {event.title}
                    </h3>
                    <p className="font-body text-muted-foreground text-sm mt-1.5 leading-relaxed">{event.summary}</p>
                  </div>
                  <ChevronRight size={16} className="text-muted-foreground group-hover:text-primary transition-colors mt-1 shrink-0" />
                </div>
                <p className="font-body text-primary text-xs mt-3 font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  Click to read more →
                </p>
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Big picture summary */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-16 p-6 bg-card border border-border rounded-xl"
      >
        <h2 className="font-heading font-bold text-xl text-foreground mb-4">The Big Picture</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-5">
          {[
            { event: 'Nat Turner', type: 'Violent Resistance' },
            { event: 'The Liberator', type: 'Media Activism' },
            { event: 'Anti-Slavery Society', type: 'Organized Reform' },
            { event: 'Gag Rule', type: 'Political Conflict' },
          ].map((item) => (
            <div key={item.event} className="bg-secondary rounded-lg p-3 text-center">
              <div className="font-body text-xs text-muted-foreground">{item.event}</div>
              <div className="font-heading text-primary text-sm font-semibold mt-1">{item.type}</div>
            </div>
          ))}
        </div>
        <p className="font-body text-muted-foreground text-sm leading-relaxed">
          Together, these four events reveal rising <span className="text-foreground font-medium">sectional tension</span> between North and South, growing <span className="text-foreground font-medium">anti-slavery activism</span>, and the increasing <span className="text-foreground font-medium">political polarization</span> that would eventually lead to the Civil War.
        </p>
      </motion.div>

      <AnimatePresence>
        {selected && <EventModal event={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </div>
  );
}