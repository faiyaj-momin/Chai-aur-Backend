/*function validateForm() {
    // You can implement validation logic here
    // For simplicity, we'll just check if all fields are filled
    const fullName = document.getElementById('fullName').value;
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const coverImage = document.getElementById('coverImage');

    if (!fullName || !username || !email || !password) {
        alert('All fields are required');
    } else {
        // Form is valid, you can submit it or perform further actions
        alert('Form submitted successfully');
    }
}
*/
function displayImagePreview(inputId, previewId) {
    const preview = document.getElementById(previewId);
    const input = document.getElementById(inputId);
    const file = input.files[0];

    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            preview.style.backgroundImage = `url('${e.target.result}')`;
        };
        reader.readAsDataURL(file);
    }
}

/*
const registerForm = document.getElementById('registrationForm');
console.log(registerForm);
registerForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  const formData = new FormData(registerForm);

  try {
    const response = await fetch('/register', {
      method: 'POST',
      body: formData
    });

    if (response.ok) {
      const data = await response.json();
      console.log('User registered successfully:', data);
      // Handle successful registration
    } else {
      const error = await response.json();
      console.error('Registration failed:', error);
      // Handle registration error
    }
  } catch (error) {
    console.error('Error registering user:', error);
  }
});
*/

const clickOnOpen = (input, click) => {
  const inputFile = document.getElementById(input);
  const clickOn = document.getElementById(click).click();
  
};

