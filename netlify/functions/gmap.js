const axios = require("axios");

const handler = async (event) => {
  const { lang } = event.queryStringParameters;

  const API_KEY = process.env.REACT_APP_GMAP_API_KEY;
  const url = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}&language=${lang}`;

  try {
    const { data } = await axios.get(url);

    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (error) {
    const { status, statusText, headers, data } = error.response;
    return {
      statusCode: status,
      body: JSON.stringify({ status, statusText, headers, data }),
    };
  }
};

module.exports = { handler };
