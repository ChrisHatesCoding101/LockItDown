// LOGIN JAVASCRIPT //
 
  // redirect user to homepage //
  const redirectHome = (url) => {window.location.href = url;}
  
  // login user if their data matches data grabbed from storage AND if they pass 2 factor authentification // 
  function login(){
    grabUserInput();
  }
  
  // redirects user to create an account page //
  function createAccount(){
      setTimeout(function(){window.location.href = "createAcc.html"}, 1000);   
  }
  // redirects user to forgot password page //
  function forgotPassword(){
      setTimeout(function(){window.location.href = "forgotPass.html"}, 1000);  
  }
  // redirects user to deactivate account page //
  
  function deactivateAccount(){
      // make it so only admins can approve and disapprove the deactivication  once a request is sent //
  }
  
  // retrieves the user data from localStorage //
  function grabUserInput(){ 
      const storedInput = JSON.parse(localStorage.getItem(`userAccount`));
      const loginUser = document.getElementById("Username");
      const loginPass = document.getElementById("Password");
      const loginID = document.getElementById("UniqueID");
      console.log(storedInput);
      const isValid =  storedInput && storedInput.username === loginUser && storedInput.password === loginPass && storedInput.ID === loginID;
      isValid ? redirectHome("home.html") : alert("Username or Password is Incorrect! Please try again.");
    }
  
    // FIX GRAB INPUT TO CONFIRM IF INPUT IS CORRRECT //