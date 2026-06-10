"use client";

import { useMemo, useState } from "react";
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
import { QuizResultCard } from "../../_components/quiz-result-card";

export default function CareerQuizPage() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [result, setResult] = useState<{
    pillar: Pillar;
    occupation: Occupation;
  } | null>(null);

  const [pillarScores, setPillarScores] = useState<Record<Pillar, number>>(
    () => ({ ...INITIAL_PILLAR_SCORES }),
  );

  const [occupationScores, setOccupationScores] = useState<
    Record<Occupation, number>
  >(() => ({ ...INITIAL_OCCUPATION_SCORES }));

  const currentQuestion = questions[currentQuestionIndex];

  const progressPercent = useMemo(() => {
    // 0% on Q1, 100% only after the final answer is selected (when
    // currentQuestionIndex passes the last question and `result` is set).
    return (currentQuestionIndex / questions.length) * 100;
  }, [currentQuestionIndex]);

  function resetQuiz() {
    setCurrentQuestionIndex(0);
    setPillarScores({ ...INITIAL_PILLAR_SCORES });
    setOccupationScores({ ...INITIAL_OCCUPATION_SCORES });
    setResult(null);
    setIsTransitioning(false);
  }

  function handleAnswer(option: AnswerOption) {
    if (isTransitioning || result) return;

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

    setPillarScores(updatedPillarScores);
    setOccupationScores(updatedOccupationScores);
    setIsTransitioning(true);

    window.setTimeout(() => {
      const isFinalQuestion = currentQuestionIndex === questions.length - 1;

      if (isFinalQuestion) {
        const winningPillar = getHighestPillar(updatedPillarScores);
        // getHighestOccupation filters by occupationsByPillar[winningPillar],
        // so only occupations belonging to the winning pillar can win.
        // Passing the local `updatedOccupationScores` (not state) guarantees
        // the final question's points are included.
        const winningOccupation = getHighestOccupation(
          winningPillar,
          updatedOccupationScores,
        );

        if (process.env.NODE_ENV !== "production") {
          console.log("[Quiz] Final pillar scores:", updatedPillarScores);
          console.log(
            "[Quiz] Final occupation scores:",
            updatedOccupationScores,
          );
          console.log("[Quiz] Winning pillar:", winningPillar);
          console.log("[Quiz] Winning occupation:", winningOccupation);
        }

        setResult({
          pillar: winningPillar,
          occupation: winningOccupation,
        });

        return;
      }

      setCurrentQuestionIndex((index) => index + 1);
      setIsTransitioning(false);
    }, 250);
  }

  return (
    <main
      className="bg-tnky-cream px-4 py-4 text-tnky-ink sm:px-6 lg:px-8"
      style={{ minHeight: "calc(100vh - var(--nav-h, 64px))" }}
    >
      <section className="mx-auto flex max-w-3xl flex-col items-center text-center">
        <h1 className="font-display font-extrabold italic text-2xl sm:text-3xl text-tnky-ink">
          Career Quiz
        </h1>
        {/* Short tnky-safety underline — matches Five Pillars / TradesNKY Pathway treatment */}
        <div
          aria-hidden="true"
          className="mt-2 h-[3px] w-12 rounded-full bg-tnky-safety"
        />
      </section>

      <section className="mx-auto mt-3 max-w-3xl">
        {!result ? (
          <div
            className={`rounded-3xl bg-white p-4 shadow-lg transition-all duration-300 ${
              isTransitioning
                ? "translate-y-2 opacity-0"
                : "translate-y-0 opacity-100"
            }`}
          >
            <div className="mb-6">
              <div className="mb-3 flex items-center justify-between gap-4">
                <p className="text-sm font-semibold uppercase tracking-wide text-tnky-ink/70">
                  Question {currentQuestionIndex + 1} of {questions.length}
                </p>

                <p className="text-sm font-semibold text-tnky-ink">
                  {Math.round(progressPercent)}%
                </p>
              </div>

              <div className="h-3 overflow-hidden rounded-full bg-tnky-ink/10">
                <div
                  className="h-full rounded-full bg-tnky-safety transition-all duration-300"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
            </div>

            <h2 className="w-full text-2xl font-bold sm:text-3xl">
              {currentQuestion.question}
            </h2>

            <div className="mt-6 grid gap-3">
              {currentQuestion.options.map((option) => (
                <button
                  key={option.label}
                  type="button"
                  onClick={() => handleAnswer(option)}
                  className="rounded-2xl border-2 border-tnky-ink/10 bg-white p-5 text-left text-base font-semibold shadow-sm transition hover:-translate-y-0.5 hover:border-tnky-safety hover:bg-tnky-safety/20 hover:shadow-md focus:outline-none focus:ring-4 focus:ring-tnky-safety/40 sm:text-lg"
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <QuizResultCard
            pillar={result.pillar}
            occupation={result.occupation}
            onReset={resetQuiz}
          />
        )}
      </section>
    </main>
  );
}
