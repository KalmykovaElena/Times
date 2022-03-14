const time = document.querySelector("#time"),
  greeting = document.querySelector("#text"),
  name = document.querySelector("#textName"),
  focus = document.querySelector("#focus");

const showAmPm = true;
const showTime = () => {
  let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();

  const ampm = hour >= 12 ? "pm" : "am";
  hour = hour % 12 || 12;
  time.innerHTML = `${hour}<span>:</span>${addZerro(
    min
  )}<span>:</span> ${addZerro(sec)}
        ${ampm}`;
  setTimeout(showTime, 1000);
};
const addZerro = (number) => (number < 10 ? "0" + number : number);
const setBg = () => {
  let today = new Date(),
    hour = today.getHours();

  if (hour < 12) {
    greeting.textContent = "Good Morning";
    document.body.style.backgroundImage = 'url("./img/morning.jpg")';
  } else if (hour < 18) {
    greeting.textContent = "Good Afternoon";
    document.body.style.backgroundImage = 'url("./img/day.jpg")';
  } else {
    greeting.textContent = "Good Evening";
    document.body.style.backgroundImage = 'url("./img/night.jpg")';
  }
};

const setName = (event) => {
  if (event.type === "keypress") {
    if (event.key === "Enter") {
      localStorage.setItem("name", event.target.innerHTML);
      getName();
      name.blur();
    }
    localStorage.setItem("name", event.target.innerHTML);
  }
};

const getName = () => {
  if (
    localStorage.getItem("name") == null ||
    localStorage.getItem("name") == 0
  ) {
    name.textContent = "[Enter Name]";
  } else {
    name.textContent = localStorage.getItem("name");
  }
};
name.addEventListener("keypress", setName);
showTime();
setBg();
getName();
