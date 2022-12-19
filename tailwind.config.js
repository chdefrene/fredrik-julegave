/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{ts,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                'comic-sans': ['"Comic Sans MS"', '"Marker Felt"', "sans-serif"]
            },
            backgroundImage: {
                checkerboard: "url('../public/graphics/wa113.gif')",
                tile: "url('../public/graphics/nybkgtileani.gif')",
                star: "url('../public/graphics/starbackground.gif')",
                blueball: "url('../public/graphics/blueball.gif')",
            }
        },
    },
    plugins: [],
}
