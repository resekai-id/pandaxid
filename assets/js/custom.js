  // Current Year.
document.getElementById("year").innerHTML = new Date().getFullYear();


  // Preloader.
      $(window).load(function() {
        $(".preloader").delay(500).fadeOut("slow");
        $(".preloader_wrap").delay(500).fadeOut("slow");
      })
      
      
 // Get the current Hour. 
      var currentHour = new Date().getHours(),
        output = document.getElementById('greeting');
      if ((currentHour >= 5) && (currentHour < 12)) {
        output.innerHTML += " <br/><br/> Hi, Good Morning 🌄 ";
      } else if ((currentHour >= 12) && (currentHour < 15)) {
        output.innerHTML += "  <br/><br/> Hi, Good Noon 🌤️ ";
      } else if ((currentHour >= 15) && (currentHour < 17)) {
        output.innerHTML += " <br/><br/> Hi, Good Afternoon 🌇 ";
      } else if ((currentHour >= 17) && (currentHour < 21)) {
        output.innerHTML += "  <br/><br/> Hi, Good Evening 🌆 ";    
      } else {
        output.innerHTML += "  <br/><br/> Hi, Good Night 🌃 ";
      }       