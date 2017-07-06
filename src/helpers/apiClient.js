export function postOptions (data, isJson = true) {
  let options = {method: 'POST'};

  if (isJson) {
    options.headers = {'Content-Type': 'application/json;charset=UTF-8'};
    options.body = JSON.stringify(data);
  } else {
    options.body = data;
  }
  return options;
}

export function patchOptions (data, isJson = true) {
  let options = {method: 'PATCH'};

  if (isJson) {
    options.headers = {'Content-Type': 'application/json;charset=UTF-8'};
    options.body = JSON.stringify(data);
  } else {
    options.body = data;
  }

  return options;
}

export function fetchIt (url, options = {}) {

  options = {
    ...options,
    credentials: 'same-origin'
  };

  return new Promise((resolve, reject) => {
    fetch(url, options)
      .then(response => {
        if (response.status >= 200 && response.status < 300) {
          return response.json();
        }
        else if (response.status === 401) {
          throw new Error(response.statusText);
        }
        else if (response.status === 429) {
            throw new Error(response.statusText);
        }
        else if (response.status >= 400 && response.status < 500) {
          return response.json()
            .then(jsonResponse => {
                throw new Error(response.statusText);
            });
        }
        throw new Error(response.statusText);

      })
      .then(response => resolve(response))
      .catch(e => reject(e));
  });
}

export const getRandomUser = () => fetchIt('https://randomuser.me/api/?results=90');
