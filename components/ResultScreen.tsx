import React from 'react';
import { UserAnswers } from '../types';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

interface ResultScreenProps {
  answers: UserAnswers;
  onNext: () => void;
}

export const ResultScreen: React.FC<ResultScreenProps> = ({ answers, onNext }) => {
  return (
    <div className="min-h-screen bg-spiritual-50 animate-fade-in pb-12">
      <div className="max-w-2xl mx-auto px-6 pt-12 pb-8">
        
        {/* Header Icon */}
        <div className="flex justify-center mb-8">
          <div className="w-16 h-16 rounded-full bg-white border border-spiritual-gold/30 flex items-center justify-center shadow-sm">
             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-spiritual-gold">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
             </svg>
          </div>
        </div>

        {/* Personalized Message / Reading */}
        <div className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-spiritual-100 mb-12">
          <h1 className="font-serif text-3xl text-center text-spiritual-text mb-8">
            🌿 Sua Leitura Espiritual
          </h1>
          
          <div className="font-serif text-lg md:text-xl leading-relaxed text-stone-600 space-y-6 text-justify">
            <p>
              Pelas suas respostas, fica claro que você não está sofrendo à toa. 
              Você está vivendo um tempo de dor intensa, de pensamentos que não desligam, de silêncio que machuca — 
              mas também de uma sensibilidade espiritual muito forte, que poucas pessoas conseguem perceber em si mesmas.
            </p>
            <p>
              O que você sente não é fraqueza. <br/>
              É o coração tentando entender por que algo que ainda dói tanto parece estar parado.
            </p>
            <p>
              O silêncio que você enfrenta agora não significa fim. <br/>
              Ele significa <span className="text-spiritual-gold font-semibold italic">processo</span>.
            </p>
            <p>
              Existe um laço emocional que ainda não foi quebrado. 
              Mas existe também um desalinhamento interno — ansiedade, culpa, medo de agir errado — 
              e isso, sem perceber, trava o tempo da resposta.
            </p>
            <p>
              Quando o agir espiritual é feito no desespero, nada flui.
              Mas quando o coração se acalma e a fé é conduzida da forma correta,
              Deus responde.
            </p>
            <p className="font-medium text-spiritual-text">
              E sim… ainda há caminho. <br/>
              Mas não do jeito que você tem tentado até agora.
            </p>
          </div>
        </div>

        {/* The Purpose Timeline */}
        <div className="mb-16">
            <div className="text-center mb-10">
                <span className="text-xs uppercase tracking-widest text-stone-400 font-sans">🛐 O Caminho a Seguir</span>
                <h2 className="text-3xl font-serif text-spiritual-text mt-3">✨ Seu Propósito Espiritual de 7 Dias</h2>
                <div className="w-16 h-0.5 bg-spiritual-gold/50 mx-auto my-6"></div>
                <p className="font-sans font-light text-sm text-stone-600 mt-4 max-w-lg mx-auto leading-relaxed">
                    Este propósito não surgiu por acaso. Ele foi alinhado com o seu estado emocional atual, com a dor que você sente e com o momento espiritual que você está vivendo agora.
                    <br/><br/>
                    A estrutura é simples. Mas a forma como você vive cada dia muda tudo. <br/>
                    Não é sobre fazer mais. É sobre fazer do jeito certo, sem se machucar ainda mais.
                </p>
            </div>

            <div className="relative border-l-2 border-spiritual-gold/20 ml-6 md:ml-10 space-y-12 py-2">
                
                {/* Timeline Item 1 */}
                <div className="relative pl-8">
                    <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-spiritual-50 border-4 border-spiritual-gold"></div>
                    <h4 className="font-sans text-xs font-bold text-spiritual-gold uppercase tracking-wider mb-2">Dias 1 e 2</h4>
                    <h3 className="font-serif text-xl text-stone-800 mb-2">🌱 Acalmar o coração e remover a dor</h3>
                    <p className="font-sans text-sm text-stone-500 leading-relaxed font-light">
                        Antes de qualquer restauração, o coração precisa parar de sangrar. 
                        Esses dias existem para silenciar a ansiedade, aliviar a culpa e devolver um pouco de paz — 
                        porque ninguém recebe resposta no meio do desespero.
                    </p>
                </div>

                {/* Timeline Item 2 */}
                <div className="relative pl-8">
                    <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-spiritual-50 border-4 border-spiritual-200"></div>
                    <h4 className="font-sans text-xs font-bold text-stone-400 uppercase tracking-wider mb-2">Dias 3 e 4</h4>
                    <h3 className="font-serif text-xl text-stone-800 mb-2">🌿 Alinhamento espiritual e postura correta</h3>
                    <p className="font-sans text-sm text-stone-500 leading-relaxed font-light">
                        Aqui você entende o que precisa ser ajustado por dentro. 
                        Não é sobre convencer ninguém. 
                        É sobre parar de agir no impulso e alinhar fé, palavras e postura.
                    </p>
                </div>

                {/* Timeline Item 3 */}
                <div className="relative pl-8">
                    <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-spiritual-50 border-4 border-spiritual-200"></div>
                    <h4 className="font-sans text-xs font-bold text-stone-400 uppercase tracking-wider mb-2">Dias 5 e 6</h4>
                    <h3 className="font-serif text-xl text-stone-800 mb-2">🕊️ Entrega, silêncio e posicionamento</h3>
                    <p className="font-sans text-sm text-stone-500 leading-relaxed font-light">
                        Esses dias são difíceis — e decisivos. 
                        É quando você aprende a soltar o controle, parar de lutar do jeito errado e permitir que o agir espiritual aconteça sem sabotagem emocional.
                    </p>
                </div>

                {/* Timeline Item 4 */}
                <div className="relative pl-8">
                    <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-spiritual-gold shadow-lg shadow-spiritual-gold/30"></div>
                    <h4 className="font-sans text-xs font-bold text-spiritual-gold uppercase tracking-wider mb-2">Dia 7</h4>
                    <h3 className="font-serif text-xl text-stone-800 mb-2">✨ Clareza, resposta e paz</h3>
                    <p className="font-sans text-sm text-stone-500 leading-relaxed font-light">
                        Não é só sobre o outro. 
                        É sobre você finalmente saber o que fazer, quando agir — ou como descansar em paz, sem viver refém da dúvida.
                    </p>
                </div>
            </div>
        </div>

        {/* Why the App Section */}
        <div className="bg-white rounded-xl p-8 border border-spiritual-100 shadow-sm mb-12">
            <h3 className="font-serif text-2xl text-spiritual-text mb-6 text-center leading-tight">
                📱 Por que o App <span className="italic">Propósito de Aliança Restaurada</span> é essencial agora
            </h3>
            
            <p className="font-sans font-light text-stone-600 mb-8 text-center">
                Tentar viver isso sozinha(o), no meio da dor, é pesado demais.
                É nos momentos de silêncio que a mente trai, o medo cresce e a fé vacila.
                <br/><br/>
                O aplicativo existe para te acompanhar exatamente nesses momentos.
            </p>

            <ul className="space-y-4 font-sans text-stone-700 text-sm md:text-base font-light mb-8">
                <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-spiritual-gold flex-shrink-0 mt-0.5" />
                    <span>O devocional guiado de 7 dias, dia por dia</span>
                </li>
                <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-spiritual-gold flex-shrink-0 mt-0.5" />
                    <span>Orações em texto e áudio, para quando o coração não consegue mais falar</span>
                </li>
                <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-spiritual-gold flex-shrink-0 mt-0.5" />
                    <span>Acompanhamento personalizado, para não agir no impulso</span>
                </li>
                <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-spiritual-gold flex-shrink-0 mt-0.5" />
                    <span>30 dias de oração contínua pela restauração da sua aliança</span>
                </li>
            </ul>

            <div className="text-center p-4 bg-spiritual-50 rounded-lg">
                <p className="font-serif text-stone-600 italic">
                    Tudo em um ambiente silencioso, espiritual e acolhedor — para que você não caminhe sozinha(o) nesse processo.
                </p>
            </div>
        </div>

        {/* Closing & CTA */}
        <div className="text-center space-y-8">
            <div className="max-w-md mx-auto">
                <h4 className="font-sans uppercase tracking-widest text-xs text-stone-400 mb-3">🌿 Um convite, não uma pressão</h4>
                <p className="font-serif text-lg text-stone-600 leading-relaxed">
                    Este não é um passo de desespero. É um passo de fé consciente.
                    <br/><br/>
                    Se você sente, no fundo do coração, que ainda não acabou, então talvez esse seja o cuidado que você precisava para atravessar esse tempo sem se perder.
                </p>
            </div>

            <button 
                onClick={onNext}
                className="w-full md:w-auto px-8 py-5 bg-gradient-to-r from-spiritual-gold to-[#C5A028] text-white rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-3 mx-auto"
            >
                <span className="font-sans font-medium uppercase tracking-wider text-sm">
                    👉 Descobrir como iniciar o Propósito
                </span>
                <ArrowRight className="w-5 h-5" />
            </button>
        </div>

      </div>
    </div>
  );
};
