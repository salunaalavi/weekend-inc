/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {},
        fontFamily: {
            'sans': 'Work Sans, sans-serif',
        },
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            'white': '#ffffff',
            'black': '#000000',
            'cameo-pink': '#EEBECE',
            'bluebonnet': '#0B24FB',
            'tulip': '#FF8787',
        },
    },
    plugins: [],
}
