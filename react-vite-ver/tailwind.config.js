const { blue, red, green, yellow, gold } = require('@ant-design/colors');

const formatColor = color =>
    color.reduce(
        (prev, curr, index) => {
            if (index === 0) {
                prev['50'] = curr;
            }
            prev[String(index * 100)] = curr;
            return prev;
        },
        { DEFAULT: color.primary },
    );

module.exports = {
    mode: 'jit',
    content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    theme: {
        extend: {
            colors: {
                blue: formatColor(blue),
                red: formatColor(red),
                green: formatColor(green),
                yellow: formatColor(yellow),
                gold: formatColor(gold),
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
