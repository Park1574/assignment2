const imageUrls = [
  'images/image1.jpg',
  'images/image2.jpg',
  'images/image3.jpg',
  'images/image4.jpg',
  'images/image5.jpg',
  'images/image6.jpg',
  'images/image7.jpg',
  'images/image8.jpg'
];

let currentGrid = null;

function renderGrid(size) {
  const container = document.getElementById('galleryContainer');
  container.innerHTML = '';
  const table = PhotoGalleryLib.generateGrid(imageUrls, size);
  table.id = 'imagesGrid';
  container.appendChild(table);
}

PhotoGalleryLib.onSizeClassChange(function(size) {
  console.log(size);
  renderGrid(size);
}); 