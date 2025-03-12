// Selecting Elements
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const newQuoteBtn = document.getElementById("new-quote");
const copyQuoteBtn = document.getElementById("copy-quote");
const tweetBtn = document.getElementById("tweet-quote");
const darkModeBtn = document.getElementById("toggle-dark-mode");
const fontSelector = document.getElementById("font-selector");

// Local Quotes Array
const quotes = [
    { content: "The best way to predict the future is to create it.", author: "Peter Drucker" },
    { content: "Success is not final, failure is not fatal: it is the courage to continue that counts.", author: "Winston Churchill" },
    { content: "Do what you can, with what you have, where you are.", author: "Theodore Roosevelt" },
    { content: "Be yourself; everyone else is already taken.", author: "Oscar Wilde" },
    { content: "Act as if what you do makes a difference. It does.", author: "William James" }
];

// Function to Get a Random Quote
function getQuote() {
    quoteText.classList.add("hidden");
    authorText.classList.add("hidden");

    setTimeout(() => {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        quoteText.innerText = `${quotes[randomIndex].content}`;
        authorText.innerText = `- ${quotes[randomIndex].author}`;
        quoteText.classList.remove("hidden");
        authorText.classList.remove("hidden");
    }, 500);
}

// Function to Copy Quote to Clipboard
function copyQuote() {
    const quote = `${quoteText.innerText} ${authorText.innerText}`;
    navigator.clipboard.writeText(quote).then(() => {
        alert("Quote copied to clipboard!");
    }).catch(err => {
        console.error("Error copying text:", err);
    });
}

// Function to Tweet the Quote
function tweetQuote() {
    const quote = `${quoteText.innerText} ${authorText.innerText}`;
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(quote)}`;
    window.open(twitterUrl, "_blank");
}

// Function to Change Background Color Randomly
function changeBackground() {
    const colors = ["#f44336", "#e91e63", "#9c27b0", "#3f51b5", "#009688", "#ff9800"];
    document.body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
}

// Function to Toggle Dark Mode
darkModeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    document.querySelector(".container").classList.toggle("dark-mode");

    // Change button text based on mode
    if (document.body.classList.contains("dark-mode")) {
        darkModeBtn.innerText = "☀ Light Mode";
    } else {
        darkModeBtn.innerText = "🌙 Dark Mode";
    }
});

// Function to Change Font Style
fontSelector.addEventListener("change", () => {
    quoteText.style.fontFamily = fontSelector.value;
});

// Event Listeners
newQuoteBtn.addEventListener("click", () => {
    getQuote();
    changeBackground(); // ✅ Change background on button click
});

copyQuoteBtn.addEventListener("click", copyQuote);
tweetBtn.addEventListener("click", tweetQuote);

// Load a quote when the page loads & set initial background color
getQuote();
changeBackground(); // ✅ Ensures the first page loads with a background color

// Auto-refresh quotes every 6 seconds & change background color
setInterval(() => {
    getQuote();
    changeBackground(); // ✅ Background now updates every 6 seconds
}, 6000);