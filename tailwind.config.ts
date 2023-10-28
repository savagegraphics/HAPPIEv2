import type { Config } from 'tailwindcss'
/**
 * @type {import('@types/tailwindcss/tailwind-config').TailwindConfig}
 */

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/flowbite/**/*.js',
    './node_modules/flowbite-react/**/*.js',
    './pages/**/*.{ts,tsx}',
    './public/**/*.html',
    './app/**/*.{ts,tsx}'
  ],
  theme: {},
  plugins: [require('flowbite/plugin')]
}
export default config
