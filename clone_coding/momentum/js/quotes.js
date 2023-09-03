const quotes = [
    {
        quote   : "Coding like poetry should be short and concise.",
        author  : "Santosh Kalwar"
    },
    {
        quote   : "It’s not a bug; it’s an undocumented feature.",
        author  : "Anonymous"
    },
    {
        quote   : "First, solve the problem. Then, write the code.",
        author  : "John Johnson"
    },
    {
        quote   : "Code is like humor. When you have to explain it, it’s bad.",
        author  : "Cory House"
    },
    {
        quote   : "Make it work, make it right, make it fast.",
        author  : "Kent Beck"
    },
    {
        quote   : "Clean code always looks like it was written by someone who cares.",
        author  : "Robert C. Martin"
    },
    {
        quote   : "Of course, bad code can be cleaned up. But it’s very expensive.",
        author  : "Robert C. Martin"
    },
    {
        quote   : "Programming is the art of algorithm design and the craft of debugging errant code. ",
        author  : "Ellen Ullman"
    },
    {
        quote   : "Programming today is a race between software engineers striving to build bigger and better idiot-proof programs and the Universe trying to produce bigger and better idiots. So far, the Universe is winning.",
        author  : "Rick Cook"
    },
    {
        quote   : "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
        author  : "Martin Fowler"
    },
    {
        quote   : "Experience is the name everyone gives to their mistakes.",
        author  : "Oscar Wilde"
    },
    {
        quote   : "Programming is the art of telling another human being what one wants the computer to do.",
        author  : "Donald Ervin Knuth"
    },
    {
        quote   : "Confusion is part of programming.",
        author  : "Felienne Hermans"
    },
    {
        quote   : "No matter which field of work you want to go in, it is of great importance to learn at least one programming language.",
        author  : "Ram Ray"
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote
author.innerText = todaysQuote.author