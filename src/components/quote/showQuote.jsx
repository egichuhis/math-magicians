import React, { useEffect, useState } from 'react';
import './quote.css';

const ShowQuote = () => {
  const [quote, setQuote] = useState([]);

  useEffect(() => {
    const apiUrl = process.env.REACT_APP_API_URL;
    const apiKey = process.env.REACT_APP_API_KEY;

    fetch(apiUrl, {
      method: 'GET',
      headers: {
        'X-Api-Key': apiKey,
      },
    }).then((response) => response.json()).then((responseData) => {
      setQuote(responseData);
    }).catch((error) => {
      throw new Error('Oops!Check your internet and reload page', error);
    });
  }, []);

  return (
    <div className="quoteDiv">
      {quote.length > 0 ? (
        <>
          <p>
            Quote:
            {' '}
            {quote[0].quote}
          </p>
          <p>
            Author:
            {' '}
            {quote[0].author}
          </p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>

  );
};

export default ShowQuote;
