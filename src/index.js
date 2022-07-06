//import modules
import { fetchEvents } from './js/fetchEvents';

const test = document.querySelector('.events');

const renderSearchEvents = async () => {
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
      ({ name, dates, images, _embedded, priceRanges }) =>
        `
    <div class="events__wrapper">     
      <img 
        class="events__image" 
        src=${images[0].url}          
                
        loading="lazy"
        >
      <p class="events__name"> Name: ${name} </p>
      <p class="events__date"> Date: ${dates.start.localDate} </p>
      <p class="events__address"> address: ${
        _embedded.venues[0].address.line1
      } </p>
      </div>
      <p> priceRanges: min: ${priceRanges ? priceRanges[0].min : '----'} max: ${
          priceRanges ? priceRanges[0].max : '----'
        }</p>
    `
    )
    .join('');
  test.innerHTML = markup;
}
renderSearchEvents();
