import React, { useState, useRef } from 'react';
import { questions } from './data';
import { ScreenState, UserAnswers } from './types';
import { WelcomeScreen } from './components/WelcomeScreen';
import { QuizCard } from './components/QuizCard';
import { ProcessingScreen } from './components/ProcessingScreen';
import { ResultScreen } from './components/ResultScreen';
import { OfferScreen } from './components/OfferScreen';
import { useTracking } from './src/hooks/useTracking';

const App: React.FC = () => {
  const [screen, setScreen] = useState<ScreenState>('intro');
  
  // Inicializa o sistema de rastreamento
  useTracking(screen);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<UserAnswers>({});
  const [isExiting, setIsExiting] = useState(false);
  const offerRef = useRef<HTMLDivElement>(null);

  const handleStart = () => {
    setScreen('quiz');
  };

  const handleAnswer = (optionId: string) => {
    if (isExiting) return;

    const currentQuestion = questions[currentQuestionIndex];
    if (!currentQuestion) return;

    // Record answer
    setAnswers(prev => ({ ...prev, [currentQuestion.id]: optionId }));

    // Trigger exit animation
    setIsExiting(true);

    setTimeout(() => {
      setIsExiting(false);
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(prev => prev + 1);
        // Scroll to top on mobile
        window.scrollTo(0, 0);
      } else {
        setScreen('analyzing');
      }
    }, 500); // Wait for animation
  };

  const handleAnalysisComplete = () => {
    setScreen('result');
  };

  const handleShowOffer = () => {
    setScreen('offer');
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  // Progress Bar Calculation
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="min-h-screen font-sans selection:bg-spiritual-gold/20 selection:text-spiritual-text">
      
      {screen === 'intro' && (
        <WelcomeScreen onStart={handleStart} />
      )}

      {screen === 'quiz' && currentQuestion && (
        <div className="min-h-screen flex flex-col bg-spiritual-50 relative">
          {/* Minimalist Gold Progress Bar */}
          <div className="w-full h-1.5 bg-spiritual-200/30 fixed top-0 left-0 z-50">
            <div 
              className="h-full bg-spiritual-gold transition-all duration-700 ease-out shadow-[0_2px_8px_rgba(212,175,55,0.4)]" 
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          
          <div className="flex-1 flex flex-col items-center justify-center p-6 animate-fade-in">
             {/* Elegant Question Counter */}
             <div className="mb-8 text-[10px] uppercase tracking-[0.2em] text-stone-400 font-sans font-medium">
               PERGUNTA {currentQuestionIndex + 1} <span className="text-spiritual-gold/60 mx-2">•</span> {questions.length}
             </div>

             <QuizCard 
               question={currentQuestion} 
               onSelectOption={handleAnswer} 
               isExiting={isExiting}
             />
          </div>
        </div>
      )}

      {screen === 'analyzing' && (
        <ProcessingScreen onComplete={handleAnalysisComplete} />
      )}

      {screen === 'result' && (
        <ResultScreen answers={answers} onNext={handleShowOffer} />
      )}

      {screen === 'offer' && (
        <div ref={offerRef}>
          <OfferScreen />
        </div>
      )}
    </div>
  );
};

export default App;