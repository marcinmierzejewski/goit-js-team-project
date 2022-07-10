//import modules
import { fetchEvents } from './js/fetchEvents';
import { fetchEventById } from './js/fetchEventById';

const events = document.querySelector('.events');
const eventsWrapper = document.querySelector('.events__wrapper');
const eventId = document.querySelector('.events__id')

const searchEvents = async () => {
  try {
    const events = await fetchEvents();
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
        src=${images[0].url}          
                
        loading="lazy"
        >
      <p class="events__name"> Name: ${name} </p>
      <p class="events__date"> Date: ${dates.start.localDate} </p>
      <p class="events__address"> place: ${
        _embedded.venues[0].name
      } </p>
      </div>
      <p> priceRanges: min: ${priceRanges ? priceRanges[0].min : '----'} max: ${
          priceRanges ? priceRanges[0].max : '----'
        }</p>
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
        src=${images[0].url}          
                
        loading="lazy"
        >
      <p class="event__info"> INFO: ${info ? info : name} </p>
      <p class="event__when"> 
        WHEN: ${dates.start.localDate} 
              ${dates.start.localTime}
              ( ${dates.timezone} )
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


searchEvents();
// searchEventById();


