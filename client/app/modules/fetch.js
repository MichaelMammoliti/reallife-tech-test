import { stringify } from 'query-string';

const newFetch = (route, options) => {
  const newOptions = {
    headers: {
      ...options && options.headers,
    },
    ...options,
  };

  if (newOptions.body) {
    newOptions.body = JSON.stringify(options.body);
  }

  const query = stringify(newOptions.query);
  const newRoute = query ? `${route}?${query}` : route;

  delete newOptions.query;

  return window.fetch(newRoute, newOptions).then(r => r.json());
};

export default newFetch;
