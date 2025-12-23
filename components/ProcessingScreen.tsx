import React, { useEffect, useState } from 'react';
import { Loader2 } from 'lucide-react';

interface ProcessingScreenProps {
  onComplete: () => void;
}

export const ProcessingScreen: React.FC<ProcessingScreenProps> = ({ onComplete }) => {
  const [message, setMessage] = useState("Recebendo suas respostas...");

  useEffect(() => {
    const timer1 = setTimeout(() => setMessage("Analisando seu coração..."), 1500);
    const timer2 = setTimeout(() => setMessage("Buscando direção espiritual..."), 3000);
    const timer3 = setTimeout(() => onComplete(), 4500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [onComplete]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center animate-fade-in">
      <div className="relative mb-8">
        <div className="absolute inset-0 bg-spiritual-gold/20 rounded-full blur-xl animate-pulse-slow"></div>
        <Loader2 className="w-12 h-12 text-spiritual-gold animate-spin relative z-10" />
      </div>
      
      <h3 className="text-xl font-serif italic text-spiritual-text mb-2 animate-fade-in key-{message}">
        {message}
      </h3>
      <p className="text-xs font-sans text-stone-400 uppercase tracking-widest mt-4">
        Aguarde um momento
      </p>
    </div>
  );
};
