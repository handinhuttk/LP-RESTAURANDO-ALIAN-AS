import React from 'react';
import { Question } from '../types';

interface QuizCardProps {
  question: Question;
  onSelectOption: (optionId: string) => void;
  isExiting: boolean;
}

export const QuizCard: React.FC<QuizCardProps> = ({ question, onSelectOption, isExiting }) => {
  return (
    <div 
      className={`max-w-md w-full mx-auto px-6 py-8 transition-opacity duration-500 ease-in-out ${isExiting ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0 animate-fade-in'}`}
    >
      <div className="text-center mb-8">
        <span className="text-spiritual-gold uppercase tracking-[0.2em] text-xs font-sans font-medium mb-2 block">
          {question.title}
        </span>
        <h2 className="text-2xl md:text-3xl font-serif text-spiritual-text italic leading-relaxed">
          {question.question}
        </h2>
      </div>

      <div className="space-y-4">
        {question.options.map((option) => (
          <button
            key={option.id}
            onClick={() => onSelectOption(option.id)}
            disabled={isExiting}
            className="w-full bg-white border border-spiritual-100 rounded-xl p-5 text-left shadow-sm hover:shadow-md hover:border-spiritual-gold/40 hover:bg-spiritual-50 transition-all duration-300 group disabled:cursor-not-allowed disabled:opacity-50"
          >
            <span className="text-spiritual-text font-sans text-sm md:text-base font-light group-hover:text-stone-900 transition-colors">
              {option.text}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};
