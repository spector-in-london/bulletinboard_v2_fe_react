import { formatRoute } from '../../constants/routes';

const route = "/api/myroute?param1=:key1&param2=:key2";

const paramKeys = {
  key1: "formattedKey1",
  key2: "formattedKey2"
};

const formattedRoute = "/api/myroute?param1=formattedKey1&param2=formattedKey2";

it('should replace the route param keys with the keys from the object that is passeds', () => {
  expect(formatRoute(route, paramKeys)).toEqual(formattedRoute);
});
