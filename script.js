// API
const options = {
  method: "POST",
  headers: {
    "X-RapidAPI-Key": "d42ec9d8b8msh6dc3ab4b25e3ac7p167e3djsnb889b41f6bf2",
    "X-RapidAPI-Host": "sameer-kumar-aztro-v1.p.rapidapi.com",
  },
};

fetch(
  "https://sameer-kumar-aztro-v1.p.rapidapi.com/?sign=${sign}&day=${today}",
  options
)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));
