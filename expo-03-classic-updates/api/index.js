import axios from "axios";

const instance = axios.create({
  baseURL: "https://parseapi.back4app.com/",
  headers: {
    "X-Parse-Application-Id": "FQeH9CKysCWXobtvYPmHiaCWIFDAGdDrO78ICwIu",
    "X-Parse-REST-API-Key": "V28HEjBgEWbtcXdKLzK3hm3jxIQUeQ3WF7zKYVbT",
    "Content-Type": "application/json",
  },
});

export const getServerScore = () =>
  instance.get("classes/Score").then((res) => res.data.results);

export const addServerScore = (newScore) =>
  instance.post("classes/Score", {
    date: {
      __type: "Date",
      iso: newScore.date.toISOString(),
    },
    result: newScore.result,
  });
