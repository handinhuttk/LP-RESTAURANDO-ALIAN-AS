export const UTMIFY_ID = '68d4933ceb6a77aa04cb8249';

/**
 * Em SPAs (Single Page Applications) como React, às vezes o script do UTMify
 * precisa ser "lembrado" de re-escanear a página após mudanças de rota,
 * embora o script 'latest.js' geralmente lide bem com isso.
 * 
 * Este arquivo serve como ponto central caso precise de lógica manual
 * para anexar UTMs aos links de checkout dinamicamente.
 */

export const getUtmParams = () => {
  if (typeof window === 'undefined') return {};
  const urlParams = new URLSearchParams(window.location.search);
  const entries = urlParams.entries();
  const params: Record<string, string> = {};
  
  for (const [key, value] of entries) {
    if (key.startsWith('utm_') || key === 'src' || key === 'sck') {
      params[key] = value;
    }
  }
  
  return params;
};

// Função auxiliar para forçar atualização dos links se necessário
export const refreshUtmify = () => {
    console.log('📡 UTMify Tracker Active');
    // O script do UTMify roda automaticamente, mas aqui podemos
    // adicionar lógica extra se necessário no futuro.
};