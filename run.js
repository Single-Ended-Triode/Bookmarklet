/// run.js
javascript:window.onkeydown = function(event) {
  if (event.keyCode === 192) {
    (function() {
      var choice = prompt("Enter a number:");
      
      if (choice === "1") {
        var code = prompt("Enter JavaScript code to run:");
        
        if (code) {
          var script = document.createElement('script');
          script.textContent = code;
          document.body.appendChild(script);
        } else {
          alert("No code provided!");
        }
      } else {
        alert("Invalid choice!");
      }
    })();
  }
};