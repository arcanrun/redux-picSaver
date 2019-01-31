export default function unsplashApi(SEARCH_PHRASE, PAGE) {
  const KEY =
    "069e0572e4bf6c4760733f6bb075b7548b2c42370f3a64ffeed691910b32e2eb";

  const URL = `https://api.unsplash.com/search/photos?page=${parseInt(
    PAGE
  )}&query=${SEARCH_PHRASE}&client_id=${KEY}`;
  return URL;
}

// https://api.unsplash.com/photos/?client_id=YOUR_ACCESS_KEY

//https://api.unsplash.com/search/photos?page=1&query=office&client_id=069e0572e4bf6c4760733f6bb075b7548b2c42370f3a64ffeed691910b32e2eb
