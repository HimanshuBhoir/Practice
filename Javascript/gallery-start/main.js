const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const imageFilenames = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];

/* Declaring the alternative text for each image file */
const altTexts = {
  'pic1.jpg': 'Closeup of a blue human eye',
  'pic2.jpg': 'Rock that looks like a wave',
  'pic3.jpg': 'Purple and white flowers',
  'pic4.jpg': 'Ancient building with cloudy sky',
  'pic5.jpg': 'A photo of a butterfly resting on a leaf',
};

/* Looping through images */
function loopImage() {
  for (let i = 0; i < imageFilenames.length; i++) {
    const newImage = document.createElement('img');
    const imageSrc = `images/${imageFilenames[i]}`;
    newImage.setAttribute('src', imageSrc);
    newImage.setAttribute('alt', altTexts[imageFilenames[i]]);
    thumbBar.appendChild(newImage);

    // Adding click event to each thumbnail
   newImage.addEventListener('click', () => {
    setImage(imageSrc, altTexts[imageFilenames[i]]);
   })
  }
}

// ClickImage Function to set main image
function setImage(src, alt){
    displayedImage.setAttribute('src', src);
    displayedImage.setAttribute('alt', alt);
}

/* Wiring up the Darken/Lighten button */
btn.addEventListener('click', () => {
  const isDark = btn.getAttribute('dark') === 'dark';

  if (isDark) {
    btn.setAttribute('class', 'light');
    btn.textContent = 'Lighten';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
  } else {
    btn.setAttribute('class', 'dark');
    btn.textContent = 'Darken';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0)';
  }
});

/* Initial call to populate thumbnails */
window.addEventListener('load', (event) => {
  loopImage();
});``
