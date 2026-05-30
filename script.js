function answer(btn, isYes) {
  const feedback = document.getElementById("feedback");
  document.querySelectorAll(".btn")
    .forEach(b => b.classList.remove("correct", "wrong"));

  if (isYes) {
    btn.classList.add("correct");
    feedback.textContent = "I like you too ❤️";

    localStorage.setItem("feelings", "Yes");

    setTimeout(() => {
      window.location.href = "Date.html";
    }, 2000);
  } else {
    btn.classList.add("wrong");
    feedback.textContent = "Aray koooo!!! 🥺";
    localStorage.setItem("feelings", "No");
  }
}

// Date
function scheduleDate() {
  const date = document.getElementById("datePick").value;
  const time = document.getElementById("timePick").value;
  const result = document.getElementById("result");

  if (!date || !time) {
    result.textContent = "Please choose both date and time 📅";
    return;
  }

  localStorage.setItem("date", date);
  localStorage.setItem("time", time);

  result.textContent = `Our date is set on ${date} at ${time} ❤️`;

  setTimeout(() => {
    window.location.href = "TypeOfDates.html";
  }, 2000);
}
function dateAnswer(btn, isYes) {
  const dateText = document.getElementById("date");
  const calendarBox = document.getElementById("calendarBox");

  // reset animations
  document.querySelectorAll(".btn")
    .forEach(b => b.classList.remove("correct", "wrong"));

  void btn.offsetWidth;

  if (isYes) {
    btn.classList.add("correct");
    dateText.textContent = "Let's schedule it ❤️";
    calendarBox.style.display = "block";
  } else {
    btn.classList.add("wrong");
    dateText.textContent = "Maybe next time when you are free 🥺";
    calendarBox.style.display = "none";

    // 🔹 Clear previous date info
    localStorage.removeItem("date");
    localStorage.removeItem("time");
  }
}

//TypeOfDates
function select(card) {
  // remove active state from all
  document.querySelectorAll(".card")
    .forEach(c => c.classList.remove("active"));

  card.classList.add("active");
}

// type of dates
let redirected = false;

function select(card, text) {
  if (redirected) return;

  document.querySelectorAll(".card")
    .forEach(c => c.classList.remove("active"));

  card.classList.add("active");

  localStorage.setItem("dateType", text);

  showToast(text);
}

function showToast(choice) {
  const toast = document.getElementById("toast");

  toast.textContent = `Great choice! Let's enjoy our ${choice} together ❤️`;
  toast.classList.add("show");

  // Redirect after toast
  setTimeout(() => {
    toast.classList.remove("show");
    redirected = true;
    window.location.href = "information.html"; // 👈 change this
  }, 2000);
}

const isinformationPage = document.body.id === "information-page";

if (isinformationPage) {
  let clicked = false;

  document.addEventListener("click", () => {
    if (clicked) return;
    clicked = true;

    document.body.classList.add("fade-out");

    setTimeout(() => {
      window.location.href = "information.html";
    }, 1000);
  });
}

const isFeelingsPage = document.body.id === "feelings-page";

if (isFeelingsPage) {
  let clicked = false;

  document.addEventListener("click", () => {
    if (clicked) return;
    clicked = true;

    document.body.classList.add("fade-out");

    setTimeout(() => {
      window.location.href = "Feelings.html";
    }, 1000);
  });
}


// animation

function shakeNo(btn) {
  btn.classList.add("active");
  setTimeout(() => btn.classList.remove("active"), 400);
}

// load data 
window.onload = () => {
  const el = id => document.getElementById(id);

  const feelings = localStorage.getItem("feelings") || "Not set";
  const date = localStorage.getItem("date") || "Not set";
  const time = localStorage.getItem("time") || "Not set";
  const type = localStorage.getItem("dateType") || "Not set";

  el("infoFeelings").textContent = `Feelings: ${feelings} ❤️`;
  el("infoDate").textContent = `Date: ${date}`;
  el("infoTime").textContent = `Time: ${time}`;
  el("infoType").textContent = `Activity: ${type}`;
};

function next() {
  localStorage.clear();
  window.location.href = "index.html";
}
