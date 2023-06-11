import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    presets: [

        require('./vendor/wireui/wireui/tailwind.config.js')
    ],


    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './vendor/laravel/jetstream/**/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        "./node_modules/flowbite/**/*.js",
        './vendor/wireui/wireui/resources/**/*.blade.php',
        './vendor/wireui/wireui/ts/**/*.ts',
        './vendor/wireui/wireui/src/View/**/*.php'

    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
            colors: ({ colors }) => ({
                inherit: colors.inherit,
                current: colors.current,
                transparent: colors.transparent,
                primary: "#007FEC",
                primaryLight: "#00B1FD",
                secondary: "#00D9E9",
                secondaryLight: "#71FACA",
                dark: "#0A101E",
                darker: "#090E1A",
                black: colors.black,
                white: colors.white,
                slate: colors.slate,
                gray: {
                    50: "#F9F9FA",
                    100: "#F1F1F2",
                    200: "#E4E5E7",
                    300: "#DADBDD",
                    400: "#91949A",
                    500: "#787B82",
                    600: "#5E626A",
                    700: "#292E39",
                    800: "#1C222F",
                    900: "#0A101E",
                },
                blue: {
                    50: "#F7FBFF",
                    100: "#CEE6FC",
                    200: "#A5D2F9",
                    300: "#7CBDF6",
                    400: "#52A8F2",
                    500: "#2994EF",
                    600: "#007FEC",
                    700: "#0065BD",
                    800: "#004C8D",
                    900: "#00325E"
                },
                zinc: colors.zinc,
                neutral: colors.neutral,
                stone: colors.stone,
                red: colors.red,
                orange: colors.orange,
                amber: colors.amber,
                yellow: colors.yellow,
                lime: colors.lime,
                green: colors.green,
                emerald: colors.emerald,
                teal: colors.teal,
                cyan: colors.cyan,
                sky: colors.sky,
                indigo: colors.indigo,
                violet: colors.violet,
                purple: colors.purple,
                fuchsia: colors.fuchsia,
                pink: colors.pink,
                rose: colors.rose,
            }),
        },

    },

    plugins: [forms, typography, require('flowbite/plugin')],
};
