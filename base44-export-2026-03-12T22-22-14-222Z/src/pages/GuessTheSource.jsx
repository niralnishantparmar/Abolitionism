import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, XCircle, RotateCcw, Trophy, Quote } from 'lucide-react';

const quotes = [
  {
    quote: "I will be as harsh as truth and as uncompromising as justice… I will not retreat a single inch — and I will be heard.",
    source: "William Lloyd Garrison",
    context: "The Liberator, Issue #1, January 1, 1831",
    hint: "Written in a famous abolitionist newspaper's first issue.",
    options: ["Nat Turner", "William Lloyd Garrison", "John Quincy Adams", "Frederick Douglass"],
    answer: 1,
  },
  {
    quote: "I had a vision — and I saw white spirits and black spirits engaged in battle, and the sun was darkened — the thunder rolled in the heavens.",
    source: "Nat Turner",
    context: "As recorded in The Confessions of Nat Turner, 1831",
    hint: "Spoken by the leader of the 1831 slave rebellion before his execution.",
    options: ["Frederick Douglass", "William Lloyd Garrison", "Nat Turner", "Theodore Weld"],
    answer: 2,
  },
  {
    quote: "Slavery is contrary to the principles of natural justice, of our republican form of government, and of the Christian religion.",
    source: "American Anti-Slavery Society",
    context: "Declaration of Sentiments of the American Anti-Slavery Society, 1833",
    hint: "Declared at the founding meeting of a major abolitionist organization in Philadelphia.",
    options: ["John Quincy Adams", "American Anti-Slavery Society", "William Lloyd Garrison", "Abraham Lincoln"],
    answer: 1,
  },
  {
    quote: "The right of the people to petition the government for a redress of grievances shall not be infringed — yet this House silences us.",
    source: "John Quincy Adams",
    context: "Speech in the House of Representatives opposing the Gag Rule, 1836–1844",
    hint: "Spoken by a former president who fought tirelessly against congressional suppression of anti-slavery petitions.",
    options: ["John Quincy Adams", "Nat Turner", "William Lloyd Garrison", "Lewis Tappan"],
    answer: 0,
  },
  {
    quote: "Every Fourth of July your celebration is a sham; your boasted liberty, an unholy license; your national greatness, swelling vanity.",
    source: "Frederick Douglass",
    context: "\"What to the Slave is the Fourth of July?\" — Frederick Douglass, 1852",
    hint: "Spoken by a formerly enslaved man and leading abolitionist who was associated with the Anti-Slavery Society.",
    options: ["William Lloyd Garrison", "Nat Turner", "Frederick Douglass", "John Quincy Adams"],
    answer: 2,
  },
  {
    quote: "I am not a gradualist. I will not equivocate. I will not excuse. I will not retreat a single inch.",
    source: "William Lloyd Garrison",
    context: "The Liberator, paraphrased from multiple editorials, 1831–1865",
    hint: "The publisher of The Liberator describing his uncompromising abolitionist stance.",
    options: ["Theodore Weld", "William Lloyd Garrison", "Arthur Tappan", "Frederick Douglass"],
    answer: 1,
  },
  {
    quote: "The time is come when the question of abolishing slavery is to be decided in Congress. We shall petition until we are heard.",
    source: "John Quincy Adams",
    context: "Spoken in Congress in defiance of the Gag Rule, circa 1836–1844",
    hint: "A former president who spent his post-presidential career fighting for the right to petition Congress on slavery.",
    options: ["Henry Clay", "John Quincy Adams", "Andrew Jackson", "William Lloyd Garrison"],
    answer: 1,
  },
  {
    quote: "We have met here to declare the immediate and unconditional abolition of slavery throughout the land.",
    source: "American Anti-Slavery Society",
    context: "Founding convention statement, Philadelphia, December 1833",
    hint: "Announced at the founding gathering of approximately 60 Black and white delegates in 1833.",
    options: ["American Anti-Slavery Society", "William Lloyd Garrison", "Nat Turner", "Angelina Grimké"],
    answer: 0,
  },
  {
    quote: "I heard a loud noise in the heavens, and the Spirit instantly appeared to me and said the Serpent was loosened.",
    source: "Nat Turner",
    context: "The Confessions of Nat Turner, as told to Thomas Gray, November 1831",
    hint: "Spoken by a man who believed he was divinely chosen to lead an uprising against slavery in Virginia.",
    options: ["William Lloyd Garrison", "Frederick Douglass", "John Quincy Adams", "Nat Turner"],
    answer: 3,
  },
  {
    quote: "Moral suasion is moral balderdash unless backed by action. Slavery will not end with pamphlets alone.",
    source: "Frederick Douglass",
    context: "Paraphrased from Douglass's 1849 break with Garrison over political strategy",
    hint: "A formerly enslaved abolitionist who later argued that the movement needed more than moral arguments to succeed.",
    options: ["Frederick Douglass", "William Lloyd Garrison", "Theodore Weld", "John Quincy Adams"],
    answer: 0,
  },
];

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function GuessTheSource() {
  const [qs, setQs] = useState([]);
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [revealed, setRevealed] = useState(false);
  const [score, setScore] = useState(0);
  const [showHint, setShowHint] = useState(false);
  const [finished, setFinished] = useState(false);
  const [results, setResults] = useState([]);
  const [started, setStarted] = useState(false);

  const startGame = () => {
    setQs(shuffle(quotes));
    setCurrent(0);
    setSelected(null);
    setRevealed(false);
    setScore(0);
    setShowHint(false);
    setFinished(false);
    setResults([]);
    setStarted(true);
  };

  const handleSelect = (i) => {
    if (revealed) return;
    setSelected(i);
    setRevealed(true);
    const correct = i === qs[current].answer;
    if (correct) setScore((s) => s + 1);
    setResults((prev) => [...prev, { ...qs[current], chosen: i, correct }]);
  };

  const handleNext = () => {
    if (current + 1 >= qs.length) {
      setFinished(true);
    } else {
      setCurrent((c) => c + 1);
      setSelected(null);
      setRevealed(false);
      setShowHint(false);
    }
  };

  const q = qs[current];

  if (!started) {
    return (
      <div className="min-h-screen max-w-2xl mx-auto px-6 py-16">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center">
          <Quote className="w-12 h-12 text-primary mx-auto mb-6" />
          <p className="font-body text-xs tracking-widest uppercase text-muted-foreground mb-2">Mini Game</p>
          <h1 className="font-heading text-4xl font-bold text-foreground mb-3">Guess The Source</h1>
          <p className="font-body text-muted-foreground text-base max-w-lg mx-auto mb-3 leading-relaxed">
            You'll be shown a historical quote from the Abolitionism era. Your job: guess who said it or where it came from.
          </p>
          <p className="font-body text-muted-foreground text-sm mb-8">{quotes.length} quotes · Use hints if you're stuck</p>
          <div className="bg-card border border-border rounded-xl p-6 text-left mb-6">
            <p className="font-body text-sm text-muted-foreground font-medium mb-3">How to play:</p>
            <ul className="space-y-2">
              {[
                'Read the quote carefully',
                'Select who you think said or wrote it',
                'Use the Hint button if you need a clue (no penalty!)',
                'Find out the full context after each answer',
              ].map((s, i) => (
                <li key={i} className="flex items-center gap-2 font-body text-sm text-foreground/80">
                  <span className="w-5 h-5 bg-primary/20 text-primary text-xs rounded-full flex items-center justify-center font-bold shrink-0">{i + 1}</span>
                  {s}
                </li>
              ))}
            </ul>
          </div>
          <button
            onClick={startGame}
            className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-body font-semibold text-sm hover:bg-primary/90 transition-colors"
          >
            Start Game
          </button>
        </motion.div>
      </div>
    );
  }

  if (finished) {
    const pct = Math.round((score / qs.length) * 100);
    return (
      <div className="min-h-screen max-w-2xl mx-auto px-6 py-16">
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}>
          <div className="text-center mb-8">
            <Trophy className="w-12 h-12 text-primary mx-auto mb-4" />
            <h1 className="font-heading text-4xl font-bold text-foreground mb-2">Game Over!</h1>
            <p className="font-body text-muted-foreground text-sm">Here's your final score:</p>
          </div>

          <div className="bg-card border border-border rounded-xl p-6 text-center mb-6">
            <div className="text-6xl font-heading font-bold text-primary mb-1">{score}/{qs.length}</div>
            <div className="text-muted-foreground font-body text-sm">{pct}% correct</div>
            <div className={`mt-2 font-body text-sm font-medium ${pct >= 80 ? 'text-green-400' : pct >= 60 ? 'text-amber-400' : 'text-red-400'}`}>
              {pct >= 80 ? 'History expert!' : pct >= 60 ? 'Pretty good! Study those quotes.' : 'Check the Learn page and try again!'}
            </div>
          </div>

          <div className="space-y-3 mb-6">
            {results.map((r, i) => (
              <div key={i} className={`p-4 rounded-lg border ${r.correct ? 'border-green-700/40 bg-green-950/20' : 'border-red-700/40 bg-red-950/20'}`}>
                <div className="flex items-start gap-2 mb-2">
                  {r.correct ? <CheckCircle size={14} className="text-green-400 shrink-0 mt-0.5" /> : <XCircle size={14} className="text-red-400 shrink-0 mt-0.5" />}
                  <p className="font-heading italic text-sm text-foreground/90 leading-snug">"{r.quote.length > 80 ? r.quote.slice(0, 80) + '…' : r.quote}"</p>
                </div>
                <p className="font-body text-xs text-primary pl-5">— {r.source}</p>
                <p className="font-body text-xs text-muted-foreground pl-5 mt-0.5">{r.context}</p>
                {!r.correct && (
                  <p className="font-body text-xs text-red-300 pl-5 mt-1">You chose: {r.options[r.chosen]}</p>
                )}
              </div>
            ))}
          </div>

          <div className="flex gap-3">
            <button onClick={startGame} className="flex-1 bg-primary text-primary-foreground py-3 rounded-lg font-body font-semibold text-sm hover:bg-primary/90 transition-colors flex items-center justify-center gap-2">
              <RotateCcw size={14} /> Play Again
            </button>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen max-w-2xl mx-auto px-6 py-16">
      <div className="flex items-center justify-between mb-6">
        <div>
          <p className="font-body text-xs tracking-widest uppercase text-muted-foreground">Guess The Source</p>
          <p className="font-body text-sm text-muted-foreground mt-0.5">Quote {current + 1} of {qs.length}</p>
        </div>
        <div className="font-heading text-lg font-bold text-primary">{score} pts</div>
      </div>

      {/* Progress */}
      <div className="w-full bg-secondary h-1.5 rounded-full mb-8">
        <motion.div
          className="h-1.5 bg-primary rounded-full"
          animate={{ width: `${((current + (revealed ? 1 : 0)) / qs.length) * 100}%` }}
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
          {/* Quote display */}
          <div className="bg-card border border-border rounded-xl p-6 mb-6 relative">
            <Quote className="text-primary/20 w-10 h-10 absolute top-4 right-4" />
            <p className="font-heading italic text-foreground text-lg sm:text-xl leading-relaxed mb-4">
              "{q.quote}"
            </p>
            <div className="flex items-center justify-between">
              <p className="font-body text-xs text-muted-foreground">Who said this?</p>
              {!revealed && (
                <button
                  onClick={() => setShowHint(true)}
                  className="font-body text-xs text-primary underline underline-offset-2 hover:text-primary/80 transition-colors"
                >
                  {showHint ? 'Hint shown' : 'Show Hint'}
                </button>
              )}
            </div>
            <AnimatePresence>
              {showHint && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-3 pt-3 border-t border-border/50"
                >
                  <p className="font-body text-sm text-amber-300/80 italic">💡 {q.hint}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Options */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
            {q.options.map((opt, i) => {
              let style = 'border-border text-foreground hover:border-border/80 hover:bg-secondary/30';
              if (revealed) {
                if (i === q.answer) style = 'border-green-500/60 bg-green-950/30 text-green-300';
                else if (i === selected && i !== q.answer) style = 'border-red-500/60 bg-red-950/30 text-red-300';
                else style = 'border-border text-muted-foreground opacity-40';
              }
              return (
                <button
                  key={i}
                  onClick={() => handleSelect(i)}
                  className={`text-left px-4 py-3.5 rounded-lg border font-body text-sm transition-all ${style} ${!revealed ? 'cursor-pointer' : 'cursor-default'}`}
                >
                  {opt}
                </button>
              );
            })}
          </div>

          {/* Reveal */}
          {revealed && (
            <motion.div initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }}>
              <div className={`flex items-center gap-2 mb-2 ${selected === q.answer ? 'text-green-400' : 'text-red-400'}`}>
                {selected === q.answer ? <CheckCircle size={16} /> : <XCircle size={16} />}
                <span className="font-body text-sm font-medium">
                  {selected === q.answer ? `Correct! — ${q.source}` : `Not quite. It was ${q.source}`}
                </span>
              </div>
              <p className="font-body text-xs text-muted-foreground mb-4 pl-6">{q.context}</p>
              <button
                onClick={handleNext}
                className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-body font-semibold text-sm hover:bg-primary/90 transition-colors"
              >
                {current + 1 >= qs.length ? 'See Final Score' : 'Next Quote'}
              </button>
            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}