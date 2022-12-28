export const ACCESS_TOKEN_NAME = "access_token";

export const DEFAULT_COOKIE_MAX_AGE = 60*60*24; // 1 day


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
