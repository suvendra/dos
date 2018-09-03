
/**
 *
 * @param {*} url
 * @param {*} options
 * @param {*} requestParams
 */
export function httpGet(path, requestParams, options) {
  return fetch_wrapper("GET", path, options, requestParams);
}

/**
 *
 * @param {*} url
 * @param {*} options
 * @param {*} requestParams
 */
export function httpPost(path, options, requestParams) {
  return fetch_wrapper("POST", path, options, requestParams);
}

/**
 *
 * @param {*} url
 * @param {*} options
 * @param {*} requestParams
 */
export function httpPatch(url, requestParams, options) {
  return fetch_wrapper("PATCH", url, options, requestParams);
}

/**
 * @param {*} method
 * @param {*} url
 * @param {*} headers
 * @param {*} requestParams
 */
export function fetch_wrapper(method, url, headers, requestParams) {
  console.log("Request", method, url, requestParams,  );
  // dispatch action to show loading
  // store.dispatch(showLoading());

  // create request  object
  return fetch(url, {
    method: method,
    headers: headers,
    body: method === "GET" ? null : JSON.stringify(requestParams)
  }).then(response => {
      return responseHandler(response);
  }).catch(e => {
      console.error(e.response);
  });
}

/**
 *
 * @param {*} response
 */
function responseHandler(response) {
  if (response.ok) {
    return response.json();
  } else {
    let error = new Error(response.status);
    error.response = response.json();
    throw error;
  }
}
