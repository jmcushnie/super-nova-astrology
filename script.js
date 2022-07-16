const horoscope = document.getElementById("description");
const date = document.getElementById("date");

// API
const options = {
  method: "POST",
  headers: {
    "X-RapidAPI-Key": "d42ec9d8b8msh6dc3ab4b25e3ac7p167e3djsnb889b41f6bf2",
    "X-RapidAPI-Host": "sameer-kumar-aztro-v1.p.rapidapi.com",
  },
};

// Update Selection
function Update() {
  let userSignInput = document.getElementById("starsign");
  let mySign = userSignInput.options[userSignInput.selectedIndex].value;
  let userDayInput = document.getElementById("select-day");
  let myDay = userDayInput.options[userDayInput.selectedIndex].value;
  console.log(mySign);
  console.log(myDay);

  fetch(
    `https://sameer-kumar-aztro-v1.p.rapidapi.com/?sign=${mySign}&day=${myDay}`,
    options
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const description = data.description;
      const currentDate = data.current_date;
      horoscope.innerText = description;
      date.innerText = currentDate;
    })
    .catch((err) => console.error(err));
}
Update();
