import './styles.css';
// import fetchCard from './js/apiService.js';
import cardTpl from './templates/card.hbs';
import refs from './js/refs';
import apiService from './js/apiService.js';
// import debounce from 'lodash.debounce';

refs.searchForm.addEventListener('submit', onSearch);
  
function onSearch(event) {
    event.preventDefault();

    const form = event.currentTarget;
    apiService.query = form.elements.query.value;

    apiService.resetPage();
    fetchCardImage();
    clearCardList();
    
}

function fetchCardImage() {
apiService.fetchCard().then(hits=> {
   cardsMarkup(hits);
// console.log(data)
   
   });
}
      
function cardsMarkup(hits) {
refs.cardList.insertAdjacentHTML('beforeend', cardTpl(hits));
}
      
function clearCardList() {
refs.cardList.innerHTML = '';
}

// ************

// const apiService = new ApiService();

// refs.searchForm.addEventListener('submit', onSearch);
  
// function onSearch(e) {
//     e.preventDefault();

//     // const form = event.currentTarget;
//     apiService.query = e.currentTarget.elements.query.value;

//     apiService.resetPage();
//     fetchCardImage();
//     clearCardList();
    
// }

// function fetchCardImage() {
// apiService.fetchCard().then(hits=> {
//    cardsMarkup(hits);
// // console.log(data)
   
//    });
// }
      
// function cardsMarkup(hits) {
// refs.cardList.insertAdjacentHTML('beforeend', cardTpl(hits));
// }
      
// function clearCardList() {
// refs.cardList.innerHTML = '';
// }