var quotes = [
  {
    text: "“Be yourself; everyone else is already taken.”",
    author: "Oscar Wilde",
    image: "images/3565._UX200_CR0,15,200,200_.jpg",
  },
  {
    text: "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
    author: "Albert Einstein",
    image: "images/9810._UX200_CR0,14,200,200_.jpg",
  },
  {
    text: "“So many books, so little time.”",
    author: "Frank Zappa",
    image: "images/22302._UX200_CR0,0,200,200_.jpg",
  },
  {
    text: "“You've gotta dance like there's nobody watching Love like you'll never be hurt Sing like there's nobody listening And live like it's heaven on earth.”",
    author: "William W. Purkey",
    image: "images/1744830._UX200_CR0,47,200,200_.jpg",
  },
  {
    text: "“Be the change that you wish to see in the world.”",
    author: "Mahatma Gandhi",
    image: "images/5810891._UX200_CR0,21,200,200_.jpg",
  },
  {
    text: "“Here's to the crazy ones. The misfits. The rebels. The troublemakers. The round pegs in the square holes. The ones who see things differently. They're not fond of rules. And they have no respect for the status quo. You can quote them, disagree with them, glorify or vilify them. About the only thing you can't do is ignore them. Because they change things. They push the human race forward. And while some may see them as the crazy ones, we see genius. Because the people who are crazy enough to think they can change the world, are the ones who do.”",
    author: "Steve Jobs",
    image: "images/5255891._UX200_CR0,25,200,200_.jpg",
  },
  {
    text: "“It is better to be hated for what you are than to be loved for what you are not. ”",
    author: "Andre Gide",
    image: "images/7617._UX200_CR0,29,200,200_.jpg",
  }
];

function generateQuote() {
  var randomIndex = Math.trunc(Math.random() * quotes.length);
  var quote = quotes[randomIndex];
  document.getElementById("quoteImage").src = quote.image;
  document.getElementById("quoteText").textContent = quote.text;
  document.getElementById("quoteAuthor").textContent = "- " + quote.author;
}
