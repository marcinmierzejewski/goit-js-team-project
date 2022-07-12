//import modules
import { fetchEvents } from './js/fetchEvents';
import { fetchEventById } from './js/fetchEventById';

const events = document.querySelector('.events');
const eventsWrapper = document.querySelector('.events__wrapper');
const eventId = document.querySelector('.events__id');
const inputEvent = document.querySelector('.search-box');
const searchBtn = document.querySelector('.search-btn')

const searchEvents = async () => {
  try {
    const events = await fetchEvents(inputEvent.value, '', 2);
    console.log(events);
    // console.log(events._embedded.events[0]._embedded.venues[0].address.line1)
    renderEvents(events._embedded.events);
  } catch (error) {
    console.log(error.message);
    console.log('Something WRONG 0_o !?!');
  }
};

function renderEvents(data) {
  // console.log(data)
  const markup = data
    .map(
      ({ id, name, dates, images, _embedded, priceRanges }) =>
        `
    <div class="events__wrapper">     
      <img  data-id=${id}
        class="events__image" 
        src=${images.filter(i => i.ratio === '4_3').map(i => `${i.url}`)}          
                
        loading="lazy"
        >
        <div class="events__design"></div>
      <p class="events__name">${name} </p>
      <p class="events__date">${dates.start.localDate} </p>
      <p class="events__address"><svg class="events__svg" viewBox="0 0 6 9" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3 0C1.34581 0 0 1.40339 0 3.12836C0 5.29645 3.00295 9 3.00295 9C3.00295 9 6 5.18983 6 3.12836C6 1.40339 4.65424 0 3 0ZM3.90516 4.04434C3.65558 4.30455 3.32781 4.43469 3 4.43469C2.67224 4.43469 2.34437 4.30455 2.09489 4.04434C1.59577 3.52392 1.59577 2.67709 2.09489 2.15662C2.33658 1.90448 2.65807 1.76561 3 1.76561C3.34193 1.76561 3.66337 1.90453 3.90516 2.15662C4.40428 2.67709 4.40428 3.52392 3.90516 4.04434Z" fill="white"/>
</svg>
${_embedded.venues[0].name} </p>
      </div>
    `
    )
    .join('');
  events.innerHTML = markup;
}

//response from clicked event, searching by id
const searchEventById = async (e) => {
  try {
    const eventById = await fetchEventById(selectEvents(e));
    console.log(eventById);
    renderEventsById(eventById);
    // console.log(events._embedded.events[0]._embedded.venues[0].address.line1)
    // renderEvents(events._embedded.events);
  } catch (error) {
    console.log(error.message);
    console.log('Something WRONG 0_o !?!');
  }
};

//rendering clicked event on modal window
function renderEventsById(dataId)  {
  const { info, name, dates, images, _embedded, priceRanges, url } = dataId

  const markupId =
        `
    <div class="event__card">     
      <img
        class="event__image" 
        src=${images.filter(i => (i.ratio === '3_2' && i.width === 1024)).map(i => `${i.url}`)}          
                
        loading="lazy"
        >
      <p class="event__info"> INFO: ${info ? info : name} </p>
      <p class="event__when"> 
        WHEN: ${dates.start.localDate} 
              ${dates.start.localTime}
              ${dates.timezone ? `(${dates.timezone})` : ''}
      </p>
      <p class="event__where">
         WHERE:
          ${_embedded.venues[0].city.name} , ${_embedded.venues[0].country.name}
          ${_embedded.venues[0].name}
      </p>
      <p class="event__who">
         WHO:          
          ${_embedded.attractions ? _embedded.attractions[0].name : name }
      </p>
      <p class="event__price"> 
        PRICES:
        ${priceRanges ? 
          priceRanges.map(p => `${p.type}  ${p.min}-${p.max}  ${p.currency}`):
           "-----"}        
      </p>
      <p class="event__ticket">
         BUY TICKETS:
          <button>
            <a href="${url}" target="_blank">BUY TICKETS</a>
          </button>
      </p>      
    </div>      
    `  
  eventId.innerHTML = markupId;
}

//Function who read event id
function selectEvents(e) {
  const selectedEventsId = e.target.dataset.id
  console.log(selectedEventsId)
  return selectedEventsId
}

events.addEventListener("click", searchEventById);

searchBtn.addEventListener("click", searchEvents)
// searchEvents();
// searchEventById();


