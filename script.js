const app = document.getElementById("app");

/* Client-side routing */
function navigate(page) {
  if (page === "register") loadRegister();
  if (page === "about") loadAbout();
}

navigate("register");

/* Register Page */
function loadRegister() {
  app.innerHTML = `
    <h2>Register</h2>
    <form onsubmit="return validateForm()">
      <input type="text" id="username" placeholder="Username">
      <input type="password" id="password" placeholder="Password">
      <p id="strength"></p>
      <input type="password" id="confirm" placeholder="Confirm Password">
      <button type="submit">Submit</button>
      <p id="message"></p>
    </form>
  `;
}

/* About Page */
function loadAbout() {
  app.innerHTML = `
    <h2>About</h2>
    <p>This page demonstrates client-side routing.</p>
  `;
}

/* Password strength check */
document.addEventListener("input", function (e) {
  if (e.target.id === "password") {
    const strength = document.getElementById("strength");
    const value = e.target.value;

    if (value.length < 6) {
      strength.textContent = "Weak password";
      strength.style.color = "red";
    } else if (/[A-Z]/.test(value) && /[0-9]/.test(value)) {
      strength.textContent = "Strong password";
      strength.style.color = "green";
    } else {
      strength.textContent = "Medium password";
      strength.style.color = "orange";
    }
  }
});

/* Form validation */
function validateForm() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;
  const confirm = document.getElementById("confirm").value;
  const msg = document.getElementById("message");

  if (!user || !pass || !confirm) {
    msg.textContent = "All fields are required";
    msg.className = "error";
    return false;
  }

  if (pass !== confirm) {
    msg.textContent = "Passwords do not match";
    msg.className = "error";
    return false;
  }

  msg.textContent = "Registration successful!";
  msg.className = "success";
  return false;
}
