window.onload = () => {
  const quote = document.getElementById("quote"); // Quote itself
  const author = document.getElementById("author"); // Author of the quote
  const api = "https://api.quotable.io/random"; // Quote API

  // Get Quote
  const getQuote = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    author.innerHTML = data.author;
    quote.innerHTML = data.content;
  };

  getQuote(api);

  // Grab new Quote button
  const newQuoteBtn = document.querySelector("#new-quote-btn");
  newQuoteBtn.addEventListener("click", () => {
    getQuote(api);
  });
};

const Tweet = () => {
  window.open(
    "https://twitter.com/intent/tweet?text=" +
      quote.innerHTML +
      "  By: " +
      author.innerHTML,
    "width=300",
    "height=600"
  );
};
