const signUpLink = document.querySelector('.sign-up-link a');
const signInSubmit = document.getElementById('sign-in-submit');
const signUpSubmit = document.getElementById('sign-up-submit');

signUpLink.addEventListener('click', () => {
  // Toggle sign-in and sign-up content visibility
  document.getElementById('sign-in').classList.add('hidden');
  document.getElementById('sign-up').classList.remove('hidden');
});

signInSubmit.addEventListener('click', (event) => {
  event.preventDefault(); // Prevent default form submission

  // Simulate AJAX form submission (replace with actual login logic)
  console.log('Sign-in form submitted (replace with actual login logic)');
});

signUpSubmit.addEventListener('click', (event) => {
  event.preventDefault(); // Prevent default form submission

  // Simulate AJAX form submission (replace with actual signup logic)
  console.log('Sign-up form submitted (replace with actual signup logic)');
});
