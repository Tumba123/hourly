// app.js

function login() {
    // Get the entered username and password
    const username = document.querySelector('input[type="text"]').value;
    const password = document.querySelector('input[type="password"]').value;
  
    // Replace these with your actual username and password
    const expectedUsername = "admin";
    const expectedPassword = "admin";
  
    if (username === expectedUsername && password === expectedPassword) {
      // Hide the login form and show the content
      document.getElementById('loginDialog').style.display = 'none';
      document.getElementById('content').style.display = 'flex';
      document.getElementById('header-box').style.display = 'block';
    } else {
      alert("Invalid username or password. Please try again.");
    }
  }


  function downloadFile() {
    // Create an anchor element
    const a = document.createElement('a');
    
    // Set the href to the download link
    a.href = 'https://docs.google.com/spreadsheets/d/1ezwXXfRFe-C2YkOG3llnFu7O3hPI19ZPjSfomePEJfY/edit?usp=sharing';
    
    a.setAttribute('target', '_blank');
    
    a.click();
  }

  function downloadPEP() {
    // Create an anchor element
    const a = document.createElement('a');
    
    // Set the href to the download link
    a.href = 'https://docs.google.com/spreadsheets/d/1qA4Nu_4MVsXjftqrfkImVFmRXLdXMXRO/edit?usp=sharing&ouid=114082557894000300109&rtpof=true&sd=true';
    
    a.setAttribute('target', '_blank');
    
    a.click();
  }
  
  document.querySelector('input[type="password"]').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
      login();
    }
  });
  
  let dialogShown = false; // Initialize a flag to track if the dialog has been shown

  const triggerDialog = document.getElementById('trigger-dialog');
  const dialog = document.getElementById('pep-warning-diag');
  
  // Add an event listener to open the dialog when the trigger element is hovered
  triggerDialog.addEventListener('mouseover', () => {
    // Check if the dialog has already been shown
    if (!dialogShown) {
      dialog.showModal();
      dialogShown = true; // Set the flag to true to indicate that the dialog has been shown
    }
  });
  
  dialog.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent the form from actually submitting
    dialog.close();
  });
  