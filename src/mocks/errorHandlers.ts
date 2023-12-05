import { http, HttpResponse } from "msw";

const apiURL = import.meta.env.VITE_API_URL;

export const errorHandlers = [
  http.get(`${apiURL}/furbys`, () => HttpResponse.error()),
  http.delete(`${apiURL}/furbys/:id`, () => HttpResponse.error()),
];
