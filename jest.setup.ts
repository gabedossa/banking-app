import '@testing-library/jest-dom'
import { TextEncoder, TextDecoder } from 'util'

// Polyfills necessários para o ambiente jsdom com React Router
Object.assign(global, { TextEncoder, TextDecoder })

// Polyfill para window.matchMedia (não implementado no jsdom)
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: (query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => false,
  }),
})
