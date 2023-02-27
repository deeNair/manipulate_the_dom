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
  //DOM's personal website title is a bit wordy. Write a JavaScript statement that selects the #main-title ID element. Remember there are a couple of ways to query id. Change the text of the title to something shorter.

  const mainTitle=document.querySelector('#main-title');
  mainTitle.textContent="Hi I'm Dom ,welcome!"

  // Part 2
  //Select the bodyand change the background-color to a new color of your choice.

  const body=document.querySelector('body');
  body.style.backgroundColor='grey';

  // Part 3
  //Select DOM's Favorite Things list and remove the last list item.

const favUL=document.querySelector('ul');
favUL.removeChild(favUL.lastElementChild);
//favUL.lastElementChild.remove();
console.log(favUL);


  // Part 4
  //Select all .special-titleclass elements and change their font-sizeto 2rem. Remember you might have to iterate through the list of elements

  const subTitle=document.querySelectorAll('.special-title');
  console.log(subTitle);
  subTitle.forEach(el=> el.style.fontSize ='2rem')
  //console.dir(subTitle[0]);

  // Part 5
  //Turns out DOM never raced in Chicago. Access the Past Races list and remove Chicago.
 const pastRace= document.querySelector('#past-races');
 //pastRace.removeChild(pastRace.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling);
 //pastRace.childNodes[3];
 pastRace.children[3].remove();

  // Part 6
  //Let's add to DOM's Past Races list. Create a new <li>element, change the new <li>text to the name of a city, and append it to the Past Races list.
 const newLi=document.createElement('li');
 //newLi.textContent="japan";
 console.log(newLi);
 newLi.textContent="japan";
 pastRace.appendChild(newLi);
 //pastRace.appendChild[3]
 console.log(pastRace);

  // Part 7
  //Create a new .blog-post corresponding to the new city added in Part 6. You will have to create a new <div>with class of .blog-post, a new <h2>with text, and a new <p>with some text. Think about what order you want to create the elements, and what order you want to append them in.

  const di=document.createElement('div');
   di.classList.add('.blog-post');
   console.log(di);
   const head2=document.createElement('h2');
   head2.textContent="japan";
   const para=document.createElement('p');
   para.textContent="i love japan";
   di.appendChild(head2);
   di.appendChild(para);
   const main=document.querySelector('.main');
   main.appendChild(di);


  // Part 8
  //Query select the #quote-titleID element and add a click event handler. That event handler should use the function randomQuotewhenever #quote-titleis clicked.

  const randoQuote = function() {
    document.querySelector('#quote-of-the-day').innerText =`"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
  };

  const quote=document.querySelector('#quote-title');


  quote.addEventListener('click',randoQuote);


  // Part 9
  /**Select all .blog-postclass elements. Iterate through the list of .blog-postclass elements and apply two event handlers to each node. The first event handler should be listening for mouseoutevents while the second handler should be listening for mouseenterevents.

The mouseouthandler should toggle the class .purple
The mouseenterhandler should toggle the class .red
Test it out!

Hint:

Remember the document node property .classListand the document node method .toggle().**/

const allBlog= document.querySelectorAll('.blog-post');
allBlog.forEach((bl)=>{
  bl.addEventListener('mouseout',function(event){
    bl.classList.toggle('purple')
    
  })
 bl.addEventListener('mouseenter',function(){
  bl.classList.toggle('red')
 })
  
})


 
});
