const apiKey = '19964134-f54b1836ef9c2cc5adbbfd779';

// function fetchCard(searchQuery, page) {
//    const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${searchQuery}&page=${page}&per_page=12&key=${apiKey}`;
//    return fetch(url)
//      .then(res => res.json())
//      .then (({hits}) => hits);
//     };
// export default fetchCard;


export default class ApiService {
   constructor() {
      this.searchQuery = '';
      this.page = 1;
   }

   fetchCard() {
    const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12&key=${apiKey}`;
    return fetch(url)
      .then(res => res.json())
      .then (({hits}) => {
         this.incrementPage();
         return hits;
      });
   };

 incrementPage() {
   this.page += 1;
 }

 resetPage() {
   this.page = 1;
 }

 get query() {
   return this.searchQuery;
 }

 set query(newQuery) {
   this.searchQuery = newQuery;
 }
}
 
