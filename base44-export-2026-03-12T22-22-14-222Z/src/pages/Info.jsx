import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

const topics = [
  {
    id: 'nat-turner',
    year: '1831',
    title: "Nat Turner's Rebellion",
    subtitle: 'The Martyrdom',
    color: 'border-red-500/40 bg-red-950/20',
    accentColor: 'text-red-400',
    tagColor: 'bg-red-900/40 text-red-300 border-red-700/40',
    tag: 'Violent Resistance',
    intro: "Nat Turner was an enslaved Black preacher in Southampton County, Virginia, who believed divine visions commanded him to lead a rebellion against slavery.",
    sections: [
      {
        title: 'Background',
        content: [
          'Nat Turner was an enslaved Black preacher in Southampton County, Virginia.',
          'He believed he had visions from God telling him to fight slavery.',
          'Slave revolts were extremely rare but deeply feared by slaveholders.',
          'Enslaved people lived under brutal conditions with no legal rights, no family security, and no freedom.',
        ],
      },
      {
        title: 'The Rebellion',
        content: [
          'Began August 21, 1831.',
          "Turner and a small group started by killing Turner's enslaver and his family.",
          'The group grew to about 50–70 enslaved men as they moved from plantation to plantation.',
          'Around 55 white people were killed.',
          'Armed white militias and federal troops quickly suppressed the rebellion.',
        ],
      },
      {
        title: 'Capture and Execution',
        content: [
          'Turner escaped and hid for about two months.',
          'Captured October 30, 1831.',
          'Executed November 11, 1831.',
          'His body was mutilated after execution — a deliberate act of terror meant to discourage future revolts.',
        ],
      },
      {
        title: 'Consequences',
        content: [
          'Southern states passed harsher slave laws.',
          'Laws restricted Black education, religious gatherings, and the movement of enslaved people.',
          'Fear of slave revolts increased dramatically across the South.',
        ],
      },
      {
        title: 'Historical Significance',
        content: [
          'Demonstrated that enslaved people would resist violently if pushed far enough.',
          'Intensified the divide between Northern abolitionists and Southern slaveholders.',
          "Used by Southerners to justify even stricter control of enslaved people.",
          'Nat Turner became a symbol of resistance — called a martyr by abolitionists.',
        ],
      },
    ],
  },
  {
    id: 'liberator',
    year: '1831',
    title: 'The Liberator Published',
    subtitle: 'William Lloyd Garrison',
    color: 'border-amber-500/40 bg-amber-950/20',
    accentColor: 'text-amber-400',
    tagColor: 'bg-amber-900/40 text-amber-300 border-amber-700/40',
    tag: 'Media Activism',
    intro: 'On January 1, 1831, journalist William Lloyd Garrison launched the most influential radical abolitionist newspaper in American history from Boston, Massachusetts.',
    pullQuote: '"I will be as harsh as truth and as uncompromising as justice… I will not retreat a single inch — and I will be heard."',
    pullQuoteSource: '— William Lloyd Garrison, The Liberator, Issue #1',
    sections: [
      {
        title: 'Who Was Garrison?',
        content: [
          'Born 1805 in Massachusetts.',
          'Journalist and radical abolitionist.',
          'Believed slavery must end immediately — not gradually.',
          'Rejected any compromise on the question of slavery.',
        ],
      },
      {
        title: 'The Newspaper',
        content: [
          'First issue: January 1, 1831.',
          'Published in Boston.',
          'One of the most influential abolitionist newspapers in American history.',
          'Reached Northern readers, reform activists, religious groups, and free Black communities.',
        ],
      },
      {
        title: 'Purpose of the Paper',
        content: [
          'Demand immediate abolition of slavery.',
          'Spread abolitionist arguments across the country.',
          'Report on the abuses of the slave system.',
          'Organize anti-slavery activism and build the movement.',
        ],
      },
      {
        title: 'Reaction',
        content: [
          'North: Abolitionists praised it; the movement grew significantly.',
          'South: The paper was despised and banned in Southern states.',
          "Some states offered rewards for Garrison's capture.",
        ],
      },
      {
        title: 'Significance',
        content: [
          'Became the main voice of radical abolitionism in America.',
          'Helped unify abolitionist activists across the country.',
          'Published continuously until 1865, when the 13th Amendment abolished slavery.',
        ],
      },
    ],
  },
  {
    id: 'anti-slavery',
    year: '1833',
    title: 'American Anti-Slavery Society',
    subtitle: 'National Organization Founded',
    color: 'border-blue-500/40 bg-blue-950/20',
    accentColor: 'text-blue-400',
    tagColor: 'bg-blue-900/40 text-blue-300 border-blue-700/40',
    tag: 'Organized Reform',
    intro: 'In December 1833, approximately 60 delegates — both Black and white — gathered in Philadelphia to found the first national abolitionist organization in American history.',
    sections: [
      {
        title: 'Founding',
        content: [
          'Founded December 1833 in Philadelphia.',
          'About 60 delegates attended.',
          'Notably included both Black and white activists — groundbreaking for its time.',
        ],
      },
      {
        title: 'Major Leaders',
        content: [
          'William Lloyd Garrison',
          'Frederick Douglass',
          'Theodore Weld',
          'Arthur and Lewis Tappan',
          'Angelina and Sarah Grimké',
        ],
      },
      {
        title: 'Goals',
        content: [
          'End slavery immediately.',
          'Promote racial equality.',
          'Persuade Americans morally that slavery was wrong.',
          'Used "moral persuasion" — arguing slavery was a sin against God and humanity.',
        ],
      },
      {
        title: 'Methods',
        content: [
          'Published pamphlets and newspapers.',
          'Sent speakers across the country.',
          'Organized meetings and public protests.',
          'Gathered anti-slavery petitions sent to Congress.',
          'Distributed millions of documents across the nation.',
        ],
      },
      {
        title: 'Growth & Opposition',
        content: [
          'By 1838: approximately 1,300 local chapters and 250,000 members.',
          'Pro-slavery mobs physically attacked abolitionists.',
          'Anti-abolition riots occurred in Northern cities.',
          'Some politicians feared the movement would divide the nation.',
        ],
      },
      {
        title: 'Significance',
        content: [
          'Transformed abolition from a small fringe movement into a national political force.',
          'Proved that organized grassroots activism could change political conversation.',
        ],
      },
    ],
  },
  {
    id: 'gag-rule',
    year: '1836',
    title: 'The Gag Rule',
    subtitle: 'May 26, 1836',
    color: 'border-purple-500/40 bg-purple-950/20',
    accentColor: 'text-purple-400',
    tagColor: 'bg-purple-900/40 text-purple-300 border-purple-700/40',
    tag: 'Political Conflict',
    intro: 'On May 26, 1836, the U.S. House of Representatives passed the Gag Rule — automatically silencing any petition related to slavery without discussion, sparking a major constitutional crisis.',
    sections: [
      {
        title: 'Background',
        content: [
          'Abolitionists had been flooding Congress with petitions demanding action on slavery.',
          'Petitions asked Congress to abolish slavery in Washington D.C., stop its expansion, and end the slave trade.',
          'Southern politicians were furious at the sheer volume of anti-slavery petitions.',
        ],
      },
      {
        title: 'The Rule',
        content: [
          'Passed May 26, 1836 in the House of Representatives.',
          'Any petition related to slavery would be automatically tabled (ignored) without discussion.',
          'Effectively silenced the abolitionist petition campaign in Congress.',
        ],
      },
      {
        title: 'Why It Existed',
        content: [
          'Southern representatives wanted to silence abolitionists.',
          'They sought to prevent any debate on slavery reaching the national stage.',
          'They wanted to protect slavery from national political criticism.',
        ],
      },
      {
        title: 'John Quincy Adams',
        content: [
          'Former President John Quincy Adams became the leading opponent of the Gag Rule.',
          'He repeatedly introduced petitions on the House floor in defiance.',
          'He challenged the rule constantly in Congress.',
          'He argued it violated the First Amendment rights to free speech and petition.',
        ],
      },
      {
        title: 'End & Significance',
        content: [
          'Repealed in 1844 after years of resistance led by Adams.',
          'Ironically, the Gag Rule backfired: it showed Americans how far slaveholders would go to silence debate.',
          'It turned slavery into a major national political issue rather than containing it.',
          'It fueled the growth of the abolitionist movement rather than suppressing it.',
        ],
      },
    ],
  },
];

function TopicCard({ topic }) {
  const [openSections, setOpenSections] = useState({});
  const [expanded, setExpanded] = useState(false);

  const toggleSection = (i) => setOpenSections((prev) => ({ ...prev, [i]: !prev[i] }));

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`border rounded-xl overflow-hidden ${topic.color}`}
    >
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full text-left px-6 py-5 flex items-start justify-between gap-4"
      >
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className={`text-xs font-body px-2 py-0.5 rounded-full border ${topic.tagColor}`}>{topic.tag}</span>
            <span className={`font-body text-xs font-bold ${topic.accentColor}`}>{topic.year}</span>
          </div>
          <h2 className="font-heading text-2xl font-bold text-foreground">{topic.title}</h2>
          <p className="font-body text-muted-foreground text-sm mt-1">{topic.subtitle}</p>
        </div>
        {expanded ? (
          <ChevronUp size={18} className="text-muted-foreground mt-1 shrink-0" />
        ) : (
          <ChevronDown size={18} className="text-muted-foreground mt-1 shrink-0" />
        )}
      </button>

      {expanded && (
        <div className="px-6 pb-6 border-t border-border/40 pt-5 space-y-4">
          <p className="font-body text-foreground/80 text-sm leading-relaxed">{topic.intro}</p>

          {topic.pullQuote && (
            <blockquote className="border-l-2 border-primary pl-4 py-2 my-4">
              <p className="font-heading italic text-foreground/90 text-base">{topic.pullQuote}</p>
              <p className={`font-body text-xs mt-2 ${topic.accentColor}`}>{topic.pullQuoteSource}</p>
            </blockquote>
          )}

          {topic.sections.map((section, i) => (
            <div key={i} className="border border-border/40 rounded-lg overflow-hidden">
              <button
                onClick={() => toggleSection(i)}
                className="w-full text-left px-4 py-3 flex items-center justify-between hover:bg-secondary/30 transition-colors"
              >
                <h3 className={`font-heading font-semibold text-sm ${topic.accentColor}`}>{section.title}</h3>
                {openSections[i] ? (
                  <ChevronUp size={14} className="text-muted-foreground shrink-0" />
                ) : (
                  <ChevronDown size={14} className="text-muted-foreground shrink-0" />
                )}
              </button>
              {openSections[i] && (
                <div className="px-4 pb-4 pt-1">
                  <ul className="space-y-1.5">
                    {section.content.map((point, j) => (
                      <li key={j} className="flex items-start gap-2">
                        <span className={`${topic.accentColor} text-xs mt-1 shrink-0`}>▪</span>
                        <span className="font-body text-foreground/80 text-sm leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </motion.div>
  );
}

export default function Info() {
  return (
    <div className="min-h-screen max-w-3xl mx-auto px-6 py-16">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <p className="font-body text-xs tracking-widest uppercase text-muted-foreground mb-2">In-Depth Study</p>
        <h1 className="font-heading text-4xl font-bold text-foreground mb-3">Learn the History</h1>
        <p className="font-body text-muted-foreground text-sm mb-10">
          Click each event to expand it. Click the section headings inside to reveal the details.
        </p>
      </motion.div>

      <div className="space-y-4">
        {topics.map((topic) => (
          <TopicCard key={topic.id} topic={topic} />
        ))}
      </div>
    </div>
  );
}