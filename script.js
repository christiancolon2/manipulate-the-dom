let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`
];

document.addEventListener("DOMContentLoaded", function(event) {
  // Random quote of the day generator
  const randomQuote = function() {
    document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
  };
  randomQuote();
  
  // Do all of your work inside the document.addEventListener  

  // Part 1
const mainTitle = document.getElementById('main-title');
mainTitle.textContent = 'Welcome To My Personal Website';

// document.querySelector('#main-title').textContent = 'Welcome to My Personal Website';


  // Part 2
const body = document.querySelector('body');
body.style.backgroundColor = 'pink';

// document.querySelector('body').style.backgroundColor = 'blue';

  // Part 3
const favoriteThingsList = document.querySelector('#favorite-things');
const lastListItem = favoriteThingsList.lastElementChild;
favoriteThingsList.removeChild(lastListItem);

// const favoriteThingsList = document.querySelector('#favorite-things > li')

// document.querySelector('#favorite-things').removeChild(favoriteThingsList[favoriteThingsList.length - 1]);

  // Part 4
  const specialTitles = document.querySelectorAll('.special-title');
  for (let i = 0; i < specialTitles.length; i++) {
  specialTitles[i].style.fontSize = '2rem';
  }

  // document.querySelectorAll('.special-title').forEach((item) => {
  //   item.style.fontSize = '2rem';
  // })

  // Part 5
  var newRaces = document.getElementById('past-races');
  newRaces.removeChild(newRaces.getElementsByTagName('li')[3]);

  // document.querySelectorAll('#past-races > li').forEach((item) => {
  //   if (item.textContent.trim() === 'Chicago') {
  //     document.querySelector('#past-races').removeChild(item);
  //   }
  // });
  
  
  // Part 6
  const pastRacesList2 = document.querySelector('#past-races');
  const newListItem = document.createElement('li');
  newListItem.textContent = 'Bangkok';
  pastRacesList2.appendChild(newListItem);

  // const li = document.createElement('li')
  // li.textContent = 'cincinnati'
  // document.querySelector('#past-races').appendChild(li);
  

  // Part 7

  
  
 const blogPost = document.createElement('div');
 blogPost.classList.add('blog-post');
 blogPost.classList.add('purple');
 const heading = document.createElement('h1')
 heading.textContent = 'Bangkok'
 const pE1 = document.createElement('p')
 pE1.textContent = 'Bangkok is the best city to drive fast cars!'
 document.querySelector('.main').appendChild(blogPost);
 blogPost.appendChild(heading);
 blogPost.appendChild(pE1);



  // Part 8
  const quoteTitle = document.querySelector('#quote-title');
  quoteTitle.addEventListener('click', randomQuote);

  document.querySelector('#quote-title').addEventListener('click', () => randomQuote());

  // Part 9
  const blogPosts = document.querySelectorAll('.blog-post');

  for (let i = 0; i < blogPosts.length; i++) {
    const blogPost = blogPosts[i];
    blogPost.addEventListener('mouseout', function() {
      blogPost.classList.toggle('purple');
    });
    blogPost.addEventListener('mouseenter', function() {
      blogPost.classList.toggle('red');
    });
  }
});
