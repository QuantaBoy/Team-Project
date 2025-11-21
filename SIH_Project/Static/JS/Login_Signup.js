  const container = document.getElementById("container");
  const loginForm = document.getElementById("loginForm");
  const signupForm = document.getElementById("signupForm");

  document.getElementById("toSignup").onclick = () => {
      container.classList.add("signup-active");
      loginForm.classList.remove("active");
      signupForm.classList.add("active");
  };

  document.getElementById("toLogin").onclick = () => {
      container.classList.remove("signup-active");
      signupForm.classList.remove("active");
      loginForm.classList.add("active");
  };