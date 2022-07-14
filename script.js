let userDayInput = document.getElementById("select-day");
let myDay = userDayInput.value;
let userSignInput = document.getElementById("starsign");
let mySign = userSignInput.value;

// API
const options = {
  method: "POST",
  headers: {
    "X-RapidAPI-Key": "d42ec9d8b8msh6dc3ab4b25e3ac7p167e3djsnb889b41f6bf2",
    "X-RapidAPI-Host": "sameer-kumar-aztro-v1.p.rapidapi.com",
  },
};

fetch(
  `https://sameer-kumar-aztro-v1.p.rapidapi.com/?sign=${mySign}&day=${myDay}`,
  options
)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));
