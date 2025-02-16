"use client";
import React, { useState, useCallback } from "react";
import { AlertCircle, CheckCircle, RefreshCw } from "lucide-react";

interface QuizProps {
  question: string;
  options: string[];
  correctAnswer: string;
}

interface OptionProps {
  option: string;
  isSelected: boolean;
  isIncorrect: boolean;
  onClick: () => void;
}

const Option: React.FC<OptionProps> = ({
  option,
  isSelected,
  isIncorrect,
  onClick,
}) => (
  <button
    onClick={onClick}
    className={`
      w-full mb-2 py-2 px-4 text-left rounded-md transition-colors text-base border hover:cursor-pointer
      ${
        isSelected && isIncorrect
          ? "bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 hover:bg-red-200 dark:hover:bg-red-900/50"
          : "bg-fd-background text-fd-muted-foreground hover:bg-fd-card "
      }
    `}
  >
    {option}
  </button>
);

const CorrectAnswer: React.FC<{ answer: string }> = ({ answer }) => (
  <div className="p-4 bg-green-100 dark:bg-green-900/30 rounded-md">
    <div className="flex items-center mb-2">
      <CheckCircle className="w-6 h-6 text-green-500 dark:text-green-400 mr-2" />
      <p className="text-green-700 dark:text-green-300 font-medium">
        Correct! Well done!
      </p>
    </div>
    <p className="text-green-600 dark:text-green-400">The correct answer is:</p>
    <p className="mt-2 text-green-800 dark:text-green-200 font-semibold">
      {answer}
    </p>
  </div>
);

export const Quiz: React.FC<QuizProps> = ({
  question,
  options,
  correctAnswer,
}) => {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const handleAnswerClick = useCallback(
    (answer: string) => {
      setSelectedAnswer(answer);
      setIsCorrect(answer === correctAnswer);
    },
    [correctAnswer]
  );

  const resetQuiz = useCallback(() => {
    setSelectedAnswer(null);
    setIsCorrect(null);
  }, []);

  return (
    <div className="w-full mx-auto not-prose bg-fd-card border shadow-md rounded-lg overflow-hidden">
      <div className="p-6">
        <h2 className="text-lg font-medium mb-4">{question}</h2>
        <div className="space-y-2">
          {isCorrect ? (
            <CorrectAnswer answer={correctAnswer} />
          ) : (
            options.map((option, index) => (
              <Option
                key={index}
                option={option}
                isSelected={selectedAnswer === option}
                isIncorrect={selectedAnswer === option && !isCorrect}
                onClick={() => handleAnswerClick(option)}
              />
            ))
          )}
        </div>
      </div>
      <div className="px-6 py-4 bg-fd-card border-t flex justify-between items-center">
        <div>
          {isCorrect === false && (
            <div className="flex items-center text-red-500 dark:text-red-400">
              <AlertCircle className="w-4 h-4 mr-1" />
              <span className="text-sm">Incorrect. Try again!</span>
            </div>
          )}
        </div>
        <button
          onClick={resetQuiz}
          className="flex gap-2 items-center p-2 py-1 rounded-md transition-colors hover:bg-fd-background"
        >
          <RefreshCw className="w-4 h-4 mr-1" />
          Reset
        </button>
      </div>
    </div>
  );
};
