document.getElementById('toSignUp').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('signInPanel').style.display = 'none';
    document.getElementById('signUpPanel').style.display = 'flex';
  });

  document.getElementById('toSignIn').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('signInPanel').style.display = 'flex';
    document.getElementById('signUpPanel').style.display = 'none';
  });