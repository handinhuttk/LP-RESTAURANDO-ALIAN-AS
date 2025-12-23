import React from 'react';
import { Sparkles } from 'lucide-react';

interface WelcomeScreenProps {
  onStart: () => void;
}

export const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onStart }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 bg-spiritual-50 text-center animate-fade-in relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-spiritual-gold/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-spiritual-lilac/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>

      <div className="relative z-10 max-w-lg">
        <div className="flex justify-center mb-6">
            <Sparkles className="w-8 h-8 text-spiritual-gold opacity-60" />
        </div>
        
        <h1 className="font-serif text-4xl md:text-5xl text-spiritual-text mb-6 leading-tight">
          Caminho da <br/> <span className="italic text-spiritual-gold">Restauração</span>
        </h1>
        
        <p className="font-sans font-light text-stone-600 mb-10 leading-relaxed">
          Respire fundo. Este é um espaço seguro. <br/>
          Vamos entender o que Deus quer falar ao seu coração sobre o seu relacionamento hoje.
        </p>

        <button 
          onClick={onStart}
          className="bg-white border border-spiritual-gold text-spiritual-text hover:bg-spiritual-gold hover:text-white px-10 py-4 rounded-full font-sans uppercase tracking-[0.2em] text-xs transition-all duration-500 shadow-sm"
        >
          Iniciar Quiz
        </button>
      </div>
    </div>
  );
};
