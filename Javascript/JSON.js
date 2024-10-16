const section = document.querySelector('section');

let para1 = document.createElement('p');
let para2 = document.createElement('p');
let motherInfo = 'The mother cats are called ';
let kittenInfo;
const requestURL = 'https://mdn.github.io/learning-area/javascript/oojs/tasks/json/sample.json';

fetch(requestURL)
  .then(response => response.text())
  .then(text => displayCatInfo(text))

function displayCatInfo(catString) {
  
  let total = 0;
  let male = 0;

// Add your code here
  const cat = JSON.parse(catString);
  for(let i=0; i<cat.length; i++){
    if(i === cat.length-1)  motherInfo += `and ${cat[i].name}.`;
    else motherInfo += `${cat[i].name}, `;

    for(let k of cat[i].kittens){
      if(k.gender === 'm')  male++;
      total++;
    }

  }

  kittenInfo += `total : ${total}, male : ${male}`;
// Don't edit the code below here!

  para1.textContent = motherInfo;
  para2.textContent = kittenInfo;
}

section.appendChild(para1);
section.appendChild(para2);
    