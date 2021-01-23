import './styles.css';
// import fetchCard from './js/apiService.js';
import cardTpl from './templates/card.hbs';
import refs from './js/refs';
import apiService from './js/apiService.js';
// import debounce from 'lodash.debounce';

// const loadMoreBtn = new LoadMoreBtn({
//    selector: 'button[data-action="load-more"]',
//    hidden: true,
//  });

refs.searchForm.addEventListener('submit', onSearch);
  
function onSearch(event) {
    event.preventDefault();

    const form = event.currentTarget;
    apiService.query = form.elements.query.value;

    apiService.resetPage();
    fetchCardImage();
    clearCardList();
    form.reset();
    
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

refs.loadMoreBtn.addEventListener('click', () => {
   apiService.fetchCard().then(hits=> {
      cardsMarkup(hits);
});
});

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