import './styles.css';
// import fetchCard from './js/apiService.js';
import cardTpl from './templates/card.hbs';
import refs from './js/refs';
import ApiService from './js/apiService.js';
// import debounce from 'lodash.debounce';


const apiService = new ApiService();

refs.searchForm.addEventListener('submit', onSearch);
  
function onSearch(e) {
    e.preventDefault();

    // const form = event.currentTarget;
    apiService.query = e.currentTarget.elements.query.value;

    apiService.resetPage();
    fetchCard();
    // clearCardList();
    
}

function fetchCard() {
apiService.fetchCard().then(data=> {
   cardsMarkup(data);
// console.log(data)
   
   });
}
      
function cardsMarkup(data) {
refs.cardList.insertAdjacentHTML('beforeend', cardTpl(data));
}
      
// function clearCardList() {
// refs.cardList.innerHTML = '';
// }