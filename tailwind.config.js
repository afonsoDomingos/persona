/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#003B7E",
                "primary-dark": "#002D62",
                accent: "#E86C17",
                "accent-light": "#FF8533",
                "bg-light": "#F8FAFC",
                "text-main": "#1E293B",
                "text-muted": "#64748B",
            },
            fontFamily: {
                outfit: ["Outfit", "sans-serif"],
            },
            animation: {
                'spin-slow': 'spin 12s linear infinite',
            }
        },
    },
    plugins: [],
}
