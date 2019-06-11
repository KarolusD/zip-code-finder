function apiHandler(url) {
  return fetch(url, {
    headers: new Headers({
      'Content-Type': 'application/json',
      Accept: 'application/json'
    })
  })
    .then(res => res.json())
    .then(
      result => {
        return result;
      },
      error => {
        /* eslint no-console: ["error", { allow: ["warn", "error"] }] */
        console.error(error);
        return null;
      }
    );
}

export default apiHandler;
