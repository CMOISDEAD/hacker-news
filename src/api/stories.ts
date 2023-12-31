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

export const getItem = async (id: number | string) => {
  try {
    const res = await instance.get(`item/${id}.json`);
    return res.data;
  } catch (err) {
    console.error(err);
  }
};
