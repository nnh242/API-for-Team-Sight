/* eslint-disable no-undef */
function search(query, cb) {
    return fetch(query, {
      accept: 'application/json',
    }).then(checkStatus)
      .then(parseJSON)
      .then(cb);
  };
  
  function checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
      return response;
    }
    const error = new Error(`HTTP Error ${response.statusText}`);
    error.status = response.statusText;
    error.response = response;
    console.log(error); // eslint-disable-line no-console
    throw error;
  }
  
  function parseJSON(response) {
    var json = response.json();
    // console.log('---response.json---',json);
    return json;
  }
  
  const Client = { search };
  export default Client;