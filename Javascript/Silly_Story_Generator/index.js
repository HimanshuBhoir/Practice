const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

const storyText = 'It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.';
const insertx = ['Willy the Goblin', 'Big Daddy', 'Father Christm']
const inserty = ['the soup kitchen', 'Disneyland', 'the White House']
const insertz = ['spontaneously combusted', 'melted into a puddle on the sidewalk', 'turned into a slug and crawled away']

randomize.addEventListener('click', result);

function result() {
    let newStory = storyText;
	let Xval = randomValueFromArray(insertx);
	let Yval = randomValueFromArray(inserty);
	let Zval = randomValueFromArray(insertz);

	newStory = newStory.replace(':insertx:',Xval);
	newStory = newStory.replace(':insertx:',Xval);
	newStory = newStory.replace(':inserty:',Yval);
	newStory = newStory.replace(':insertz:',Zval);

    if(customName.value != '') {
        const name = customName.value;
        newStory = newStory.replace('Bob',name);
    }

    if(document.getElementById("uk").checked) {
        const weight = Math.round(300);
        const temperature =  Math.round(94);
        newStory = newStory.replace('94 farenheit',temperature);
        newStory = newStory.replace('300 pounds',weight);
    }

    story.textContent = newStory;
    story.style.visibility = 'visible';
}