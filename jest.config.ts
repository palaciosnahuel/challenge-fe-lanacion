import type { Config } from 'jest'
import nextJest from 'next/jest.js'
 
const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
})
 
// Add any custom config to be passed to Jest
const config: Config = {
  coverageProvider: 'v8',
  testEnvironment: 'jsdom',
  collectCoverage: true, // Habilitar la cobertura de código
  collectCoverageFrom: [
    '**/*.{js,jsx,ts,tsx}', // Incluir todos los archivos JavaScript y TypeScript
    '!**/node_modules/**', // Excluir la carpeta node_modules
    '!**/public/**', // Excluir la carpeta node_modules
    '!**/.next/**', // Excluir la carpeta node_modules
    '!**/coverage/**', // Excluir la carpeta coverage (donde se generan los informes de cobertura)
    '!**/jest.config.ts', // Excluir el propio archivo de configuración de Jest
    '!**/jest.setup.ts', // Excluir el propio archivo de configuración de Jest
    '!**/next-env.d.ts', // Excluir el propio archivo de configuración de Jest
    '!**/app/layout.tsx', // Excluir la carpeta node_modules
    '!**/app/page.tsx', // Excluir la carpeta node_modules
  ],
};
 
// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
export default createJestConfig(config)