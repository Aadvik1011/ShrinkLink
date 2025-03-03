const express= require("express");
const {handleGenerateShortUrl, handleGetOriginalUrl, handleGetAnalytics} = require("../controllers/url.js")

const router = express.Router();

router.post('/',handleGenerateShortUrl);
router.get('/url/:shortid',handleGetOriginalUrl);
router.get('/url/analytics',handleGetAnalytics);

module.exports ={UrlRoute : router,};