export {};

declare global {
  interface Window {
    fbq: (
      type: string,
      eventName: string,
      params?: Record<string, string | number | boolean>
    ) => void;
    _fbq: any;
  }
}