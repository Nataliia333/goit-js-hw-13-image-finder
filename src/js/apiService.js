const apiKey = '19964134-f54b1836ef9c2cc5adbbfd779';

function featchCard(searchQuery, page = 1) {
    const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${searchQuery}&page=${page}&per_page=12&key=${apiKey}`;
    return fetch(url)
      .then(res => res.json())
     }
 export default featchCard;