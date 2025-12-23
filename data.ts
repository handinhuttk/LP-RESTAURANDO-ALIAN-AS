import { Question } from './types';

export const questions: Question[] = [
  {
    id: 1,
    title: "Dor do coração",
    question: "O que mais tem doído no seu coração neste momento?",
    options: [
      { id: "A", text: "O silêncio entre nós" },
      { id: "B", text: "O medo de perder para sempre" },
      { id: "C", text: "A culpa por achar que falhei" },
      { id: "D", text: "A dúvida se isso ainda é de Deus" }
    ]
  },
  {
    id: 2,
    title: "Tempo da dor",
    question: "Há quanto tempo essa situação começou?",
    options: [
      { id: "A", text: "Menos de 7 dias" },
      { id: "B", text: "Entre 7 e 30 dias" },
      { id: "C", text: "Mais de 30 dias" }
    ]
  },
  {
    id: 3,
    title: "Situação atual",
    question: "Como está o relacionamento hoje?",
    options: [
      { id: "A", text: "Não existe mais contato" },
      { id: "B", text: "Existe contato, mas está frio" },
      { id: "C", text: "Estou bloqueada(o)" },
      { id: "D", text: "Ele(a) pediu um tempo" }
    ]
  },
  {
    id: 4,
    title: "Estado emocional",
    question: "Como você tem se sentido por dentro?",
    options: [
      { id: "A", text: "Ansiosa(o) e sem paz" },
      { id: "B", text: "Triste e sem forças" },
      { id: "C", text: "Culpada(o) e arrependida(o)" },
      { id: "D", text: "Cansada(o), mas ainda com fé" }
    ]
  },
  {
    id: 5,
    title: "Vida espiritual",
    question: "Como está sua relação com Deus neste momento?",
    options: [
      { id: "A", text: "Oro, mas sinto silêncio" },
      { id: "B", text: "Oro com medo de estar fazendo errado" },
      { id: "C", text: "Tenho fé, mas estou confusa(o)" },
      { id: "D", text: "Estou tentando confiar, mesmo doendo" }
    ]
  },
  {
    id: 6,
    title: "Medo oculto",
    question: "Qual pensamento mais passa pela sua mente hoje?",
    options: [
      { id: "A", text: "“Ele(a) já seguiu em frente”" },
      { id: "B", text: "“Talvez seja tarde demais”" },
      { id: "C", text: "“Estou insistindo errado”" },
      { id: "D", text: "“Tenho medo de desistir cedo demais”" }
    ]
  },
  {
    id: 7,
    title: "Desejo profundo",
    question: "Se Deus te desse uma resposta em 7 dias, você…",
    options: [
      { id: "A", text: "Lutaria até o fim" },
      { id: "B", text: "Mudaria sua postura" },
      { id: "C", text: "Entregaria em paz" },
      { id: "D", text: "Voltaria a viver sem dor" }
    ]
  }
];
