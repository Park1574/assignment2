let currentGrid = null;

const imageUrls = [
  './images/image1.jpg',
  './images/image2.jpg',
  './images/image3.jpg',
  './images/image4.jpg',
  './images/image5.jpg',
  './images/image6.jpg',
  './images/image7.jpg',
  './images/image8.jpg'
];


function updateGrid(size) {
  console.log(`화면 크기: ${size}`); 

  const container = document.getElementById("imagesGridContainer");

  if (currentGrid) {
    container.removeChild(currentGrid);
    currentGrid = null;
  }

  currentGrid = PhotoGalleryLib.generateGrid(imageUrls, size);

  container.appendChild(currentGrid);
}

PhotoGalleryLib.onSizeClassChange(updateGrid);
