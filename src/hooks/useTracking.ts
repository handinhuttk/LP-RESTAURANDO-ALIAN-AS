import { useEffect } from 'react';
import { trackEvent } from '../lib/facebookPixel';
import { refreshUtmify } from '../lib/utmTracker';
import { ScreenState } from '../types';

export const useTracking = (currentScreen: ScreenState) => {
  useEffect(() => {
    // Garante que o UTMify processe a página a cada mudança de tela
    refreshUtmify();

    // Lógica de Eventos do Facebook Pixel baseada na tela atual (Funil)
    switch (currentScreen) {
      case 'intro':
        // PageView já é disparado no load do HTML, mas podemos reforçar
        // trackEvent('ViewContent', { content_name: 'Intro Screen' });
        break;

      case 'quiz':
        // Usuário começou o quiz
        trackEvent('ViewContent', { content_name: 'Quiz Start' });
        break;

      case 'analyzing':
        // Usuário terminou as perguntas, está processando
        trackEvent('CustomizeProduct', { status: 'Analyzing Answers' });
        break;

      case 'result':
        // Usuário viu o resultado (Lead Qualificado)
        trackEvent('Lead', { content_name: 'Quiz Completed' });
        break;

      case 'offer':
        // Usuário chegou na oferta de venda
        trackEvent('InitiateCheckout', { 
            content_name: 'Propósito Aliança Restaurada',
            value: 27.00,
            currency: 'BRL'
        });
        break;
        
      default:
        break;
    }
  }, [currentScreen]);
};