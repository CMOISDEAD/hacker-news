import instance from "./instance";

export const fetcher = (url: string) =>
  instance
    .get(`${url}.json`)
    .then((res) => res.data)
    .catch((err) => console.error(err));

export const getStorieSet = (url: string) =>
  instance
    .get(`${url}.json`)
    .then((res) => res.data)
    .catch((err) => err);

export const getItem = (id: number | string) =>
  instance
    .get(`item/${id}.json`)
    .then((res) => res.data)
    .catch((err) => err);
