import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
console.log("local storage "+localStorage.getItem("persist:root"));
//const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken;



const TOKEN ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1N2YyZmIxZjBkYTU4OTcxMzQ1ZTdiOSIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE3MDI4MzQxMjUsImV4cCI6MTcwMzA5MzMyNX0.i4vXmRUIxu8zUjfPu1SpqXqFRe5KtBxjsu6B7HKceuA";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
