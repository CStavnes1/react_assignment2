const axios = require("axios");
const router = require("express").Router();
const NYTIMES = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
const APIKEY = "&api-key=e74b17e821394fbcb799dc99ad6d7e75&q=";



router.get("/articles", (req, res) => {

  const params = Object.assign(
    { api_key: "9b3adf57854f4a19b7b5782cdd6e427a" },
    req.query
  );
  
  axios
    .get("https://api.nytimes.com/svc/search/v2/articlesearch.json", { params})
    .then(({ data: { response } }) => res.json(response.docs))
    .catch(err => res.status(422).json(err));
});

module.exports = router;

