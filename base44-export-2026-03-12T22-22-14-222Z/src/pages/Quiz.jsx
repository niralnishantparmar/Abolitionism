import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, XCircle, RotateCcw, Trophy, ChevronRight } from 'lucide-react';

const allQuestions = [
  // Nat Turner
  {
    topic: "Nat Turner's Rebellion",
    question: "In what county and state did Nat Turner's rebellion begin?",
    options: ['Halifax County, North Carolina', 'Southampton County, Virginia', 'Henrico County, Virginia', 'Charleston County, South Carolina'],
    answer: 1,
  },
  {
    topic: "Nat Turner's Rebellion",
    question: 'On what date did Nat Turner\'s rebellion begin?',
    options: ['July 4, 1831', 'August 21, 1831', 'October 30, 1831', 'November 11, 1831'],
    answer: 1,
  },
  {
    topic: "Nat Turner's Rebellion",
    question: 'How large did Nat Turner\'s group grow at its peak?',
    options: ['About 10–15 men', 'About 20–30 men', 'About 50–70 men', 'Over 200 men'],
    answer: 2,
  },
  {
    topic: "Nat Turner's Rebellion",
    question: 'How many white people were killed during the rebellion?',
    options: ['Around 15', 'Around 30', 'Around 55', 'Around 100'],
    answer: 2,
  },
  {
    topic: "Nat Turner's Rebellion",
    question: 'When was Nat Turner captured?',
    options: ['August 22, 1831', 'September 15, 1831', 'October 30, 1831', 'November 11, 1831'],
    answer: 2,
  },
  {
    topic: "Nat Turner's Rebellion",
    question: 'When was Nat Turner executed?',
    options: ['September 1, 1831', 'October 30, 1831', 'November 11, 1831', 'December 31, 1831'],
    answer: 2,
  },
  {
    topic: "Nat Turner's Rebellion",
    question: "Why did Southern states pass harsher slave laws after Turner's rebellion?",
    options: ['To reward enslaved people who reported rebels', 'To increase fear and control after the revolt', 'To improve conditions on plantations', 'To prevent abolitionist newspapers from spreading'],
    answer: 1,
  },
  {
    topic: "Nat Turner's Rebellion",
    question: 'What was the primary reason Nat Turner believed he should lead a rebellion?',
    options: ['He was promised freedom by a Northern abolitionist', 'He received divine visions commanding him to fight slavery', 'He was planning to escape to Canada', 'He was responding to a British offer of freedom'],
    answer: 1,
  },
  {
    topic: "Nat Turner's Rebellion",
    question: "What did abolitionists call Nat Turner after his execution?",
    options: ['A traitor', 'A martyr', 'A criminal', 'A prophet of war'],
    answer: 1,
  },
  {
    topic: "Nat Turner's Rebellion",
    question: 'Which groups were restricted by new Southern laws passed after the rebellion?',
    options: ['Women and children only', 'Free white workers', 'Enslaved people in education, religion, and movement', 'Northern visitors traveling to the South'],
    answer: 2,
  },
  // The Liberator
  {
    topic: 'The Liberator',
    question: 'In what year was William Lloyd Garrison born?',
    options: ['1790', '1800', '1805', '1815'],
    answer: 2,
  },
  {
    topic: 'The Liberator',
    question: 'When was the first issue of The Liberator published?',
    options: ['July 4, 1829', 'January 1, 1831', 'March 15, 1832', 'August 1, 1833'],
    answer: 1,
  },
  {
    topic: 'The Liberator',
    question: 'In what city was The Liberator published?',
    options: ['New York City', 'Philadelphia', 'Boston', 'Washington D.C.'],
    answer: 2,
  },
  {
    topic: 'The Liberator',
    question: "What was the main goal of William Lloyd Garrison's newspaper The Liberator?",
    options: ['Gradual emancipation', 'Immediate abolition of slavery', 'Expansion of slavery westward', 'Ending the Civil War'],
    answer: 1,
  },
  {
    topic: 'The Liberator',
    question: 'How did Southern states generally react to The Liberator?',
    options: ['They ignored it completely', 'They subscribed to debate its ideas', 'They banned it and some offered rewards for Garrison\'s capture', 'They praised it as a model of free speech'],
    answer: 2,
  },
  {
    topic: 'The Liberator',
    question: "Until what year did Garrison publish The Liberator?",
    options: ['1848', '1861', '1865', '1870'],
    answer: 2,
  },
  {
    topic: 'The Liberator',
    question: 'Which event in 1865 led Garrison to end publication of The Liberator?',
    options: ['The end of the Civil War', 'The ratification of the 13th Amendment abolishing slavery', 'Garrison\'s death', 'A government order to shut it down'],
    answer: 1,
  },
  {
    topic: 'The Liberator',
    question: 'Which of the following was NOT a primary audience for The Liberator?',
    options: ['Northern readers', 'Free Black communities', 'Southern slaveholders', 'Religious reform groups'],
    answer: 2,
  },
  {
    topic: 'The Liberator',
    question: 'Garrison\'s approach to abolition can best be described as:',
    options: ['Gradual — he wanted slow change over generations', 'Violent — he encouraged slave revolts', 'Radical — he demanded immediate and total abolition', 'Moderate — he compromised with slaveholders'],
    answer: 2,
  },
  {
    topic: 'The Liberator',
    question: "Complete this Garrison quote: \"I will not retreat a single inch — and I will be _____.\"",
    options: ['Free', 'Heard', 'Right', 'Silent'],
    answer: 1,
  },
  // Anti-Slavery Society
  {
    topic: 'American Anti-Slavery Society',
    question: 'When was the American Anti-Slavery Society founded?',
    options: ['January 1831', 'July 1832', 'December 1833', 'March 1836'],
    answer: 2,
  },
  {
    topic: 'American Anti-Slavery Society',
    question: 'In what city was the American Anti-Slavery Society founded?',
    options: ['Boston', 'New York City', 'Philadelphia', 'Washington D.C.'],
    answer: 2,
  },
  {
    topic: 'American Anti-Slavery Society',
    question: 'How many delegates attended the founding of the American Anti-Slavery Society?',
    options: ['About 10', 'About 60', 'About 200', 'About 500'],
    answer: 1,
  },
  {
    topic: 'American Anti-Slavery Society',
    question: 'By 1838, how many local chapters did the American Anti-Slavery Society have?',
    options: ['About 100', 'About 500', 'About 1,300', 'About 5,000'],
    answer: 2,
  },
  {
    topic: 'American Anti-Slavery Society',
    question: 'By 1838, approximately how many members did the Anti-Slavery Society have?',
    options: ['25,000', '100,000', '250,000', '1,000,000'],
    answer: 2,
  },
  {
    topic: 'American Anti-Slavery Society',
    question: 'What was "moral persuasion" as used by the Anti-Slavery Society?',
    options: ['Convincing politicians through bribery', 'Using violence to force change', 'Arguing slavery was a sin to convince the public morally', 'Petitioning foreign governments for support'],
    answer: 2,
  },
  {
    topic: 'American Anti-Slavery Society',
    question: 'Which of the following was NOT listed as a major leader of the Anti-Slavery Society?',
    options: ['Frederick Douglass', 'Theodore Weld', 'Andrew Jackson', 'Sarah Grimké'],
    answer: 2,
  },
  {
    topic: 'American Anti-Slavery Society',
    question: 'What distinguished the founding of the Anti-Slavery Society from most other reform organizations of the time?',
    options: ['It was funded by the government', 'It included both Black and white activists', 'It was founded by women only', 'It operated entirely in secret'],
    answer: 1,
  },
  {
    topic: 'American Anti-Slavery Society',
    question: 'How did pro-slavery Americans respond to the Anti-Slavery Society?',
    options: ['They tried to join and change it from inside', 'Mobs attacked abolitionists and riots broke out', 'They filed lawsuits to shut it down', 'They petitioned Europe to intervene'],
    answer: 1,
  },
  {
    topic: 'American Anti-Slavery Society',
    question: 'What was the main significance of the American Anti-Slavery Society?',
    options: ['It ended slavery through peaceful negotiation', 'It transformed abolition into a major national political force', 'It convinced all Southern states to free their slaves voluntarily', 'It wrote the 13th Amendment'],
    answer: 1,
  },
  // Gag Rule
  {
    topic: 'The Gag Rule',
    question: 'On what exact date was the Gag Rule passed?',
    options: ['January 1, 1835', 'March 4, 1836', 'May 26, 1836', 'July 4, 1836'],
    answer: 2,
  },
  {
    topic: 'The Gag Rule',
    question: 'What did the Gag Rule do in Congress?',
    options: ['Banned slavery in the North', 'Prevented discussion of slavery petitions', 'Freed enslaved people in Washington D.C.', 'Allowed slave revolts in border states'],
    answer: 1,
  },
  {
    topic: 'The Gag Rule',
    question: 'Why did Southern representatives push for the Gag Rule?',
    options: ['To protect free speech in Congress', 'To silence abolitionists and prevent debate on slavery', 'To limit the power of Northern states', 'To end the slave trade internationally'],
    answer: 1,
  },
  {
    topic: 'The Gag Rule',
    question: 'Who led the fight against the Gag Rule in Congress?',
    options: ['Abraham Lincoln', 'Andrew Jackson', 'John Quincy Adams', 'Henry Clay'],
    answer: 2,
  },
  {
    topic: 'The Gag Rule',
    question: 'What did John Quincy Adams argue about the Gag Rule?',
    options: ['It was necessary for national unity', 'It protected the rights of slaveholders', 'It violated free speech and the right to petition', 'It was too weak to stop abolitionism'],
    answer: 2,
  },
  {
    topic: 'The Gag Rule',
    question: 'In what year was the Gag Rule finally repealed?',
    options: ['1838', '1840', '1844', '1848'],
    answer: 2,
  },
  {
    topic: 'The Gag Rule',
    question: 'What was the ironic outcome of the Gag Rule?',
    options: ['It successfully ended the abolitionist movement', 'It actually helped the abolitionist movement grow by exposing slaveholder extremism', 'It led to the immediate abolition of slavery in Washington D.C.', 'It caused the Civil War to start early'],
    answer: 1,
  },
  {
    topic: 'The Gag Rule',
    question: 'What were abolitionists demanding in their petitions to Congress?',
    options: ['Higher wages for factory workers in the North', 'Abolition of slavery in D.C., stopping its expansion, and ending the slave trade', 'Voting rights for women', 'Independence from Britain'],
    answer: 1,
  },
  {
    topic: 'The Gag Rule',
    question: 'Which constitutional right did the Gag Rule most directly violate?',
    options: ['The right to bear arms', 'The right to a fair trial', 'The right to petition the government', 'The right to freedom of religion'],
    answer: 2,
  },
  {
    topic: 'The Gag Rule',
    question: 'The Gag Rule turned slavery into what kind of issue?',
    options: ['A settled, resolved debate', 'A major national political issue', 'A purely religious controversy', 'A minor regional dispute'],
    answer: 1,
  },
];

const TOPICS = ['All Topics', "Nat Turner's Rebellion", 'The Liberator', 'American Anti-Slavery Society', 'The Gag Rule'];

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function Quiz() {
  const [selectedTopic, setSelectedTopic] = useState('All Topics');
  const [questions, setQuestions] = useState([]);
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [revealed, setRevealed] = useState(false);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [started, setStarted] = useState(false);
  const [results, setResults] = useState([]);

  const startQuiz = () => {
    const filtered = selectedTopic === 'All Topics'
      ? allQuestions
      : allQuestions.filter((q) => q.topic === selectedTopic);
    const shuffled = shuffle(filtered).slice(0, 10);
    setQuestions(shuffled);
    setCurrent(0);
    setSelected(null);
    setRevealed(false);
    setScore(0);
    setFinished(false);
    setResults([]);
    setStarted(true);
  };

  const handleSelect = (i) => {
    if (revealed) return;
    setSelected(i);
    setRevealed(true);
    const correct = i === questions[current].answer;
    if (correct) setScore((s) => s + 1);
    setResults((prev) => [...prev, { question: questions[current].question, correct, chosen: i, answer: questions[current].answer, options: questions[current].options }]);
  };

  const handleNext = () => {
    if (current + 1 >= questions.length) {
      setFinished(true);
    } else {
      setCurrent((c) => c + 1);
      setSelected(null);
      setRevealed(false);
    }
  };

  const q = questions[current];

  if (!started) {
    return (
      <div className="min-h-screen max-w-2xl mx-auto px-6 py-16">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <p className="font-body text-xs tracking-widest uppercase text-muted-foreground mb-2">Knowledge Check</p>
          <h1 className="font-heading text-4xl font-bold text-foreground mb-3">Quiz</h1>
          <p className="font-body text-muted-foreground text-sm mb-10">
            {allQuestions.length} questions across all four events. Choose a topic or go with all topics.
          </p>

          <div className="bg-card border border-border rounded-xl p-6 space-y-6">
            <div>
              <label className="font-body text-sm font-medium text-foreground mb-3 block">Select Topic</label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {TOPICS.map((t) => (
                  <button
                    key={t}
                    onClick={() => setSelectedTopic(t)}
                    className={`text-left px-4 py-3 rounded-lg border text-sm font-body transition-all ${
                      selectedTopic === t
                        ? 'border-primary bg-primary/10 text-primary font-medium'
                        : 'border-border text-muted-foreground hover:border-border/80 hover:text-foreground'
                    }`}
                  >
                    {t}
                    {t !== 'All Topics' && (
                      <span className="text-xs opacity-60 block mt-0.5">
                        {allQuestions.filter((q) => q.topic === t).length} questions
                      </span>
                    )}
                    {t === 'All Topics' && (
                      <span className="text-xs opacity-60 block mt-0.5">{allQuestions.length} questions</span>
                    )}
                  </button>
                ))}
              </div>
            </div>
            <button
              onClick={startQuiz}
              className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-body font-semibold text-sm hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
            >
              Start Quiz (10 questions) <ChevronRight size={15} />
            </button>
          </div>
        </motion.div>
      </div>
    );
  }

  if (finished) {
    const pct = Math.round((score / questions.length) * 100);
    return (
      <div className="min-h-screen max-w-2xl mx-auto px-6 py-16">
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}>
          <div className="text-center mb-8">
            <Trophy className="w-12 h-12 text-primary mx-auto mb-4" />
            <h1 className="font-heading text-4xl font-bold text-foreground mb-2">Quiz Complete!</h1>
            <p className="font-body text-muted-foreground text-sm">Here's how you did:</p>
          </div>

          <div className="bg-card border border-border rounded-xl p-6 text-center mb-6">
            <div className="text-6xl font-heading font-bold text-primary mb-1">{score}/{questions.length}</div>
            <div className="text-muted-foreground font-body text-sm">{pct}% correct</div>
            <div className={`mt-2 font-body text-sm font-medium ${pct >= 80 ? 'text-green-400' : pct >= 60 ? 'text-amber-400' : 'text-red-400'}`}>
              {pct >= 80 ? 'Excellent! You really know this material.' : pct >= 60 ? 'Good effort! Review the sections you missed.' : 'Keep studying — revisit the Learn page!'}
            </div>
          </div>

          <div className="space-y-3 mb-6">
            {results.map((r, i) => (
              <div key={i} className={`p-4 rounded-lg border ${r.correct ? 'border-green-700/40 bg-green-950/20' : 'border-red-700/40 bg-red-950/20'}`}>
                <div className="flex items-start gap-2 mb-2">
                  {r.correct ? <CheckCircle size={15} className="text-green-400 mt-0.5 shrink-0" /> : <XCircle size={15} className="text-red-400 mt-0.5 shrink-0" />}
                  <p className="font-body text-sm text-foreground leading-snug">{r.question}</p>
                </div>
                {!r.correct && (
                  <p className="font-body text-xs text-green-400 pl-5">Correct: {r.options[r.answer]}</p>
                )}
              </div>
            ))}
          </div>

          <div className="flex gap-3">
            <button onClick={startQuiz} className="flex-1 bg-primary text-primary-foreground py-3 rounded-lg font-body font-semibold text-sm hover:bg-primary/90 transition-colors flex items-center justify-center gap-2">
              <RotateCcw size={14} /> Retake
            </button>
            <button onClick={() => setStarted(false)} className="flex-1 border border-border text-foreground py-3 rounded-lg font-body font-semibold text-sm hover:bg-secondary transition-colors">
              Change Topic
            </button>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen max-w-2xl mx-auto px-6 py-16">
      <div className="flex items-center justify-between mb-8">
        <div>
          <p className="font-body text-xs tracking-widest uppercase text-muted-foreground">Quiz</p>
          <p className="font-body text-sm text-muted-foreground mt-0.5">Question {current + 1} of {questions.length}</p>
        </div>
        <div className="font-heading text-lg font-bold text-primary">{score} pts</div>
      </div>

      {/* Progress */}
      <div className="w-full bg-secondary h-1.5 rounded-full mb-8">
        <motion.div
          className="h-1.5 bg-primary rounded-full"
          animate={{ width: `${((current + (revealed ? 1 : 0)) / questions.length) * 100}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.25 }}
        >
          <div className="mb-2">
            <span className="font-body text-xs text-muted-foreground bg-secondary px-2.5 py-0.5 rounded-full">{q.topic}</span>
          </div>
          <h2 className="font-heading text-xl font-bold text-foreground mb-6 leading-snug">{q.question}</h2>

          <div className="space-y-3 mb-6">
            {q.options.map((opt, i) => {
              let style = 'border-border text-foreground hover:border-border/80 hover:bg-secondary/30';
              if (revealed) {
                if (i === q.answer) style = 'border-green-500/60 bg-green-950/30 text-green-300';
                else if (i === selected && i !== q.answer) style = 'border-red-500/60 bg-red-950/30 text-red-300';
                else style = 'border-border text-muted-foreground opacity-50';
              } else if (selected === i) {
                style = 'border-primary bg-primary/10 text-primary';
              }
              return (
                <button
                  key={i}
                  onClick={() => handleSelect(i)}
                  className={`w-full text-left px-4 py-3.5 rounded-lg border font-body text-sm transition-all ${style} ${!revealed ? 'cursor-pointer' : 'cursor-default'}`}
                >
                  <span className="font-medium mr-2">{['A', 'B', 'C', 'D'][i]}.</span>
                  {opt}
                </button>
              );
            })}
          </div>

          {revealed && (
            <motion.div initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }}>
              <div className={`flex items-center gap-2 mb-4 ${selected === q.answer ? 'text-green-400' : 'text-red-400'}`}>
                {selected === q.answer ? <CheckCircle size={16} /> : <XCircle size={16} />}
                <span className="font-body text-sm font-medium">
                  {selected === q.answer ? 'Correct!' : `Incorrect. The answer was: ${q.options[q.answer]}`}
                </span>
              </div>
              <button
                onClick={handleNext}
                className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-body font-semibold text-sm hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
              >
                {current + 1 >= questions.length ? 'See Results' : 'Next Question'} <ChevronRight size={15} />
              </button>
            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}