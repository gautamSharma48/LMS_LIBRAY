import Cookies from "universal-cookie";
import Utils from "../utility";

const cookies = new Cookies();

function setDataInCookies(data, key, expires = Utils.addDays(new Date(), 30)) {
  cookies.set(key, JSON.stringify(data), { path: "/", expires });
}

function getDataFromCookies(key) {
  return cookies.get(key);
}

function removeDataFromCookies(key) {
  cookies.remove(key, { path: "/" });
}

export const sessionManager = {
  setDataInCookies,
  getDataFromCookies,
  removeDataFromCookies,
};
