/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            bold: {
                fontWeight: '700',
            },
        },
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
    plugins: [
        plugin(({ addBase }) => {
            addBase({
                'h1': {
                    fontSize: '62px',
                    lineHeight: '51px',
                    fontWeight: '900',
                },
                'h2': {
                    fontSize: '32px',
                    lineHeight: '37.5px',
                    fontWeight: '900',
                },
                'h3': {
                    fontSize: '21px',
                    lineHeight: '25px',
                    fontWeight: '700',
                },
                'h4': {
                    fontSize: '19px',
                    lineHeight: '31px',
                    fontWeight: '700',
                },
                'h5': {
                    fontSize: '16px',
                    lineHeight: '19px',
                    fontWeight: '700',
                },
                'p': {
                    fontSize: '18px',
                    lineHeight: '27px',
                    fontWeight: '400',
                },
            })
        })
    ],
}
