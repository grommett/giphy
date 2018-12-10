const apiKey = env.GIPHY_API_KEY;
const endPoint = 'https://api.giphy.com/v1/gifs/trending';

export default function giphy(limit, rating, offset) {
  const url = `${endPoint}?api_key=${apiKey}&limit=${limit || 25}&rating=${rating ||
    'G'}&offset=${offset || 0}`;
  return fetch(url)
    .then(res => res.json())
    .then(giphyRes => giphyRes.data)
    .catch(console.error);
}
