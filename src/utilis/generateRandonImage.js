// Array of six different image sources
export const imageSources = [
  {
    id: 0,

    // src: "/images/listings/listing-single-2.jpg",
    src: '/images/listings/product-listing-1.png',
    alt: '2.jpg',
  },
  {
    id: 2,
    src: '/images/listings/product-listing-2.png',
    // src: "/images/listings/listing-single-2a.jpg",
    alt: '2a.jpg',
  },
  {
    id: 3,
    src: '/images/listings/product-listing-3.png',
    // src: "/images/listings/listing-single-3.jpg",
    alt: '3.jpg',
  },
  {
    id: 4,
    src: '/images/listings/product-listing-4.png',
    // src: "/images/listings/listing-single-3a.jpg",
    alt: '3a.jpg',
  },
  {
    id: 5,
    src: '/images/listings/product-listing-5.png',
    // src: "/images/listings/listing-single-3b.jpg",
    alt: '3b.jpg',
  },
  {
    id: 6,
    src: '/images/listings/product-listing-6.png',
    // src: "/images/listings/listing-single-3c.jpg",
    alt: '3c.jpg',
  },
  {
    id: 7,
    src: '/images/listings/product-listing-7.png',
    // src: "/images/listings/listing-single-4a.jpg",
    alt: '4a.jpg',
  },
  {
    id: 8,
    // src: "/images/listings/listing-single-4b.jpg",
    src: '/images/listings/product-listing-10.png',
    alt: '4b.jpg',
  },
  {
    id: 1,
    src: '/images/listings/product-listing-9.png',
    // src: "/images/listings/listing-single-5.jpg",
    alt: '5.jpg',
  },
];

// Function to pick a random image source
export const getRandomImageSource = () => {
  // Generate a random index between 0 and 5 (inclusive)
  const randomIndex = Math.floor(Math.random() * imageSources.length);
  // Return the image source at the randomly selected index
  return imageSources[randomIndex].src;
};

// Example usage
