module.exports = {
    preset: "jest-puppeteer",
    globals: {
        URL: "http://localhost:8081"
    },
    testMatch: [
        "**/test/**/*.test.js"
    ],
    verbose: true
}