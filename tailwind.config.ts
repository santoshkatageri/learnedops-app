import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            typography: {
                invert: {
                    css: {
                        '--tw-prose-body': '#d1d5db',
                        '--tw-prose-headings': '#ffffff',
                        '--tw-prose-links': '#0097b2',
                        '--tw-prose-bold': '#ffffff',
                        '--tw-prose-counters': '#9ca3af',
                        '--tw-prose-bullets': '#6b7280',
                        '--tw-prose-hr': '#374151',
                        '--tw-prose-quotes': '#e5e7eb',
                        '--tw-prose-quote-borders': '#0097b2',
                        '--tw-prose-code': '#e5e7eb',
                        '--tw-prose-pre-bg': '#020617',
                    },
                },
            },
            colors: {
                brand: {
                    primary: "#0097b2",
                    dark: "#08003f",
                },
            },
        },
    },
    plugins: [typography],
};

export default config;
