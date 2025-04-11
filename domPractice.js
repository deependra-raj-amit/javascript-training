// getElementById(id)               
// getElementsByClassName()
// querySelector()
// querySelectorAll()

function updateBalance() {
    const balance = document.getElementById("balance");
    balance.textContent = "Balance: $1000";
  }
  

function applyLoan() {
    document.getElementById("applyLoanBtn").addEventListener("click", () => {
        alert("Loan application submitted!");
      });
}



document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("loginForm").addEventListener("submit", function(e) {
        //e.preventDefault();
      
        const user = document.getElementById("username").value;
        const pass = document.getElementById("password").value;
      
        if (user === "" || pass === "") {
          alert("Username and password required");
          return;
        }
      
        console.log(alert("Login successful"));
      });
});



  
  
  