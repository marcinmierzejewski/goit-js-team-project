//Import library to HTTP request
import axios from 'axios';
const axios = require('axios');

//Function for HTTP requests - used axios library,
export const fetchEvents = async () => {
  const API_KEY = 'A5eAX0q8IljtAC67wdXuGh2kSb6ZRaVP';
  const params = new URLSearchParams({
    keyword: 'basketball',
    countryCode: 'US',
    // city: 'warsaw',
    sort: 'name,asc',
  });
    const response = await axios.get(
      `https://app.ticketmaster.com/discovery/v2/events.json?apikey=${API_KEY}&${params}`
    );
    const responseData = response.data;
    return responseData;
  
};
