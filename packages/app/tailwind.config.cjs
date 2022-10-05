module.exports = {
    content: ['./src/**/*.html', './src/**/*.svelte', './src/**/*.ts'],
    prefix: 'tw-',
    theme: {
        screens: {
            xs: '480px',
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1280px',
            '2xl': '1536px'
        },
        fontFamily: {
            sans: ['Centra No1', 'helvetica', 'arial', 'sans-serif'],
            serif: ['Ogg', 'georgia', 'serif']
        },
        fontSize: {
            base: ['14px', '22px'],
            0: ['12px', '20px'],
            1: ['13px', '20px'],
            2: ['14px', '22px'],
            3: ['16px', '24px'],
            4: ['18px', '28px'],
            5: ['26px', '36px'],
            6: ['34px', '46px'],
            7: ['50px', '58px'],
            8: ['64px', '70px']
        },
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            black: '#000000',
            shadow: '#212427',
            'dark-gray': '#444444',
            'mid-gray': '#6e6e6e',
            steel: '#888888',
            'light-gray': '#b6b6b6',
            tin: '#dddddd',
            oxygen: '#eeeeee',
            white: '#ffffff',
            accent: '#00686c',
            red: '#ee0022',
            yellow: '#ddf533',
            'black-modal': 'rgba(0,0,0, .2)'
        },
        extend: {
            transitionProperty: {
                filter: 'filter',
                margin: 'margin'
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' }
                },
                spinIn: {
                    '0%': { opacity: '0', transform: 'rotate(-45deg)' },
                    '100%': { opacity: '1', transform: 'rotate(0deg)' }
                },
                spinOut: {
                    '0%': { opacity: '1', transform: 'rotate(0deg)' },
                    '100%': { opacity: '0', transform: 'rotate(45deg)' }
                }
            },
            animation: {
                'fade-in': 'fadeIn 150ms ease-in-out both',
                'spin-in': 'spinIn 75ms ease-in-out both 25ms',
                'spin-out': 'spinOut 50ms ease-in-out both'
            },
            aspectRatio: {
                '2/3': '2 / 3',
                '3/4': '3 / 4'
            }
        }
    },
    variants: {
        extend: {}
    }
};
