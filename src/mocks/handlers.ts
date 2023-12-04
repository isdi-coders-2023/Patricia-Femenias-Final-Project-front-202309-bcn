import { http, HttpResponse } from "msw";
import furbysApiMock from "./furbysApiMock";

const handlers = [
  http.get(`${import.meta.env.VITE_API_URL}/furbys`, () => {
    return HttpResponse.json(furbysApiMock);
  }),
  http.delete(
    `${import.meta.env.VITE_API_URL}/furbys/6564a27d66ed505ce77a67d3`,
    () => {
      return HttpResponse.json({});
    },
  ),
];

export default handlers;
