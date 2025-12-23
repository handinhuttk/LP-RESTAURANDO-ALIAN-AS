import React, { useState } from 'react';
import { BookOpen, Heart, Music, MessageCircle, Star, CheckCircle2, ShieldCheck, ChevronDown, ChevronUp } from 'lucide-react';

const faqData = [
    {
        question: "Isso realmente funciona para o meu caso?",
        answer: "Cada história é única, mas a dor que você sente agora é muito parecida com a de milhares de pessoas que estão vivendo um tempo de espera, silêncio e esperança. Este propósito não força resultados. Ele alinha o coração e a fé, criando o ambiente espiritual certo para que a resposta venha — seja restauração ou paz."
    },
    {
        question: "E se meu casamento já estiver muito distante ou sem contato?",
        answer: "Muitas restaurações começam exatamente no silêncio. O afastamento não significa fim, significa um tempo que precisa ser conduzido corretamente. Deus trabalha mesmo quando você não vê sinais imediatos."
    },
    {
        question: "Tenho medo de criar expectativas e me frustrar novamente…",
        answer: "Esse propósito não alimenta ilusões. Ele foi criado para trazer clareza, paz e direção, para que você não caminhe baseada apenas na dor ou no medo, mas com discernimento espiritual."
    },
    {
        question: "Preciso ter muita fé para fazer esse propósito?",
        answer: "Não. Basta ter um coração disposto. Mesmo quem está cansada(o), confusa(o) ou com fé abalada pode viver esse tempo. O propósito também é para quem está fraco."
    },
    {
        question: "E se no final Deus me mostrar que não é para continuar?",
        answer: "Isso também é cuidado. Às vezes, a maior resposta não é a restauração imediata, mas a paz que liberta do sofrimento. Deus não responde para machucar, Ele responde para curar."
    },
    {
        question: "O acompanhamento é realmente personalizado?",
        answer: "Sim. O acompanhamento respeita o seu momento emocional e espiritual, guiando você durante o processo para não agir por impulso, desespero ou culpa."
    },
    {
        question: "As orações são gravadas ou feitas para o meu caso?",
        answer: "As orações foram preparadas para situações reais de crise, afastamento e restauração, e podem ser vividas como se fossem suas. Muitas pessoas relatam sentir paz imediata ao ouvir."
    },
    {
        question: "Por que 7 dias?",
        answer: "Porque é um tempo curto o suficiente para não alimentar ansiedade, e profundo o bastante para gerar clareza espiritual. Não é sobre quantidade de dias, é sobre ordem espiritual."
    },
    {
        question: "E os 30 dias de oração, como funcionam?",
        answer: "Após o propósito inicial, você continua recebendo orações diárias para fortalecer sua fé, sustentar a entrega e evitar recaídas emocionais durante o processo."
    },
    {
        question: "Posso fazer o propósito sozinha(o)?",
        answer: "Pode, mas não precisa. O aplicativo foi criado justamente para que você não atravesse esse momento em solidão, principalmente nos dias em que a dor aperta."
    },
    {
        question: "O valor é único ou existe cobrança recorrente?",
        answer: "O acesso é simples e transparente. Você saberá exatamente o que está recebendo antes de qualquer decisão. A proposta é ser acessível e leve, não um peso."
    }
];

export const OfferScreen: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const checkoutUrl = "https://www.ggcheckout.com/checkout/v3/HB9XAMlYwsRGJ9QUR8de";

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-spiritual-50 animate-fade-in pb-16">
        
      {/* Hero Section */}
      <div className="bg-spiritual-gold/10 pt-16 pb-12 px-6 rounded-b-[3rem]">
        <div className="max-w-md mx-auto text-center">
           <div className="inline-block p-3 bg-white rounded-full shadow-sm mb-6">
                <Heart className="w-6 h-6 text-spiritual-gold fill-spiritual-gold/20" />
           </div>
           <h1 className="font-serif text-3xl md:text-4xl text-spiritual-text mb-4 leading-tight">
             App Devocional <br/><span className="italic text-stone-800">Aliança Restaurada</span>
           </h1>
           <p className="font-sans font-light text-stone-600 leading-relaxed text-sm md:text-base">
             Para viver esse propósito da forma correta, com orientação diária e sem cometer erros que podem afastar ainda mais a resposta.
           </p>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-6 -mt-8">
        {/* Main Card */}
        <div className="bg-white rounded-2xl shadow-xl shadow-stone-200/50 p-1 border border-white mb-16">
            <div className="bg-stone-50/50 rounded-xl p-6 md:p-8 border border-stone-100">
                <div className="space-y-6">
                    
                    <div className="flex items-start gap-4">
                        <div className="bg-spiritual-lilac/30 p-2 rounded-lg mt-1">
                            <BookOpen className="w-5 h-5 text-stone-600" />
                        </div>
                        <div>
                            <h3 className="font-serif text-lg text-stone-800">Devocional guiado de 7 dias</h3>
                            <p className="text-sm font-sans text-stone-500 font-light">Um passo a passo diário para não se perder na dor.</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <div className="bg-amber-100 p-2 rounded-lg mt-1">
                            <MessageCircle className="w-5 h-5 text-stone-600" />
                        </div>
                        <div>
                            <h3 className="font-serif text-lg text-stone-800">Acompanhamento do Propósito</h3>
                            <p className="text-sm font-sans text-stone-500 font-light">Instruções claras sobre o que fazer e o que não fazer.</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <div className="bg-blue-50 p-2 rounded-lg mt-1">
                            <Music className="w-5 h-5 text-stone-600" />
                        </div>
                        <div>
                            <h3 className="font-serif text-lg text-stone-800">Orações em Áudio</h3>
                            <p className="text-sm font-sans text-stone-500 font-light">Para ouvir e acalmar a alma quando a angústia apertar.</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <div className="bg-green-50 p-2 rounded-lg mt-1">
                            <Star className="w-5 h-5 text-stone-600" />
                        </div>
                        <div>
                            <h3 className="font-serif text-lg text-stone-800">30 Dias de Oração Contínua</h3>
                            <p className="text-sm font-sans text-stone-500 font-light">Uma cobertura espiritual completa pela sua casa.</p>
                        </div>
                    </div>

                </div>

                <div className="mt-8 pt-6 border-t border-stone-100 text-center">
                    <p className="font-serif text-stone-500 italic mb-2">Um pequeno passo de fé</p>
                    <div className="flex items-center justify-center gap-2 mb-6">
                        <span className="text-sm text-stone-400 line-through">R$ 97,00</span>
                        <span className="text-3xl font-serif text-spiritual-gold font-bold">R$ 27,00</span>
                    </div>

                    <a 
                        href={checkoutUrl}
                        className="w-full bg-gradient-to-r from-spiritual-gold to-[#C5A028] text-white font-sans uppercase tracking-widest font-medium py-4 rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2"
                    >
                        <span>Sim, eu quero restaurar</span>
                        <CheckCircle2 className="w-5 h-5" />
                    </a>
                    
                    <p className="mt-4 text-[10px] text-stone-400 uppercase tracking-wider">
                        Acesso Imediato • Compra Segura
                    </p>
                </div>
            </div>
        </div>

        {/* Guarantee Section */}
        <div className="mb-16">
            <div className="relative bg-white border border-spiritual-gold/30 rounded-2xl p-8 text-center shadow-sm">
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                    <div className="bg-white p-2 rounded-full border border-spiritual-gold/20 shadow-sm">
                        <ShieldCheck className="w-8 h-8 text-spiritual-gold" />
                    </div>
                </div>
                
                <h3 className="mt-4 font-serif text-xl text-spiritual-text mb-4">
                   Garantia de 7 Dias — Caminhe com Paz
                </h3>
                
                <div className="font-sans font-light text-stone-600 text-sm leading-relaxed space-y-4">
                    <p>Este é um passo de fé, não uma obrigação.</p>
                    <p>
                        Por isso, você tem <strong>7 dias de garantia incondicional</strong>.
                    </p>
                    <p>
                        Se durante esse período você sentir que este não é o seu tempo, ou simplesmente decidir não continuar, 
                        basta solicitar o reembolso e todo o valor será devolvido, sem perguntas, sem constrangimento e sem burocracia.
                    </p>
                    <p className="italic text-stone-500">
                        Queremos que você caminhe em paz, com o coração tranquilo e livre de qualquer peso.
                    </p>
                </div>
            </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-12">
            <h3 className="text-center font-serif text-2xl text-spiritual-text mb-8">
                Perguntas Frequentes
            </h3>

            <div className="space-y-4">
                {faqData.map((item, index) => (
                    <div 
                        key={index} 
                        className="bg-white border border-spiritual-100 rounded-xl overflow-hidden transition-all duration-300 hover:border-spiritual-gold/30 shadow-sm"
                    >
                        <button 
                            onClick={() => toggleFaq(index)}
                            className="w-full flex items-center justify-between p-5 text-left bg-white hover:bg-spiritual-50/50 transition-colors"
                        >
                            <span className="font-sans text-stone-700 font-medium text-sm md:text-base pr-4">
                                {item.question}
                            </span>
                            {openFaqIndex === index ? (
                                <ChevronUp className="w-5 h-5 text-spiritual-gold flex-shrink-0" />
                            ) : (
                                <ChevronDown className="w-5 h-5 text-stone-400 flex-shrink-0" />
                            )}
                        </button>
                        
                        <div 
                            className={`transition-all duration-300 ease-in-out overflow-hidden ${openFaqIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                        >
                            <div className="p-5 pt-0 text-stone-500 font-sans font-light text-sm leading-relaxed border-t border-spiritual-50/50 bg-spiritual-50/20">
                                {item.answer}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>

        {/* Bottom CTA */}
        <div className="max-w-md mx-auto mb-12 text-center">
             <a 
                href={checkoutUrl}
                className="w-full bg-gradient-to-r from-spiritual-gold to-[#C5A028] text-white font-sans uppercase tracking-widest font-medium py-4 rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2"
            >
                <span>Sim, eu quero restaurar</span>
                <CheckCircle2 className="w-5 h-5" />
            </a>
            <p className="mt-4 text-[10px] text-stone-400 uppercase tracking-wider">
                Acesso Imediato • Compra Segura
            </p>
        </div>

        {/* Emotional Close */}
        <div className="mt-12 text-center max-w-sm mx-auto">
            <p className="font-serif italic text-stone-600 text-lg">
                “Não caminhe sozinha. Deus preparou este tempo para curar o seu coração.”
            </p>
        </div>
      </div>
    </div>
  );
};