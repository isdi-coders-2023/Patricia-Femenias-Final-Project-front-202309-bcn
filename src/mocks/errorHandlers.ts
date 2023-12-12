import { http, HttpResponse } from "msw";

const apiURL = import.meta.env.VITE_API_URL;

export const errorHandlers = [
  http.get(`${apiURL}/furbys`, () => HttpResponse.error()),
  http.delete(`${apiURL}/furbys/:id`, () => HttpResponse.error()),
  http.post(`${apiURL}/furbys/create`, () => HttpResponse.error()),
  http.get(`${apiURL}/furbys/6564a27d66ed505ce77a67d4`, () =>
    HttpResponse.error(),
  ),
  http.patch(`${apiURL}/furbys/6564a27d66ed505ce77a67d3`, () =>
    HttpResponse.error(),
  ),
];
