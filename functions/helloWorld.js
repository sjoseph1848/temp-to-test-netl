const axios = require('axios');
require('dotenv').config();

exports.handler = async function (event, context) {
  const API_SECRET = process.env.NEWS_API_SECRET;
  const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_SECRET}`;

  try {
    const { data } = await axios.get(url);
    return {
      statusCode: 200,
      body: JSON.stringify(data.articles),
    };
  } catch (error) {
    return { statusCode: 500, body: error.toString() };
  }
};
