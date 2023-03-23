const quote = document.getElementById("quote");
const author = document.getElementById("author");
const api = "https://api.quotable.io/random";

const getQuote = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  author.innerHTML = data.author;
  quote.innerHTML = data.content;
};

document.addEventListener("DOMContentLoaded", () => {
  getQuote(api);

  const newQuoteBtn = document.querySelector("#new-quote-btn");
  newQuoteBtn.addEventListener("click", () => {
    getQuote(api);
  });
});

const Tweet = () => {
  window.open(
    "https://twitter.com/intent/tweet?text=" +
      quote.innerHTML +
      "--" +
      author.innerHTML,
    "width=300",
    "height=600"
  );
};
