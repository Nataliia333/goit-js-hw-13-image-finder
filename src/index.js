import './styles.css';
// import fetchCard from './js/apiService.js';
import cardTpl from './templates/card.hbs';
import refs from './js/refs';
import ApiService from './js/apiService.js';
// import debounce from 'lodash.debounce';


const apiService = new ApiService();

refs.searchForm.addEventListener('submit', onSearch);
  
function onSearch(event) {
    event.preventDefault();

    const form = event.currentTarget;
    apiService.query = form.elements.query.value;

    apiService.resetPage();
    fetchCard();
    clearCards();
    
}

function fetchCard() {
apiService.fetchCard().then(data=> {
   cardsMarkup(data);
   });
}
      
function cardsMarkup(hits) {
refs.cardList.insertAdjacentHTML('beforeend', cardTpl(hits));
}
      
function clearCards() {
refs.cardList.innerHTML = '';
}