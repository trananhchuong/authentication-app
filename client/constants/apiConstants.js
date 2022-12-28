export const BASE_API_URL = "http://localhost:8000/";
export const ACCESS_TOKEN_NAME = "accessToken";


export const getCookie = (name) => {
  try {
    if (typeof window === "undefined") return null;

    let documentCookie = document.cookie;
    documentCookie = documentCookie.split(";");
    let result = null;
    documentCookie.forEach((item) => {
      if (item.indexOf(`${name}=`) !== -1) {
        result = item.replace(`${name}=`, "");
        result.trim();
      }
    });
    return result;
  } catch (e) {
    console.log("Error getCookie:", e);
    return null;
  }
};
