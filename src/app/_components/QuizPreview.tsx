"use client";

import { useState } from "react";
import {
  getHighestOccupation,
  getHighestPillar,
  INITIAL_OCCUPATION_SCORES,
  INITIAL_PILLAR_SCORES,
  questions,
  type AnswerOption,
  type Occupation,
  type Pillar,
} from "@/lib/quiz-data";
import { QuizResultCard } from "./quiz-result-card";

/**
 * Homepage teaser version of the Career Quiz. Same questions, same
 * scoring, same result UI as `src/app/students/quiz/page.tsx` — both
 * surfaces import from `src/lib/quiz-data.ts` and render the result
 * via the shared `<QuizResultCard />`. This component only owns the
 * teaser layout (eyebrow + heading + progress dots on the left, the
 * active question card on the right) and the per-question state.
 */
export function QuizPreview() {
  const [step, setStep] = useState(0);
  const [pillarScores, setPillarScores] = useState<Record<Pillar, number>>(
    () => ({ ...INITIAL_PILLAR_SCORES }),
  );
  const [occupationScores, setOccupationScores] = useState<
    Record<Occupation, number>
  >(() => ({ ...INITIAL_OCCUPATION_SCORES }));
  const [result, setResult] = useState<{
    pillar: Pillar;
    occupation: Occupation;
  } | null>(null);

  const currentQuestion = questions[step];

  function reset() {
    setStep(0);
    setPillarScores({ ...INITIAL_PILLAR_SCORES });
    setOccupationScores({ ...INITIAL_OCCUPATION_SCORES });
    setResult(null);
  }

  function pick(option: AnswerOption) {
    if (result) return;

    const updatedPillarScores = { ...pillarScores };
    const updatedOccupationScores = { ...occupationScores };

    for (const [pillar, points] of Object.entries(option.scores)) {
      updatedPillarScores[pillar as Pillar] += points ?? 0;
    }
    if (option.occupations) {
      for (const [occupation, points] of Object.entries(option.occupations)) {
        updatedOccupationScores[occupation as Occupation] += points ?? 0;
      }
    }

    const isFinalQuestion = step === questions.length - 1;
    if (isFinalQuestion) {
      const winningPillar = getHighestPillar(updatedPillarScores);
      const winningOccupation = getHighestOccupation(
        winningPillar,
        updatedOccupationScores,
      );
      setPillarScores(updatedPillarScores);
      setOccupationScores(updatedOccupationScores);
      setResult({ pillar: winningPillar, occupation: winningOccupation });
      return;
    }

    setPillarScores(updatedPillarScores);
    setOccupationScores(updatedOccupationScores);
    setStep((s) => s + 1);
  }

  return (
    <section id="quiz" className="bg-tnky-cream py-20 md:py-24">
      <div className="max-w-content mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-10 lg:gap-14 items-center">
          <div>
            <div className="font-display font-extrabold uppercase text-eyebrow text-tnky-blue mb-3.5">
              5-minute career quiz
            </div>
            <h2 className="font-display italic font-extrabold text-section">
              What might suit you?
            </h2>
            <div
              aria-hidden="true"
              className="mt-3 mb-card h-[3px] w-14 rounded-full bg-tnky-safety"
            />
            <p className="text-tnky-mute text-lead max-w-lead [text-wrap:pretty]">
              Ten quick questions. We&apos;ll point you at the trades that
              match how you already think and what you already love doing.
            </p>
            <div className="flex flex-wrap gap-1.5 mt-pill-x">
              {questions.map((_, i) => (
                <span
                  key={i}
                  className={
                    "w-5 h-dot rounded-xs transition-all duration-200 " +
                    (i < step || result ? "bg-tnky-blue" : "bg-tnky-cream-3") +
                    (i === step && !result ? " bg-tnky-blue scale-y-160" : "")
                  }
                />
              ))}
            </div>
          </div>

          {result ? (
            // Identical result experience to the full quiz page —
            // shared `<QuizResultCard />` renders the pillar-colored
            // box, recommended occupation, Explore link, and Retake.
            <QuizResultCard
              pillar={result.pillar}
              occupation={result.occupation}
              onReset={reset}
            />
          ) : (
            <div className="bg-tnky-white border border-tnky-edge rounded-3xl p-8 shadow-tnky-3">
              <div className="font-display font-extrabold text-meta uppercase tracking-eyebrow text-tnky-blue mb-2.5">
                Question {step + 1} of {questions.length}
              </div>
              <div className="font-display font-extrabold text-stat-md leading-tight mb-pill-x">
                {currentQuestion.question}
              </div>
              <div className="flex flex-col gap-2.5">
                {currentQuestion.options.map((option, i) => (
                  <button
                    key={option.label}
                    onClick={() => pick(option)}
                    className="flex items-center gap-3.5 px-4 py-3.5 rounded-2xl border border-tnky-edge bg-tnky-white text-tnky-ink text-button text-left transition-colors duration-200 hover:border-tnky-blue hover:bg-tnky-blue-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tnky-blue focus-visible:ring-offset-2 focus-visible:ring-offset-tnky-white"
                  >
                    <span className="w-7 h-7 rounded-lg bg-tnky-blue-100 text-tnky-blue flex items-center justify-center font-display font-extrabold text-mini">
                      {String.fromCharCode(65 + i)}
                    </span>
                    <span>{option.label}</span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
