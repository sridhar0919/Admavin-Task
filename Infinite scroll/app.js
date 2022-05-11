const apiURL = 'https://picsum.photos/id/238/300/300';
const container = document.querySelector('.container');

// Generating random integer value
const getRandNum = () => {
  return Math.floor(Math.random() * 100);
};

// Get images
const loadImages = (numImages = 10) => {
  let i = 0;
  while (i < numImages) {
    const img = document.createElement('img');
    img.setAttribute('src', `https://picsum.photos/id/${getRandNum()}/350/300`);
    container.appendChild(img);
    i++;
  }
};

loadImages();

window.addEventListener('scroll', () => {
  if (
    window.scrollY + window.innerHeight >=
    document.documentElement.scrollHeight
  ) {
    loadImages(10);
  }
});
