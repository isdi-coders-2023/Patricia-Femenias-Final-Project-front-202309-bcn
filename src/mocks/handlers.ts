import { http, HttpResponse } from "msw";
import furbysApiMock from "./furbysApiMock";
import newFurbysList from "./newFurbysList";

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
  http.post(`${import.meta.env.VITE_API_URL}/furbys/create`, () =>
    HttpResponse.json({ furby: newFurbysList[2] }),
  ),
  http.get(
    `${import.meta.env.VITE_API_URL}/furbys/6564a27d66ed505ce77a67d4`,
    () => {
      return HttpResponse.json({ furby: newFurbysList[1] });
    },
  ),
];

export default handlers;
