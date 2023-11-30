import { http, HttpResponse } from "msw";
import furbysApiMock from "./furbysApiMock";

const handlers = [
  http.get(`${import.meta.env.VITE_API_URL}/furbys`, () => {
    return HttpResponse.json(furbysApiMock);
  }),
];

export default handlers;
