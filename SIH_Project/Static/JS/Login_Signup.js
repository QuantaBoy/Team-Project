// Example JS for form submission handling and using localStorage

document.getElementById('signup-form').addEventListener('submit', function (e) {
  e.preventDefault()

  const nameEmail = document.getElementById('signup-name').value.trim()
  const password = document.getElementById('signup-password').value

  if (nameEmail && password) {
    // Save signup data in localStorage
    localStorage.setItem('user', JSON.stringify({ nameEmail, password }))
    alert('Signup successful!')
    this.reset()
  } else {
    alert('Please fill all fields.')
  }
})

document.getElementById('login-form').addEventListener('submit', function (e) {
  e.preventDefault()

  const usernameEmail = document.getElementById('login-username').value.trim()
  const password = document.getElementById('login-password').value

  const userData = JSON.parse(localStorage.getItem('user'))

  if (
    userData &&
    userData.nameEmail === usernameEmail &&
    userData.password === password
  ) {
    alert('Login successful!')
    this.reset()
  } else {
    alert('Invalid username/email or password.')
  }
})
