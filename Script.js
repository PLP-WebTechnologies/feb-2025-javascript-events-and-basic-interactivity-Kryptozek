// 1. Event Handling
document.getElementById("clickBtn").addEventListener("click", () => {
  alert("Button clicked!");
});

document.getElementById("hoverBox").addEventListener("mouseover", () => {
  hoverBox.style.backgroundColor = "salmon";
});

document.getElementById("keypressInput").addEventListener("keypress", (e) => {
  console.log(`You pressed: ${e.key}`);
});

let timer;
document.getElementById("secretBtn").addEventListener("mousedown", () => {
  timer = setTimeout(() => {
    alert("Long press detected! 🤫");
  }, 1000);
});

document.getElementById("secretBtn").addEventListener("mouseup", () => {
  clearTimeout(timer);
});

// 2. Interactive Elements
document.getElementById("colorChanger").addEventListener("click", (e) => {
  e.target.style.backgroundColor =
    "#" + Math.floor(Math.random() * 16777215).toString(16);
});

const tabs = document.querySelectorAll(".tab-btn");
tabs.forEach(tab => {
  tab.addEventListener("click", (e) => {
    document.querySelectorAll(".tab-content").forEach(el => el.style.display = "none");
    document.getElementById("tab" + e.target.dataset.tab).style.display = "block";
  });
});

// 3. Form Validation
const form = document.getElementById("myForm");
const feedback = document.getElementById("feedback");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  if (!name || !email || password.length < 8) {
    feedback.textContent = "Please fill all fields correctly.";
    feedback.style.color = "red";
  } else {
    feedback.textContent = "Form submitted successfully!";
    feedback.style.color = "green";
  }
});

// Real-time password feedback
document.getElementById("password").addEventListener("input", (e) => {
  if (e.target.value.length < 8) {
    feedback.textContent = "Password too short!";
    feedback.style.color = "orange";
  } else {
    feedback.textContent = "";
  }
});
