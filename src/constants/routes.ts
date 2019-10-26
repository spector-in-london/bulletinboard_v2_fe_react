export const formatRoute = (route: string, params: { [key: string]: string | number; }): string => {
  let formatted = route;

  for (let param in params) {
    formatted = formatted.replace(`:${param}`, <string>params[param]);
  }

  return formatted;
};

const Routes: { [key: string]: string } = {
  HOME: '/',
  READ: '/read',
  WRITE: '/write',

  API_GET_COMMENTS: '/api/comments?offset=:offset&sort=:sort',
  API_POST_COMMENTS: '/api/comments',
};

export default Routes;
