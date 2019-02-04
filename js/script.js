/******************************************
Treehouse Techdegree:
FSJS project 1 - A Random Quote Generator
******************************************/

/***
*************
 Going for  EXTRA CREDIT

 Remon Tewodros 
*************
***/

// Quotes
var quotes = [

  {
    quote: "The first step is you have to say that you can.",
    source: 'Will Smith',
    year: '',
    citation: '',
    tags: 'Inspirational'
  },

  {
    quote: "Always remember that you are absolutely unique. Just like everyone else.",
    source: 'Margaret Mead',
    year: '1979',
    citation: '1,001 logical laws',
    tags: 'Humor'
  },

  {
    quote: "Happiness is having a large, loving, caring, close-knit family in another city.",
    source: 'George Burns',
    year: '',
    citation: '',
    tags: 'Humor'
  },

  {
    quote: "No man has a good enough memory to be a successful liar.",
    source: 'Abraham Lincoln',
    year: '',
    citation: '',
    tags: 'Truth'
  },

  {
    quote: "A man who says “I have learned enough and will learn no further” should be considered as knowing nothing at all.",
    source: 'Haile Selassie',
    year: '1963',
    citation: 'The gospel of the lion of judah',
    tags: 'Truth'
  },

  {
    quote: "The best way to teach your kids about taxes is by eating 30 percent of their ice cream.",
    source: 'Bill Murray',
    year: '2014',
    citation: 'Twitter',
    tags: 'Humor'
  },

  {
    quote: "Go to Heaven for the climate, Hell for the company",
    source: 'Mark Twain',
    year: '',
    citation: '',
    tags: 'Humor'
  },

  {
    quote: "Sorry for the mean, awful, accurate things I said.",
    source: ' T-shirts from Amazon',
    year: '2015',
    citation: 'Amazon.com',
    tags: 'Humor/Fashion'
  },
  {
    quote: "Whoever said that money can't buy happiness, simply didn't know where to go shopping.",
    source: 'The Letters of Gertrude Stein and Carl Van Vechten',
    year: '1986',
    citation: 'Columbia University Press',
    tags: 'Truth'
  }
]

// Generate random quoute from the array 'quotes'.
function getRandomQuote() {
  var randomQuote = Math.floor(Math.random() * quotes.length);
  return randomQuote;
}

// Auto-refresh the quote after 9 secondes
var autoRefreshQuote = window.setInterval(printQuote, 9000);

// Print the quote to the page
function printQuote() {
  var randomQuote = getRandomQuote();

  // Conditional statement to test if the quote has an identified citation, year or source. 
  if (quotes[randomQuote].citation === '' || quotes[randomQuote].citation === null) {
    quotes[randomQuote].citation = ' citation is unkonwn';
  }
  if (quotes[randomQuote].year === '' || quotes[randomQuote].year === null) {
    quotes[randomQuote].year = ' year is unkonwn';
  }
  if (quotes[randomQuote].source === '' || quotes[randomQuote].source === null) {
    quotes[randomQuote].source = ' Anonymous';
  }

  //previos version
  //get the IDs from the HTML and print random quotes to the page unsing .innerHTML
  // document.getElementById('quote').innerHTML = quotes[randomQuote].quote;
  // document.getElementById('source').innerHTML = quotes[randomQuote].source;
  // document.getElementById('citation').innerHTML = quotes[randomQuote].citation;
  // document.getElementById('year').innerHTML = quotes[randomQuote].year;
  // document.getElementById('tags').innerHTML = quotes[randomQuote].tags;


  //This is the new version I got help form Treehouse slack community.

  //get the IDs from the HTML and print random quotes to the page unsing .innerHTML
  document.getElementById('quote').innerHTML = quotes[randomQuote].quote;
  var secondPHtml = quotes[randomQuote].source +
    '<br>' + '<span class="citation" id="citation">' +
    quotes[randomQuote].citation +
    '</span><span class="year" id="year">' +
    quotes[randomQuote].year + '<br>' +
    '</span><span class="tags" id="tags">' +
    quotes[randomQuote].tags + '</span>';
  document.getElementById('source').innerHTML = secondPHtml;


  //change the background color randomly
  function randomBackgroundColor() {
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);
    var bgColor = 'rgb(' + red + ',' + green + ',' + blue + ')';

    //change the background color of loadQuote randomly
    document.getElementById('loadQuote').style.background = bgColor;

    //change the background color 
    document.body.style.background = bgColor;
  }
  randomBackgroundColor();

}

// display another quote when this button is clicked
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

/*******
Outside Resource Links

https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval

https://www.w3resource.com/javascript-exercises/javascript-math-exercise-40.php

https://teamtreehouse.com/library/javascript-loops-arrays-and-objects/simplify-repetitive-tasks-with-loops/the-refactor-challenge-part-2
********/