// Array of sample quotes
const quotes = [
    {
      text: "Be yourself; everyone else is already taken.",
      author: "Oscar Wilde"
    },
    {
      text: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
      author: "Albert Einstein"
    },
    {
      text: "So many books, so little time.",
      author: "Frank Zappa"
    },
    {
      text: "Be the change that you wish to see in the world.",
      author: "Mahatma Gandhi"
    },
    {
      text: "In three words I can sum up everything I've learned about life: it goes on.",
      author: "Robert Frost"
    }
  ];
  
  // Function to generate random quotes
  function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
  }
  
  // Function to display quote
  function displayQuote() {
    const quote = getRandomQuote();
    document.getElementById('text').textContent = quote.text;
    document.getElementById('author').textContent = `- ${quote.author}`;
    document.getElementById('tweet-quote').href = `https://twitter.com/intent/tweet?text=${encodeURIComponent(`"${quote.text}" - ${quote.author}`)}`;
  }
  
  // Event listener for the New Quote button
  document.getElementById('new-quote').addEventListener('click', displayQuote);
  
  // Initial load
  window.onload = displayQuote;
  