export const FB_PIXEL_ID = '645611767911980';

export const trackEvent = (name: string, options: Record<string, any> = {}) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', name, options);
    console.log(`📡 FB Pixel Fired: ${name}`, options);
  } else {
    console.warn('⚠️ FB Pixel not loaded');
  }
};

export const trackCustomEvent = (name: string, options: Record<string, any> = {}) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('trackCustom', name, options);
    console.log(`📡 FB Custom Event: ${name}`, options);
  }
};