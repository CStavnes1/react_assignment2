import axios from "axios";
const NYTIMES = "https://api.nytimes.com/svc/search/v2/articlesearch.json?";
const APIKEY = "&api-key=e74b17e821394fbcb799dc99ad6d7e75&q=";

export default {
  search: function(query) {
    return axios.get(`${NYTIMES}&q=${query}${APIKEY}`);
  }
};
